import { useMemo } from 'react';
import { RootContainer, Header, CardsContainer } from './translator.styles';
import Autocomplete, { Option } from 'components/autocomplete';
import TextField from 'components/text-field';
import { useTheme } from '@emotion/react';
import RadioButtons from 'components/radio';
import Flex from 'components/flex';
import InfoCard from 'components/cards/info-card';
import Button from 'components/button';
import Editor from './editor';
import { useTranslator } from './translator';
import { useSelector } from 'react-redux';
import { getTotalCharacters, getTotalWords } from 'utils/functions';
import { languages } from 'utils/constants';

const Translator = () => {
  const theme = useTheme();
  const { content, language } = useSelector((state) => state.translate);
  const { suggessions, updateSelectedText, setCurrentLanguage, downloadContent, saveContent, copyContent, printContent, resetContent } =
    useTranslator();

  const actionButtons = [
    { label: 'Download', onClick: downloadContent },
    { label: 'Save', onClick: saveContent },
    { label: 'Copy', onClick: copyContent },
    { label: 'Print', onClick: printContent },
    { label: 'Reset', onClick: resetContent },
  ];

  const totalCharacters = useMemo(() => getTotalCharacters(content), [content]);
  const totalWords = useMemo(() => getTotalWords(content), [content]);

  const TranslateHeader = ({ suggessions }) => {
    return (
      <Header elevation={0}>
        <Flex align='center'>
          {suggessions.length === 0 ? (
            <p>Translate from English to {language.label}</p>
          ) : (
            suggessions.map((s, index) => (
              <Button key={index} size='small' variant='contained' type='primary' onClick={() => updateSelectedText(s)}>
                {s}
              </Button>
            ))
          )}
        </Flex>
      </Header>
    );
  };

  return (
    <RootContainer elevation={0}>
      <Flex justify='space-evenly' align='center' wrap='wrap'>
        <Autocomplete
          size='small'
          options={languages}
          getOptionLabel={(option) => option.label}
          sx={{ width: 300, background: theme.palette.background.default }}
          renderOption={(props, option) => <Option {...props}>{option.label}</Option>}
          renderInput={(params) => <TextField {...params} label='Select Language' />}
          onChange={(e, selectedOption) => setCurrentLanguage(selectedOption)}
        />
        <RadioButtons
          direction='row'
          options={[
            { label: 'Word by Word', value: 'asdf' },
            { label: 'Character by Character', value: 'aa' },
          ]}
        />
      </Flex>
      <TranslateHeader suggessions={suggessions} />
      <Editor />
      <CardsContainer>
        <InfoCard elevation={0} label='Words' value={totalWords} />
        <InfoCard elevation={0} label='Chars' value={totalCharacters} />
        {actionButtons.map((el, i) => (
          <Button key={i} size='small' variant='contained' type='secondary' onClick={(e) => el.onClick(e)}>
            {el.label}
          </Button>
        ))}
      </CardsContainer>
    </RootContainer>
  );
};

export default Translator;
