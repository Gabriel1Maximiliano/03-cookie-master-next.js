import { ChangeEvent, useEffect, useState, FC, ReactElement } from 'react';
import { Button, Card, CardContent, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import { Layout } from "components/layouts";
import Cookies from 'js-cookie'
import { GetServerSideProps } from "next";
import axios from 'axios';

interface Props {
    theme: string
}

const ThemeChangerPage = ({ theme }:Props) =>{

    
   
    const [ currentTheme,setCurrentTheme ] =useState(theme);

   
    const onThemeChange = ( e:ChangeEvent<HTMLInputElement> )=> {
        
        setCurrentTheme( e.target.value );
        //localStorage.setItem('theme',currentTheme );
        Cookies.set( 'theme', e.target.value);
    }

    const onClick = async()=>{
        const { data } = await axios.get('/api/hello');
        console.log(data)
    }
    
    useEffect( ()=>{
        //console.log( localStorage.getItem('theme') );
        console.log( 'Cookies:' ,Cookies.get('theme') );

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
                <Button
                onClick={ onClick }
                >
                    Request
                </Button>
            </CardContent>
        </Card>
    </Layout>
    )
}

export const getServerSideProps :GetServerSideProps = async ( { req } )=>{
 
   const { theme ='', name ='' } = req.cookies;

   const validThemes = ['ligth', 'dark','custom'];
 
     return { props:
         { theme: validThemes.includes( theme ) ? theme : 'dark' , 
           
        } }
  }

export default ThemeChangerPage;