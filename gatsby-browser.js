/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
//gatsby-browser.js y gatsby-ssr.js lo usa gatby para el context de la app en gatsby
//el mismo codigo de este archivo de estar en el archivo de gatsby-ssr.js
import React from 'react'
import {createGlobalStyle, ThemeProvider} from 'styled-components';
import Theme from './src/themes/theme'

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body,html{
        font-family: ${props => props.theme.fonts.main};
        height: 100%;
        background-color: ${props => props.theme.colors.light1};
    }
`

export const wrapRootElement = ({element}) =>(
    <ThemeProvider theme={Theme}>
        <GlobalStyle />
        {element}
    </ThemeProvider>
)