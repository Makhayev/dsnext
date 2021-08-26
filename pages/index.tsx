import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import logo from '../static/icon.png'
import { InferGetStaticPropsType } from 'next'


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
  const posts = await fetch('https://nudatasciback.herokuapp.com/getLastPost');
  const res: post = await posts.json();
  console.log(res);
  console.log(process.env.IMGBB_API)
  return {
    props: {
      res,
    },
  }

}


export default function Home({res}: InferGetStaticPropsType<typeof getStaticProps>) {

  return (
    <div className={styles.container}>
     
      <div className = {styles.image}> 
        <Image src = {logo} width = {500} height = {500} layout = 'intrinsic'/> 
      </div>
      <br></br>
      <div className = {styles.textUnderLogo}>
      &quot; Data is a precious thing and will last longer than the systems themselves.&quot;
      </div>
      <br></br>
      <div className = {styles.author}>
        Tim-Berners Lee
      </div>
      <hr className = {styles.line}>
      </hr>
      <h1 className = {styles.upcomingEvents}>Upcoming events</h1>
      <div className = {styles.flexContainer}>
      <Image layout = 'intrinsic' src = {res.imglink as any} className = {styles.featuredImage} /> 
      
      <div className = {styles.featuredText}>
          <div className = {styles.postname}>
            {res.postname}
          </div>
          
          <br> 
          </br>
          <br>
          </br>
          <div className = {styles.description}>
            {res.description}
          </div>
      </div>
      </div>
      <hr className = {styles.line}></hr>
       
      {/* </hr> */}
      <h1 className = {styles.upcomingEvents} id = "aboutUs"> About Us</h1>
      <div className = {styles.aboutUs}>
      DataSci is a club of data science enthusiasts who plan to organize events related to this field for students of Nazarbayev University including datathon, guest talks, preparation for job interviews and more! 
      </div>
      <hr className = {styles.line}></hr>
      <h1 className = {styles.upcomingEvents} id = "contacts">
      Follow us!
      </h1>
      <div >
      <a href="http://instagram.com/nu_datasci" className = {styles.socMediaIcon}>
        <i className="fa fa-instagram fa-3x" aria-hidden="true"  style={{fontSize: '14vh'}}>  </i>
      </a>
      <a href="https://www.youtube.com/channel/UC9CxWZp9H3GDhvDRX_eb8tA" className = {styles.socMediaIcon}> 
        <i className="fa fa-youtube-play fa-3x" aria-hidden="true" style= {{fontSize: '14vh'}}>  </i>
      </a>
      <a href="http://t.me/datasci_channel" className = {styles.socMediaIcon}>
        <i className="fa fa-telegram fa-3x" aria-hidden="true" style={{fontSize: '14vh'}}>  </i>
      </a>
      </div>

      <div className = {styles.bottomText}>
        <i> This website was developed by university students on a voluntary basis.</i>
      </div>

      </div>
  )
}
