import { TextArea } from './editor.styles';
import { useEditor } from './editor';

const Editor = () => {
  const { content, onContentChange, onContentSelect } = useEditor();

  return <TextArea onSelect={onContentSelect} rows={10} value={content} onChange={onContentChange}></TextArea>;
};

export default Editor;
