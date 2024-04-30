import React, {useState} from 'react';
import bgImage from '../../assets/image 13.png';
import styles from './Registration.module.css'

function Registration() {
const [name, setName] =useState();
const [username, setUsername] =useState();
const [email, setEmail] =useState();
const [mobile, setMobile] =useState();
const [consent, setConsent] =useState(false);
const handleSubmit= ()=>{
    if(!name||!email||!username||!mobile||!consent){
        return alert('Please fill all the fields')
    }
    else {
        console.log({name, username, email, mobile, consent});
    }
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
            <h2>Create your new Account</h2>
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

        <div><input type="checkbox" value= {consent} onChange={(e)=>{
        setConsent(e.target.value)
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
