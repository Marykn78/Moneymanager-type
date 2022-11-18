import React, { useMemo, useState } from 'react';
import {PaletteMode, ThemeProvider} from "@mui/material";
import {RouterProvider} from "react-router-dom";
import {Route} from "./router/route";
import {theme} from "./theme/theme";
import {Provider} from 'react-redux'
import {store} from "./redux/store";
import Button from '@mui/material/Button';

function App() {
    const [mode,setMode]=useState<PaletteMode>('dark')
    const darkMode =useMemo(()=>(theme(mode)),[mode])
    
    return (
        <Provider store={store}>
            <ThemeProvider theme={darkMode}>
                <RouterProvider router={Route}/>
                {/* <Button onClick={()=>setMode(pre =>(pre === 'light'?'dark':'light'))}>mode</Button> */}
            </ThemeProvider>
        </Provider>
    )
}

export default App;
