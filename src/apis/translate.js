import { translateApi } from 'config/api-config';

export const getTranslatedString = (str = '') => {
  return translateApi.get(`/request?text=${str}&itc=bn-t-i0-und&num=5&cp=0&cs=1&ie=utf-8&oe=utf-8`);
};
