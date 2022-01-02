import { createGlobalStyle } from "styled-components";

import MontserratBlack from "./Montserrat-Black.ttf";
import MontserratBold from "./Montserrat-Bold.ttf";
import MontserratLight from "./Montserrat-Light.ttf";
import MontserratMedium from "./Montserrat-Medium.ttf";
import MontserratSemiBold from "./Montserrat-SemiBold.ttf";

export default createGlobalStyle`
    @font-face {
        font-family: "Montserrat";
        src: url(${MontserratBlack}) format('ttf');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: "Montserrat";
        src: url(${MontserratBold}) format('ttf');
        font-weight: 700;
        font-style: normal;
    }
    
    @font-face {
        font-family: "Montserrat";
        src: url(${MontserratLight}) format('ttf');
        font-weight: 300;
        font-style: normal;
    }
    
    @font-face {
        font-family: "Montserrat";
        src: url(${MontserratMedium}) format('ttf');
        font-weight: 500;
        font-style: normal;
    }

    @font-face {
        font-family: "Montserrat";
        src: url(${MontserratSemiBold}) format('ttf');
        font-weight: 600;
        font-style: normal;
    }
`;
