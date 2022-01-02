import { createGlobalStyle } from "styled-components";

import MontserratRegular from "./Montserrat-Regular.ttf";
import MontserratBold from "./Montserrat-Bold.ttf";
import MontserratLight from "./Montserrat-Light.ttf";
import MontserratMedium from "./Montserrat-Medium.ttf";
import MontserratSemiBold from "./Montserrat-SemiBold.ttf";

export default createGlobalStyle `
    @font-face {
        font-family: "Montserrat";
        src: url(${MontserratRegular}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: "Montserrat";
        src: url(${MontserratBold}) format('truetype');
        font-weight: 700;
        font-style: normal;
    }
    
    @font-face {
        font-family: "Montserrat";
        src: url(${MontserratLight}) format('truetype');
        font-weight: 300;
        font-style: normal;
    }
    
    @font-face {
        font-family: "Montserrat";
        src: url(${MontserratMedium}) format('truetype');
        font-weight: 500;
        font-style: normal;
    }

    @font-face {
        font-family: "Montserrat";
        src: url(${MontserratSemiBold}) format('truetype');
        font-weight: 600;
        font-style: normal;
    }
`;