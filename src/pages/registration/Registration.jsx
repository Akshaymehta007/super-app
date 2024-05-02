import React, {useState} from 'react';
import bgImage from '../../assets/image 13.png';
import styles from './Registration.module.css'

function Registration() {
const [name, setName] =useState();
const [username, setUsername] =useState();
const [email, setEmail] =useState();
const [mobile, setMobile] =useState();
const [shareData, setShareData] =useState(false);
const handleSubmit= (e)=>{
    e.preventDefault();
    if(!name||!email||!username||!shareData){
        return alert('Please fill all the fields')
    }
    else {
        const currentUser = {name, username, email, mobile}
        localStorage.setItem(
            "currentUser",
            JSON.stringify({currentUser})
        );
    }
    console.log(JSON.parse(localStorage.getItem("currentUSer")));
};
  return (
    <div className={styles.page}>
    <div className={styles.left}>
        <div className={styles.leftHeader}>
            <h1 className={styles.h1}>
                Discover new things on <br></br> SuperApp
            </h1>
        </div>
        <img src={bgImage} className={styles.bgImage} alt="background" /></div>


    <div className={styles.right}>
        <div className={styles.rightheader}>
            <h2>Super App</h2>
            <h3>Create your new Account</h3>
    </div>

    <div className={styles.form}>
    <div className='form-group'>
    <input type="text" placeholder='Name' value = {name} onChange={(e)=>{
        setName(e.target.value)
    }} />
    </div>

<div className='form-group'>
    <input type="text" placeholder='UserName' value= {username} onChange={(e)=>{
        setUsername(e.target.value)
    }} />
    </div>

<div className='form-group'>
    <input type="email" placeholder='Email' value= {email} onChange={(e)=>{
        setEmail(e.target.value)
    }} />
    </div>

<div className='form-group'>
    <input type="tel" placeholder='Mobile' value= {mobile} onChange={(e)=>{
        setMobile(e.target.value)
    }}/>
    
         
    </div>

        <div className={styles.checkbox}><input type="checkbox" value= {shareData} onChange={(e)=>{
        setShareData(e.target.value)
    }}/> 
    
    <label htmlFor="">Share my registration data with Superapp</label>
    </div>

      
        <button onClick={handleSubmit}>Sign Up</button>
        </div>
        <div className={styles.footer}>
            <p>By clicking on Sign up. you agree to Superapp <span>Terms and Conditions of Use</span></p>
            <p>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp 
            Privacy Policy</p>
            </div>
    </div>
    </div>
    
  )
}

export default Registration
