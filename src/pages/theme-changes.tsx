import { ChangeEvent, useEffect, useState } from "react";
import { Card, CardContent, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import { Layout } from "components/layouts";
import Cookies from 'js-cookie'

const ThemeChangerPage = () =>{

   
    const [ currentTheme,setCurrentTheme ] =useState('light');

    localStorage.setItem('theme',currentTheme );

    const onThemeChange = ( e:ChangeEvent<HTMLInputElement> )=> {
        console.log(e.target.value)
        setCurrentTheme( e.target.value );
        Cookies.set( 'theme', e.target.value);
    }

    useEffect( ()=>{
        console.log( localStorage.getItem('theme') )
    },[] );

    return (
    <Layout>
        <Card>
            <CardContent>
                <FormControl>
                    <FormLabel> Tema </FormLabel>
                        <RadioGroup
                        value={ currentTheme }
                        onChange={ onThemeChange }
                        >
                            <FormControlLabel value='light' control={ <Radio></Radio>}  label='Light'/>
                            <FormControlLabel value='dark' control={ <Radio></Radio>}  label='Dark'/>
                            <FormControlLabel value='custom' control={ <Radio></Radio>}  label='Custom'/>
                        </RadioGroup>
                </FormControl>
            </CardContent>
        </Card>
    </Layout>
    )
}

export default ThemeChangerPage;