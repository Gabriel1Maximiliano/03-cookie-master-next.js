import { Navbar } from 'components/ui'
import Head from "next/head";// OJo aca este debe ser de next/head
import { FC } from 'react'

interface Props {
    title?:string;
    children:any;
}

export const Layout:FC<Props> = (  { children }:Props) => {
  return (
    <>
    <Head>
        
    </Head>
    <nav>
         <Navbar />
    </nav>
    <main style={{padding:'20px 50px'}} >
        { children }

    </main>
    </>
  )
}
