import { Inter } from 'next/font/google'
import styled from 'styled-components'
import Head from 'next/head'
import Main from '@component/components/Main'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Albin Ryberg</title>
        <meta name="description" content="I’m a front-end web developer." />
        <link rel="icon" href="/fav.png" />
      </Head>
      <Main />
    </>
  )
}
