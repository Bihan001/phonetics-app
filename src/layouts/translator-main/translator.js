import { useDispatch, useSelector } from 'react-redux';
import { setContent } from 'redux/slices/translate';
import { replaceString } from 'utils/functions';

export const useTranslator = () => {
  const dispatch = useDispatch();
  const { content, currentContentOptions, selectionStartIndex, selectionEndIndex } = useSelector((state) => state.translate);

  const updateSelectedText = (selectedText) => {
    dispatch(setContent(replaceString(content, selectedText, selectionStartIndex, selectionEndIndex)));
  };

  return { suggessions: currentContentOptions, updateSelectedText };
};
