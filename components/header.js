import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Head from 'next/head';


export const Header = () => {
    let router = useRouter()
    const styles = {
        header: {
            margin: 20,
            padding: 20,

        },
        link: {
            margin: 15
        },
        active: {
            margin: 15,
            color: "blue"
        },
    }

    return (
        <div>

            <Head>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
                <script async src="/metamask.js"></script>
            </Head>


            <div class="header icone__svg" style={styles.header}>

                <nav class="navbar navbar-light">
                    <div class="container-fluid">
                        <div class="info_courbet">
                            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                        </div>
                        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                            <div class="offcanvas-header">
                                <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Cryptage de données !</h5>
                                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div class="offcanvas-body">
                                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                    <li class="nav-item">
                                        <Link href="/" passHref>
                                            <a class="nav-link"><span style={router.pathname === "/" ? styles.active : styles.link}>SHA256</span></a>
                                        </Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link href="/md5" passHref>
                                            <a class="nav-link"><span style={router.pathname === "/md5" ? styles.active : styles.link}>MD5</span></a>
                                        </Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link href="/sha3_512" passHref>
                                            <a class="nav-link"><span style={router.pathname === "/sha3_512" ? styles.active : styles.link}>SHA3-512</span></a>
                                        </Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link href="/ripemd160" passHref>
                                            <a class="nav-link"><span style={router.pathname === "/ripemd160" ? styles.active : styles.link}>RIPEMD160</span></a>
                                        </Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link href="/keccak" passHref>
                                            <a class="nav-link"><span style={router.pathname === "/keccak" ? styles.active : styles.link}>KECCAK512</span></a>
                                        </Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link href="/blowfish" passHref>
                                            <a class="nav-link"><span style={router.pathname === "/blowfish" ? styles.active : styles.link}>BLOWFISH</span></a>
                                        </Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link href="/aes" passHref>
                                            <a class="nav-link"><span style={router.pathname === "/aes" ? styles.active : styles.link}>AES</span></a>
                                        </Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link href="/rsa" passHref>
                                            <a class="nav-link"><span style={router.pathname === "/rsa" ? styles.active : styles.link}>RSA (module obsolète voir code rsa.js)</span></a>
                                        </Link>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div >
    )
}