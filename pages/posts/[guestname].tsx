import React from 'react'
import {InferGetStaticPropsType} from 'next'
import Styles from '../../styles/Guest.module.css'
import Image from 'next/image'
type post = {
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

export const getStaticPaths = async () => {
    const res = await fetch('https://nudatasciback.herokuapp.com/getSomePosts/1')
    const data: post[] = await res.json()
    console.log(data)
    const paths = data.map(post  => {
        return {
            params: {guestname: post.guestname.toString()}
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async(context: any) => {
    const gn = context.params.guestname
    const res = await fetch('https://nudatasciback.herokuapp.com/getOnePost/' + gn)
    const data = await res.json()

    return {
        props: {post: data}
    }
}

const guestname = ({post}: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <div>
            <hr className = {Styles.line}>
            </hr>
            <div className = {Styles.flexContainer}>
                <div className = {Styles.img}>
                <Image layout ='intrinsic' width = {500} height = {500} src = {post.imglink} className = {Styles.img}></Image>
                </div>
                <div className = {Styles.text}>
                    <h1 className = {Styles.header}>
                        {post.postname}
                    </h1>
                    <div className = {Styles.desc}>
                        {post.description}
                    </div>
                </div>
            </div>
            <hr className = {Styles.smallLine}>
            </hr>
            {/* <iframe src="https://www.youtube.com/embed/6zn-r4lh5Vw" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" width="854" height="534" frameborder="0"></iframe> */}
            <iframe width="854" height="534" src={post.youtubelink} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" className = {Styles.video}></iframe>
        
            <hr className = {Styles.line}>
            </hr>
        </div>
    )
}

export default guestname
