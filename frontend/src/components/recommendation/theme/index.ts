import { extendTheme } from '@chakra-ui/react';
import { cardTheme } from './cardTheme';

const theme = extendTheme({
  components: {
    Card: cardTheme,
  },
});

export default theme;