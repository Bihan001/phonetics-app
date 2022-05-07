import GraphemeSplitter from 'grapheme-splitter';

const splitter = new GraphemeSplitter();
const seperatorRegex = /[`!@#$%^&*()_+\-=\]{};':"\\|,.<>?~\s+]/;

export const replaceString = (inputString, targetString, startIndex, endIndex) => {
  return inputString.slice(0, startIndex) + targetString + inputString.slice(endIndex);
};

export const getTotalCharacters = (inputString) => {
  return splitter.splitGraphemes(inputString).length;
};

export const getTotalWords = (inputString) => {
  return inputString
    .trim()
    .split(seperatorRegex)
    .filter((x) => !!x.trim()).length;
};
