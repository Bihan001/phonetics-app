import { useDispatch, useSelector } from 'react-redux';
import { seperators } from 'utils/constants';
import { setContent, setCurrentContentOptions, setStartAndEndIndex } from 'redux/slices/translate';
import { handleStringTranslation } from 'services/translate';

export const useEditor = () => {
  const dispatch = useDispatch();
  const { content, language } = useSelector((state) => state.translate);
  const dictionary = useSelector((state) => state.dictionary);

  const getSelectedTextIndexes = (e) => {
    let startIndex = e.target.selectionStart;
    let endIndex = e.target.selectionEnd;
    return [startIndex, endIndex];
  };

  const getLastTextIndexes = (inputString) => {
    let j = inputString.length - 1;
    let i = j - 1;
    while (i >= 0 && !seperators.includes(inputString[i])) i--;
    i++;
    return [i, j];
  };

  const onContentSelect = async (e) => {
    const inputString = e.target.value;
    const [startIndex, endIndex] = getSelectedTextIndexes(e);
    const selectedString = inputString.slice(startIndex, endIndex).trim();
    if (startIndex === endIndex || !selectedString || seperators.includes(selectedString)) {
      dispatch(setCurrentContentOptions([]));
      return;
    }
    console.log(startIndex, endIndex);
    await handleStringTranslation(inputString, startIndex, endIndex, language.value);
    dispatch(setStartAndEndIndex([startIndex, endIndex]));
    dispatch(setCurrentContentOptions(dictionary[selectedString]));
  };

  const onContentChange = async (e) => {
    const inputString = e.target.value;
    if (!seperators.includes(inputString.at(-1))) {
      dispatch(setContent(inputString));
      return;
    }
    const [startIndex, endIndex] = getLastTextIndexes(inputString);
    console.log(startIndex, endIndex);
    if (startIndex === endIndex) {
      dispatch(setContent(inputString));
    } else {
      dispatch(setContent(await handleStringTranslation(inputString, startIndex, endIndex, language.value)));
    }
  };

  return { content, onContentChange, onContentSelect };
};
