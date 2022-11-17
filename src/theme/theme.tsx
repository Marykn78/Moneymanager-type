import {createTheme} from "@mui/material";
import {PaletteMode} from '@mui/material'
import {grey, purple,blueGrey,pink} from '@mui/material/colors'

export const theme = (mode:PaletteMode)=>createTheme({
    typography: {
        fontFamily: 'dena'
    },
    palette:{
        mode,
      ...(mode === 'light'
        ? {
            // palette values for light mode
            primary: pink,
            divider: pink[200],
            background: {
                default: blueGrey[700],
                paper: grey[900],
            },
            text: {
              primary: purple[700],
              secondary: purple[800],
            },
          }
        : {
            // palette values for dark mode
            primary: blueGrey,
            divider: grey[700],
            background: {
              default: blueGrey[700],
              paper: grey[900],
            },
            text: {
              primary: '#fff',
              secondary: grey[500],
            },
          }),
    }
})