// Метод для создания проекта

export default async function getEvent(event) {
  // eslint-disable-next-line no-undef
  const response = await $nuxt.context.$baseAxios.get(`v1/events/${event}?withAdditional=1`);
  return response.data.data;
}
