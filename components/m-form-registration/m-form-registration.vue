<template>
  <div class="m-form-registration">
    <m-form
      ref="form"
      :isVertical="true"
      :title="title"
      :checkboxText="checkboxText"
      btnText="Отправить"
      :typeCtrl="typeCtrl"
      :typeBtn="typeBtn"
      :checked="checked"
      :submitDisabled="!validFlag"
      @submit-disabled="validFlag = $event"
      @click="sendForm"
    >
      <template v-slot:inputs>
        <template>
          <!-- <p>{{eventCurrent}}</p> -->
          <a-input
            class="m-form__input"
            placeholder="Ваше имя"
            type="text"
            ref="name"
            @input="validFormData"
            v-model="fieldsData.name"
            @focus="focus('name')"
          />
          <a-input
            class="m-form__input"
            placeholder="Ваша фамилия"
            type="text"
            ref="surname"
            @input="validFormData"
            v-model="fieldsData.surname"
            @focus="focus('surname')"
          />
          <vue-tel-input
            placeholder="Телефон"
            type="phone"
            ref="tel"
            @focus="focus('tel')"
            v-bind="vueTelOpts"
            @input="validatePhone"
            @change="validFormData"
            v-model="fieldsData.phone"
          ></vue-tel-input>
          <a-input
            :label="emailErrorMessage"
            :labelIcon="emailErrorMessage ? 'si-info' : ''"
            :condition="emailErrorMessage ? 'error' : 'base'"
            class="m-form__input"
            placeholder="Почта"
            type="email"
            ref="email"
            @focus="focus('email')"
            @input="validFormData"
            v-model="fieldsData.email"
          />
          <a-input class="m-form__input" placeholder="Регион" type="text" v-model="searchDone" v-if="searchComplete" />
          <div v-else class="m-form__serchbox">
            <a-input
              class="m-form__input-search"
              clearable
              icons="si-search"
              v-model="search"
              placeholder="Регион"
              @input="validFormData"
            />
            <div class="m-form__input-cities">
              <div
                class="m-form__input-city"
                :class="{ active: item.value === fieldsData.area }"
                v-for="(item, index) in suggestedCities"
                :key="index"
                @click="selectItemClickHandler(item)"
              >
                <p class="m-form__input-city-label" v-html="item.value"></p>
                <i v-if="item.value === fieldsData.area" class="m-form__input-city-selected si-done"></i>
              </div>
            </div>
          </div>
        </template>
      </template>
    </m-form>
  </div>
</template>

<script>
import { MForm } from '@cwespb/synergyui';
import { VueTelInput } from 'vue-tel-input';
import AInput from '~/components/ui/a-input/a-input';
import registrationEvent from '~/api/registrationEvent';
import filterPlaces from '~/api/filterPlaces';

import './m-form-registration.scss';

export default {
  name: 'm-form-registration',
  components: {
    MForm,
    AInput,
    VueTelInput,
  },
  props: [
    'title',
    'subtitle',
    'titleClass',
    'checkboxText',
    'btnText',
    'typeCtrl',
    'typeBtn',
    'checked',
    'eventCurrent',
  ],
  data() {
    return {
      fieldsData: {
        name: '',
        surname: '',
        phone: '',
        email: '',
        area: '',
      },
      vueTelOpts: {
        mode: 'international',
        preferredCountries: ['RU', 'US'],
        wrapperClasses: '',
        inputClasses: '',
        autoFormat: true,
        inputOptions: {
          showDialCode: false,
          placeholder: 'Телефон',
          maxlength: 14,
        },
      },
      search: '',
      searchDone: '',
      searchComplete: false,
      suggestedCities: [],
      maxPhoneLength: 16,
      localRuPhoneLength: 11,
      validFlag: false,
      emailErrorMessage: '',
      validPhone: false,
      initCall: false,
    };
  },
  watch: {
    search() {
      this.fetchCities();
    },
    searchDone() {
      if (this.searchDone === '') {
        this.search = '';
        this.searchComplete = false;
      }
    },
  },
  methods: {
    focus(e) {
      const element = this.$refs[e].$el;
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    },
    async sendForm() {
      const htmlWrapper = document.querySelector('html');
      htmlWrapper.style.overflowY = this.isOpen ? 'hidden' : 'visible';
      this.errorMessage = false;

      const requestData = {
        name: this.fieldsData.name,
        surname: this.fieldsData.surname,
        area: this.fieldsData.area,
        phone: this.fieldsData.phone,
        email: this.fieldsData.email,
        eventId: this.eventCurrent.id,
        mergelead: `name_${this.fieldsData.name}_email_${this.fieldsData.email}`,
        'comments[мероприятие]': this.eventCurrent.name,
        'comments[начало мероприятия]': this.eventCurrent.dateFrom,
      };

      this.sendFormToLander(requestData);
      try {
        await registrationEvent(requestData);
        this.$router.push({
          path: '/thanks',
        });
      } catch (err) {
        const error = err.response?.data?.errors;
        const emailMessage = error?.email && error?.email[0];
        this.emailErrorMessage = emailMessage || '';
      }
    },
    sendFormToLander(data) {
      this.$lander.send(data).then(() => {});
    },

    validatePhone(phone, { valid, number }) {
      const telOpts = this.vueTelOpts;
      const inputOpts = telOpts.inputOptions;
      const isLocalCode = phone[0] === '8';
      inputOpts.maxlength = this.maxPhoneLength;
      telOpts.autoFormat = !isLocalCode;
      this.validPhone = valid && isLocalCode ? phone.length === this.localRuPhoneLength : valid;
      if (valid) {
        telOpts.mode = isLocalCode ? 'auto' : 'international';
        inputOpts.maxlength = isLocalCode ? this.localRuPhoneLength : number.length;
      }
      this.validFormData();
    },

    validFormData() {
      const dataForm = [
        { value: this.fieldsData?.name },
        { value: this.fieldsData?.surname },
        { value: this.search },
        { value: this.fieldsData?.email, type: 'email' },
      ];
      this.validFlag = this.$lander.valid(dataForm) && this.validPhone;
      this.$lander.storage.save('form-registration', this.fieldsData);
      sessionStorage.setItem('thankspage', JSON.stringify(this.eventCurrent));
    },
    selectItemClickHandler(item) {
      this.fieldsData.area = item.value;
      this.suggestedCities = [];
      this.searchDone = item.value;
      this.searchComplete = !this.searchComplete;
    },
    async fetchCities() {
      const response = await filterPlaces(this.search);
      this.suggestedCities = response.suggestions;
    },
  },
};
</script>
