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

const Translator = () => {
  const theme = useTheme();
  const { suggessions, updateSelectedText } = useTranslator();

  const TranslateHeader = ({ suggessions }) => {
    return (
      <Header elevation={0}>
        {suggessions.length === 0 ? (
          <p>Translate from English to Bengali</p>
        ) : (
          suggessions.map((s, index) => (
            <Button key={index} size='small' variant='contained' type='primary' onClick={() => updateSelectedText(s)}>
              {s}
            </Button>
          ))
        )}
      </Header>
    );
  };

  return (
    <RootContainer elevation={0}>
      <Flex justify='space-evenly' align='center'>
        <Autocomplete
          size='small'
          options={[]}
          sx={{ width: 300, background: theme.palette.background.default }}
          renderOption={(props, option) => <Option {...props}>{option.label}</Option>}
          renderInput={(params) => <TextField {...params} label='Select Language' />}
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
        <InfoCard elevation={0} label='Total Words' value={10} />
        <InfoCard elevation={0} label='Total Words' value={10} />
        <InfoCard elevation={0} label='Total Words' value={10} />
        <InfoCard elevation={0} label='Total Words' value={10} />
        <InfoCard elevation={0} label='Total Words' value={10} />
      </CardsContainer>
      <CardsContainer>
        <Button size='small' variant='contained' type='secondary'>
          Hello
        </Button>
        <Button size='small' variant='contained' type='secondary'>
          Hello
        </Button>
        <Button size='small' variant='contained' type='secondary'>
          Hello
        </Button>
        <Button size='small' variant='contained' type='secondary'>
          Hello
        </Button>
      </CardsContainer>
    </RootContainer>
  );
};

export default Translator;
