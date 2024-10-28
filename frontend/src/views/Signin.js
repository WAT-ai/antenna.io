import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Signin.css'

export default function Signin(){
    return(
        <div className='signinRoot'>
            <div className='header'>
                <Link to='/'><h1>antenna.io</h1></Link>
            </div>
            <div className='main'>
                Coming soon
            </div>
        </div>
    )
}