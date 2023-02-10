import '@/styles/globals.css'
import { CssBaseline, ThemeProvider } from '@mui/material'

import type { AppProps } from 'next/app'
import { AppComponent } from 'next/dist/shared/lib/router/router'
import { darkTheme } from '../../themes/dark-theme';
import { lightTheme } from '../../themes/light-theme';
import { customTheme } from '../../themes/custom-theme';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

interface Props extends AppProps {
theme:string;
}

export default function App({ Component, pageProps,theme='dark'}: Props) {


 const [ currentTheme,setCurrentTheme ] = useState(lightTheme);

 
 
 useEffect( ()=>{
   
   const cookieTheme = Cookies.get('theme') || 'light';

    const selectedTheme = cookieTheme === 'light'
    ? lightTheme
    : (cookieTheme === 'dark')
      ? darkTheme
      : customTheme;

      setCurrentTheme( selectedTheme );

},[] );

  return (
    <ThemeProvider theme={ currentTheme } >
      <CssBaseline>
        <Component {...pageProps} />
        </CssBaseline>  
    </ThemeProvider>
  )
}

App.getInitialProps = async (appContext:AppComponent)=>{

  const validThemes = ['ligth', 'dark','custom'];

  const { theme } = appContext.ctx.req.cookies ? ( appContext.ctx.req.cookies ): {theme:'light'}
  
return {
  theme:validThemes.includes( theme ) ? theme : 'dark' ,
}

}
