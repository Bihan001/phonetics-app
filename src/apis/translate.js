import { translateApi } from 'config/api-config';

export const getTranslatedString = (str = '', languageCode) => {
  return translateApi.get(`/request?text=${str}&itc=${languageCode}&num=5&cp=0&cs=1&ie=utf-8&oe=utf-8`);
};
