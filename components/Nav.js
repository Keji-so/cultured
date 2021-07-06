import styles from '../styles/Home.module.scss';
import Image from 'next/image';


function Nav() {
    return (
        <div className={styles.navbar}>
            
            <div className={styles.left}>
                <div className={styles.left_cont}>
                    <div className={styles.logo}>
                        <Image src="/images/logo.png" alt="logo image" width={30} height={20} />
                    </div>
                    <div className={styles.logo_text}>
                        cultured.
                    </div>
                </div>
            </div>
            <div className={styles.right}>

                <div className={styles.option}>PAINTINGS</div>
                <div className={styles.option}>DRAWINGS</div>
                <div className={styles.option}>SCULPTURE</div>
                <div className={styles.option}>ARTISTS</div>
                <div className={styles.icon}>
                    <Image src="/images/search.png" alt="search image"  width={20} height={20} />
                </div>
                <div className={styles.icon}>
                    <Image src="/images/cart.png" alt="search cart" width={20} height={20} />
                </div>
            </div>

        </div>
    )
}

export default Nav
