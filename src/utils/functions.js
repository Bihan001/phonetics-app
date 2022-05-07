export const replaceString = (inputString, targetString, startIndex, endIndex) => {
  return inputString.slice(0, startIndex) + targetString + inputString.slice(endIndex);
};
