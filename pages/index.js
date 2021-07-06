import styles from '../styles/Home.module.scss'
import Image from 'next/image';
import Head from "next/head";
import Nav from '../components/Nav'


export default function Home() {
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
    </div>
    </>
  )
}
