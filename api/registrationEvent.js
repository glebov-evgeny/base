// Метод для создания проекта

export default async function registrationEvent(data) {
  // eslint-disable-next-line no-undef
  const response = await $nuxt.context.$baseAxios.post('v1/events/register', data);
  return response.data;
}
