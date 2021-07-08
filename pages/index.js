import {useState} from 'react';
import styles from '../styles/Home.module.scss'
import Image from 'next/image';
import Head from "next/head";
import Nav from '../components/Nav'
import Slide from '../components/Slide'
import { Data, Datas } from '../components/data.js';



export default function Home() {

  const [hover, setHover] = useState(true);

  const cardHover = () => {
      setHover(false);
  }


  const cardLeave = () => {
    setHover(true);
}


const [hovers, setHovers] = useState(true);

const cardHovers = () => {
    setHovers(false);
}

const cardLeaves = () => {
  setHovers(true);
}



  return (
    <>
     <Head>
          <link
            rel="preload"
            href="/fonts/Optima/optimaltstd-medium.otf"
            as="font"
            crossOrigin=""
          />
        </Head>
    <div className={styles.container}>
      <Nav />

      <div className={styles.featured}>
        <div className={styles.featured_text}>Featured Products</div>
        <div>
          <Image className={styles.icon} src="/images/arrow.png" alt="arrow right" width={40} height={20}  />
        </div>
      </div>

      <main>
        <Slide />
     </main>
    </div>
    </>
  )
}
