import { getTranslatedString } from 'apis/translate';
import { updateDictionary } from 'redux/slices/dictionary';
import store from 'redux/store';
import { seperators } from 'utils/constants';
import { replaceString } from 'utils/functions';

export const translateString = async (str, languageCode) => {
  if (seperators.includes(str)) return '';
  try {
    const res = await getTranslatedString(str, languageCode);
    return res.data[1][0][1];
  } catch (err) {
    console.error(err.message);
  }
};

export const handleStringTranslation = async (inputString, startIndex, endIndex, languageCode) => {
  const targetStr = inputString.slice(startIndex, endIndex);
  const translatedResults = await translateString(targetStr, languageCode);
  console.log(targetStr, translatedResults);
  const mostProbableResult = translatedResults[0];
  store.dispatch(updateDictionary({ key: targetStr, values: translatedResults }));
  return replaceString(inputString, mostProbableResult, startIndex, endIndex);
};
