import React from 'react'
import Styles from '../styles/PastEvents.module.css'
import {useState} from 'react'
import {InferGetStaticPropsType} from 'next'
import  PostComponent from '../components/PostComponent'
import Link from 'next/link'
interface Props {
    
}

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

export const getStaticProps = async() => {
    
    const posts = await fetch('https://nudatasciback.herokuapp.com/getSomePosts/1');
    const res: post[] = await posts.json();
    res.reverse()
    console.log(res);
    
  
    return {
      props: {
        res,
      },
    }
  
}

const PastEvents = ({res}: InferGetStaticPropsType<typeof getStaticProps>) => {
    const [page, setpage] = useState(1)

    return (
        <div>
            {res.filter((item, i) => i > 0 ? true : false).map((item) => (
              
              <PostComponent descriptionru = {item.descriptionru} youtubelink = {item.youtubelink} key = {item.guestname} guestname = {item.guestname} postname = {item.postname} imglink = {item.imglink} imgdeletelink = {item.imgdeletelink} description = {item.description} postnameru = {item.postnameru} guestnameru = {item.guestnameru}  />

              )


              
            )}

            <hr className = {Styles.line}>
            </hr>
        </div>
    )
}

export default PastEvents
