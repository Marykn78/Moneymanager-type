import {createTheme} from "@mui/material";
import {PaletteMode} from '@mui/material'
import {grey, purple,blueGrey,deepPurple} from '@mui/material/colors'
import { dark } from "@mui/material/styles/createPalette";

export const theme = (mode:PaletteMode)=>createTheme({
  components:{
     
        MuiCssBaseline:{
          
            styleOverrides:{
                body:{
               
                  ...(mode==='dark'?
                  { background:'#121212'}:{background:'#F3F5F7'}
                  )
                    
                }
            }
        },
    },
    typography: {
        fontFamily: 'dena'
    },
    palette:{
        mode,
      ...(mode === 'light'
        ? {
            // palette values for light mode
            primary:{
              main:'#1c54b2',
              light:'#673ab7',
              // light:'#2979ff',
              // 8561c5
              dark:'',
            } ,
            secondary:{
              main:'#1c54b2',
            },
            divider: deepPurple[200],
            background: {
                default: deepPurple[700],
                paper: deepPurple[900],
            },
            text: {
              primary: purple[700],
              secondary: purple[800],
            },
          }
        : {
            // palette values for dark mode
            primary:{
              main:'#424242',
              light:'#616161',
              // light:grey[600],
            },
            // primary:grey,
            secondary:{
              main:grey[600],
            },
            divider: grey[700],
            background: {
              // default: grey[900],
              default: '#121212',
              paper: grey[700],
            },
            text: {
              // primary: '#fff',
              secondary: grey[500],
              disabled:'#000'
            },
          }),
    }
})