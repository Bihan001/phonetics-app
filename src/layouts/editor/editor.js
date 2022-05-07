import { useDispatch, useSelector } from 'react-redux';
import { seperators } from 'utils/constants';
import { setContent, setCurrentContentOptions, setStartAndEndIndex } from 'redux/slices/translate';
import { handleStringTranslation } from 'services/translate';

/**
 * @returns {object} Contains the following properties:
 * @property {string} content The content present in the editor
 * @property {function} onContentChange The callback function to be used when the content is updated
 * @property {function} onContentSelect The callback function to be used when part of the content is selected
 * - This hook returns the functions and data to be used in the editor component
 * - It seperates the logic from the component and makes it reusable
 */
export const useEditor = () => {
  const dispatch = useDispatch();
  const { content, language } = useSelector((state) => state.translate);
  const dictionary = useSelector((state) => state.dictionary);

  /**
   *
   * @param {event} e The event object
   * @returns {array} An array consisting of the start and end index of the selected text in the whole content
   */
  const getSelectedTextIndexes = (e) => {
    let startIndex = e.target.selectionStart;
    let endIndex = e.target.selectionEnd;
    return [startIndex, endIndex];
  };

  /**
   *
   * @param {string} inputString The input string to be translated
   * @returns An array consisting of the start and end index of the last word in the whole content
   * - This function is used to get the indexes of the last word in the content
   */
  const getLastTextIndexes = (inputString) => {
    let j = inputString.length - 1;
    let i = j - 1;
    while (i >= 0 && !seperators.includes(inputString[i])) i--;
    i++;
    return [i, j];
  };

  /**
   *
   * @param {event} e The event object
   * @returns {void} Nothing
   * - This is the callback function to be used when part of the content is selected
   * - It searches for the possible translations of the selected text ans stores them in the reducer
   * - It also updates the start and end index of the selected text in the reducer
   */
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

  /**
   *
   * @param {event} e The event object
   * @returns {void} Nothing
   * - This is the callback function to be used when the content is updated
   * - It gets the start and end index of the last word in the content translates it accordingly
   */
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
