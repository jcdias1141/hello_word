import styles from '../styles/Home.module.css'

import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Página Principal</title>
        <meta name="keyworkds" content="Roupas,  Calçados, Boné"></meta>
        <meta
          name="description"
          content="Encontrea melhor roupa para você"
        ></meta>
      </Head>
      <div className={styles.container}>
        <h1>Hello World Next.js</h1>
        <Image
          src="/images/city.jpg"
          width="500px"
          height="400px"
          objectFit="contain"
          alt="Cidade a noite"
        />
      </div>
    </>
  )
}
