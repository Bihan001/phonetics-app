import { useDispatch, useSelector } from 'react-redux';
import { setContent, setLanguage } from 'redux/slices/translate';
import { TEXT_CONTENT } from 'utils/constants';
import { replaceString } from 'utils/functions';

export const useTranslator = () => {
  const dispatch = useDispatch();
  const { content, currentContentOptions, selectionStartIndex, selectionEndIndex } = useSelector((state) => state.translate);

  const updateSelectedText = (selectedText) => {
    dispatch(setContent(replaceString(content, selectedText, selectionStartIndex, selectionEndIndex)));
  };

  const setCurrentLanguage = (lang) => {
    dispatch(setLanguage(lang));
  };

  const downloadContent = () => {
    const element = document.createElement('a');
    const file = new Blob([content], { type: 'text/plain;charset=utf-8' });
    element.href = URL.createObjectURL(file);
    element.download = 'file.txt';
    document.body.appendChild(element);
    element.click();
    element.parentNode.removeChild(element);
  };

  const saveContent = () => {
    localStorage.setItem(TEXT_CONTENT, content);
  };

  const copyContent = () => {
    navigator.clipboard.writeText(content);
  };

  const printContent = () => {
    window.print();
  };

  const resetContent = () => {
    dispatch(setContent(''));
  };

  return {
    suggessions: currentContentOptions,
    updateSelectedText,
    setCurrentLanguage,
    downloadContent,
    saveContent,
    copyContent,
    printContent,
    resetContent,
  };
};
