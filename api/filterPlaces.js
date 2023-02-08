const token = '0b265a1bc90ab2790168733739e40437ebc2df2c';
// Метод для обновления проекта
export default async function filterPlaces(search) {
  // eslint-disable-next-line no-undef
  const response = await $nuxt.context.$baseAxios({
    method: 'post',
    url: 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Token ${token}`,
    },
    data: {
      query: search, // This is the body part
      from_bound: { value: 'region' },
      to_bound: { value: 'region' },
      count: 3,
    },
    params: { externalToken: true },
  });
  return response.data;
}
