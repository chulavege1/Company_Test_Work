import { createGlobalStyle } from 'styled-components'; import React from 'react';
// Logo type here
import NeonLogo from './QuarkNeon/QuarkNeon.woff'; import NeonLogo2 from './QuarkNeon/QuarkNeon.woff2';

const GlobalFonst = createGlobalStyle`
    @font-face {
        font-family: 'NeonLogo';
        src: url(${NeonLogo}) format('woff'),
             url(${NeonLogo2}) format('woff2');
        font-weight: 300;
        font-style: normal;
    }
`
export default GlobalFonst