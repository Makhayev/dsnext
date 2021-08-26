import React from 'react'
import Styles from '../styles/PastEvents.module.css'
import Link from 'next/link'
import Image from 'next/image'
interface Props {
    guestname: string,
    postname: string,
    description: string,
    youtubelink: string,
    imglink: string,
    imgdeletelink: string,
    guestnameru: string,
    postnameru: string,
    descriptionru: string
}

const postComponent = (props: Props) => {
    
    const {guestname, postname, description, youtubelink, imglink, imgdeletelink, guestnameru, postnameru, descriptionru} = props;
    return (
        <div>
            <Link href = {'/posts/' + guestname} >
            <div>
            <h1 className = {Styles.postNameText}>
            <hr className = {Styles.line}></hr>
            
                {postname}
            </h1>
            <div className = {Styles.image}>
            <Image layout = 'intrinsic' width = {500} height = {500} src = {imglink} className = {Styles.image}></Image>
            </div>
            </div>
            
            </Link> 
           
        </div>
    )
}

export default postComponent
