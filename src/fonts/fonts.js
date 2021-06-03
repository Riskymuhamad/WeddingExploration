import { createGlobalStyle } from 'styled-components';

import Playfair from './Playfair.ttf';
import Poppins from './Poppins.ttf';

export default createGlobalStyle`
    @font-face {
        font-family: 'Playfair';
        src: local('Playfair'), local('Playfair'),
        url(${Playfair}) format('ttf');
        font-style: normal;
    }

    @font-face {
        font-family: 'Poppins';
        src: local('Poppins'), local('Poppins'),
        url(${Poppins}) format('ttf');
        font-style: normal;
    }
`;