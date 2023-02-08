// Метод для создания проекта

export default async function getAllEvents() {
  // eslint-disable-next-line no-undef
  const response = await $nuxt.context.$baseAxios.get('v1/events');
  return response.data.data;
}
