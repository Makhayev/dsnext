import React from 'react'
import Styles from '../styles/CreatePost.module.css'
import {useRef, useState} from 'react'
interface Props {
    

}




const CreatePost = (props: Props) => {
    const [auth, setauth] = useState(false)
    const guestnameref = useRef<HTMLInputElement>(null)
    const postnameref = useRef<HTMLInputElement>(null)
    const descriptionref = useRef<HTMLTextAreaElement>(null)
    const youtubelinkref = useRef<HTMLInputElement>(null)
    const imgref= useRef <HTMLInputElement> (null)
    const guestnameruref = useRef<HTMLInputElement>(null)
    const postnameruref = useRef<HTMLInputElement>(null)
    const descriptionruref = useRef<HTMLTextAreaElement>(null)
    const emailref = useRef<HTMLInputElement>(null)
    const passwordref = useRef<HTMLInputElement>(null)
    let submit = async () => {
        console.log(imgref.current?.files?.item(0))
        
        let bdy = new FormData
        bdy.set('key', process.env.IMGBB_API!)
        bdy.append('image', imgref.current?.files?.item(0)!)
        bdy.append('name', guestnameref.current?.value! )
        let respons = fetch('https://api.imgbb.com/1/upload', {
        // headers: {
        //     'Content-Type': 'multipart/form-data'
        // },
        
        method: 'POST',
            body: bdy
        }).then((res) => {
            return res.json()

        }).then((resp) => {
            let data = {
                guestname: guestnameref.current?.value, 
                postname: postnameref.current?.value,
                description: descriptionref.current?.value,
                youtubelink: youtubelinkref.current?.value,
                imglink: resp.data.url,
                imgdeletelink: resp.data.delete_url, 
                guestnameru: guestnameruref.current?.value,
                postnameru: postnameruref.current?.value,
                descriptionru: descriptionruref.current?.value
            }
            console.log(data)
            fetch('https://nudatasciback.herokuapp.com/newPost', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-type': 'application/json'
                }
            }).then((ress) => {
                return ress.json()
            }).then((resss) => {
                console.log(resss)
            })

        })
        
    }

    let login = () => {
        let data = {
            Email: emailref.current?.value,
            Password: passwordref.current?.value
        }
        
        console.log(data)
        fetch('https://nudatasciback.herokuapp.com/login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then((res) => {
            return res.json()
        })
        .then((resp) => {
            console.log(resp)
            if (resp.isAuth === 'auth') {
                setauth((prevState) => !prevState);
                console.log(auth)
            }

        })
    }
    
    return (
        <div>
            {
                auth == false && 
                <div>
                    <hr className = {Styles.line}></hr>
                    <h1 className = {Styles.header}>
                        Login
                    </h1>
                    <input ref = {emailref} placeholder = "Email" className = {Styles.shortInput} name = 'email' type = 'text'/>
                    <input ref = {passwordref} placeholder = "Password" className = {Styles.shortInput} name = 'password' type = 'password'></input>
                    <a className = {Styles.bn37} onClick = {login}> Log in</a>
                    <hr className = {Styles.line}></hr>
                </div>

            }
            
            {auth == true &&
            <div>
                <hr className = {Styles.line}>
                
                </hr>
                <h1 className = {Styles.header}>
                    New Post Submission
                </h1>
                <form>
                    <input ref = {guestnameref} className = {Styles.shortInput} name = 'guestname' placeholder = 'The Name of the Guest' type = 'text' /> 
                    <input ref = {postnameref} className = {Styles.shortInput} name = 'postname' placeholder = 'The name of the Event/Post' type = 'text' /> 
                    <textarea ref = {descriptionref} className = {Styles.largeInput} name = 'description' placeholder = 'The description of the Event'/> 
                    <input ref = {youtubelinkref} className = {Styles.shortInput} name = 'youtubelink' placeholder = 'youtube link' type = 'url' /> 
                    <div>
                    <div className = {Styles.imgLabel} >Upload Image</div>
                    <input ref = {imgref} className = {Styles.imgInput} name = 'img' placeholder = 'image' type = 'file' /> 
                    </div>
                    {/* <input name = 'imgdeletelink' placeholder = 'ROFL' type = 'text' /> */}
                    <input ref = {guestnameruref} className = {Styles.shortInput} name = 'guestnameru' placeholder = 'The Name of the Guest in Russian' type = 'text' />
                    <input ref = {postnameruref} className = {Styles.shortInput} name = 'postnameru' placeholder = 'The name of the Event/Post in Russian'></input>
                    <textarea ref = {descriptionruref} className = {Styles.largeInput} name = 'descriptionru' placeholder = 'The Description of the Event in Russian'/> 
                    {/* <button className = {Styles.submitButton} type = "submit" onClick = {() => submit}>Submit</button> */}
                    <a className= {Styles.bn37} onClick = {submit}>Submit</a>
                </form>
            </div>
            }
        </div>
    )
}

export default CreatePost
