import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    :root {
        --title-xl: 3rem;
        --title-lg: 2rem;
        --title-md: 1.5rem;
        --title-sm: 1.25rem;
        --title-xs: 1.125rem;
        
        --text-lg: 1.25rem;
        --text-md: 1rem;
        --text-sm: 0.875rem;
        --text-xs: 0.75rem;
    }

    body {
        margin: 0%;
        padding: 0;
        box-sizing: border-box;

        background-color: ${(props) => props.theme['gray-100']};
    }

    button, input, text-area {
        font-family: 'Roboto', sans-serif
    }

    button {
        appearance: none;
        border: none;
        cursor: pointer;
    }

    input {
        border: 0;
    }

    input[type="number"]{
        -moz-appearance:textfield;
        appearance: none;
}

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -moz-appearance: textfield;
        -webkit-appearance: none;
        appearance: none;
        margin: 0;
      }
   
      h1, h2, h3{
          font-family: "Baloo 2", system-ui;
        } 
        
        h1 { 
            color: ${(props) => props.theme['gray-900']};
            font-size: var(--title-xl);
            font-weight: 800;
        }
        
        h3 {
            font-size: var(--title-sm);
            font-weight: 700;

            color: ${(props) => props.theme['gray-800']};
            margin: 0;
        }

        span, label, p { 
            font-family: 'Roboto', sans-serif;
            font-weight: 400;
        }

        h1, h2, h3, span, p {
            line-height: 1.3;
        }
            
        span { 
            color: ${(props) => props.theme['gray-800']};
            font-size: var(--text-lg);
        }

        p {
            color: ${(props) => props.theme['gray-600']};
            font-size: var(--text-sm);
        }
        

`
