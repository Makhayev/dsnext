import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
// import 'bootstrap/dist/css/bootstrap.min.css';
import Styles from '../styles/Navbar.module.css'
import icon from '../static/icon.png'
// import ''


interface Props {
    
}

const Navbar: React.FC<Props> = (props: Props) => {
    return (
        <div className = {Styles.container}>
             <Head>
        <title>NU DataSci club</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel = "icon" href = {"../static/icon.png"}></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </Head>
            <div className = {Styles.Navb}>
            <Link href = '/'>Home </Link>
            <Link href = '/pastEvents'> Past Events </Link>
            {/* <Link href = '/login'> Login</Link> */}
            <Link href = '/#aboutUs'> About us</Link>
            <Link href = '/createPost'>New post</Link>
            <Link href = '/#contacts'> Contacts</Link>
            
            {/* <Link href = '/ru'>RU</Link>  */}
            </div>
        </div>
    )
}

export default Navbar
