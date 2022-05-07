import { RootContainer, Header, TextArea, CardsContainer } from './translator.styles';
import Autocomplete, { Option } from 'components/autocomplete';
import TextField from 'components/text-field';
import { useTheme } from '@emotion/react';
import RadioButtons from 'components/radio';
import Flex from 'components/flex';
import { Typography } from '@mui/material';
import InfoCard from 'components/cards/info-card';
import Button from 'components/button';

const Translator = () => {
  const theme = useTheme();
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
      <Header elevation={0}>
        <p>Translate from English to Bengali</p>
      </Header>
      <TextArea rows={10}></TextArea>
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
