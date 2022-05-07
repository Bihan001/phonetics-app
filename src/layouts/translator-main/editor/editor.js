export default function useEditor() {
  const [content, setContent] = useState('');

  const onContentChange = (e) => {
    setContent(e.target.value);
  };

  return { content, onContentChange };
}
