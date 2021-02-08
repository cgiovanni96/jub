import { up } from 'styled-breakpoints'
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    body {
        width: 100%;
        /* margin: 0 1em; */
        display: flex;
        flex-direction: column;
        background: ${({ theme }) => theme.palette.bg};
        color: ${({ theme }) => theme.palette.text.primary};
        font-family: ${({ theme }) => theme.typo.family};
        font-size: ${({ theme }) => theme.typo.size.medium};

        ${up('sm')} {
            width: 80%;
            margin: auto;
        }
    }
`

export default GlobalStyles
