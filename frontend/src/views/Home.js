import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Home.css'

export default function Home(){
    return(
        <div className='homeRoot'>
            <div className='header'>
                <div className='headerL'>
                    <Link to='/'><h1>antenna.io</h1></Link>
                </div>
                <div className='headerC'>
                    <p>about</p>
                    <p>team</p>
                    <p>contact</p>
                </div>
                <div className='headerR'>
                    <Link to='/signin'><p>login</p></Link>
                    <Link to='/signin'><p>sign up</p></Link>
                </div>
            </div>
            <div className='main'>
                <h2>Revolutionizing <span>Audio</span> Data</h2>
                <p>gain interesting insights from audio data, segment, describe and transcribe audio files.</p>
                <p>Currently applying to YC</p>
            </div>
        </div>
    )
}