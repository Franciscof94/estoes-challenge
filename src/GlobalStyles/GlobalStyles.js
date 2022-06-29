import styled, { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
    :root {
        --grey-color-10: #D9D9D9;
        --grey-color-30: #f0f2f5;
        --grey-color-50: #6e6e6e;
        --grey-color-60: #595959;
        --red-color: #F5222D;
        --white-color: #FFFFFF;
        --white-color-20: #F5F5F5;
        --radius: 4px;

        --label-color: #262626;

        --shadow: inset 0px -1px 0px #D9D9D9;
    }


    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 1rem;  
    }

    body {
        font-family: 'Roboto', sans-serif;
        background-color: var(--grey-color-30)
    }

    button {
        font-family: 'Roboto', sans-serif;
    }

`;

