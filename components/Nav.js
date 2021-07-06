import styles from '../styles/Home.module.scss';


function Nav() {
    return (
        <div className={styles.navbar}>
            
            <div className={styles.left}>
                <div className={styles.left_cont}>
                    <div className={styles.logo}>
                        <img src="images/logo.png" alt="logo image" />
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
                    <img src="images/search.png" alt="search image" />
                </div>
                <div className={styles.icon}>
                    <img src="images/cart.png" alt="search cart" />
                </div>
            </div>

        </div>
    )
}

export default Nav
