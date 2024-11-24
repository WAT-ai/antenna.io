import React, { useState, useEffect } from 'react';
import '../styles/Home.css';
import 'animate.css';

export default function Home(){
    let topics = [
        "News and Current Affairs",
        "Comedy",
        "Health and Wellness",
        "Business and Finance",
        "Technology",
        "Sports",
        "History",
        "Science",
        "Politics",
        "Self-Improvement",
        "Education",
        "Religion and Spirituality",
        "Literature and Books",
        "Film and Television",
        "Relationships and Dating",
        "Travel",
        "Food and Cooking",
        "Parenting",
        "Art and Design",
        "Gaming",
        "Language Learning",
        "Environmental Issues",
        "Fashion and Beauty",
        "Philosophy",
        "Psychology",
        "Entrepreneurship",
        "Marketing",
        "Personal Finance",
        "Legal Affairs",
        "Real Estate",
        "Automotive",
        "Fitness",
        "Meditation and Mindfulness",
        "Science Fiction and Fantasy",
        "Sales",
        "DIY and Crafts",
        "Pet Care",
        "Astronomy",
        "Economics",
        "Social Justice",
        "Urban Planning",
        "Agriculture",
        "Aviation",
        "Photography",
        "Architecture",
        "Gardening",
        "Performing Arts",
        "Medicine"
    ]

    let languages = [
        "English",
        "Mandarin Chinese (中文)",
        "Hindi (हिन्दी)",
        "Spanish (Español)",
        "French (Français)",
        "Arabic (العربية)",
        "Bengali (বাংলা)",
        "Russian (Русский)",
        "Portuguese (Português)",
        "Urdu (اُردُو)",
        "Indonesian (Bahasa Indonesia)",
        "German (Deutsch)",
        "Japanese (日本語)",
        "Nigerian Pidgin (Naijá)",
        "Marathi (मराठी)",
        "Telugu (తెలుగు)",
        "Turkish (Türkçe)",
        "Tamil (தமிழ்)",
        "Cantonese (粵語)",
        "Vietnamese (Tiếng Việt)",
        "Tagalog (Tagalog)",
        "Korean (한국어)",
        "Persian (Farsi) (فارسی)",
        "Italian (Italiano)",
        "Thai (ภาษาไทย)",
        "Gujarati (ગુજરાતી)",
        "Polish (Polski)",
        "Ukrainian (Українська)"
    ]

    const [position, setPosition] = useState({ top: 0, left: 0 });
    const containerWidth = 450; // Width of the container
    const movingDivSize = 2; // Size of the moving div
    let speedX = 1; // Horizontal speed
    useEffect(() => {
        const moveDiv = () => {
        setPosition((prevPosition) => {
            let newLeft = prevPosition.left + speedX;
            if (newLeft < 0 || newLeft + movingDivSize > containerWidth) speedX *= -1;
            return {
            left: newLeft,
            };
        });
        };
        const intervalId = setInterval(moveDiv, 50); 
        return () => clearInterval(intervalId);
    }, []);

    const [text, setText] = useState(topics[0]);
    useEffect(() => {
        let index = 0;
    
        const interval = setInterval(() => {
          // Update the text and trigger animation
          index = (index + 1) % topics.length;
          setText(topics[index]);
        }, 5000); // Change text every 5 seconds
    
        return () => clearInterval(interval); // Cleanup interval on unmount
      }, []);

    const [animationClass, setAnimationClass] = useState("");
    useEffect(() => {
        // Trigger animation whenever text changes
        setAnimationClass("animate__animated animate__fadeIn");
        const timer = setTimeout(() => setAnimationClass(""), 500); // Clear animation after 1s
    
        return () => clearTimeout(timer); // Cleanup timeout
      }, [text]);

    return(
        <div className='homeRoot'>
            <div className='main'>
                <nav><h1><a href='#'>antennai</a></h1> <p><a href='#contact'>Contact</a></p></nav>
                <center><h1 className='animate__animated animate__fadeInDown heading'>Connecting You with the World of Multilingual Data</h1></center>
                <div className='body-holder'>
                    <div className='main-text'>
                        <p>High Quality,</p>
                        <p>Multilingual,</p>
                        <p>Conversational Data,</p>
                        <p>On any Subject</p>
                    </div>
                    <div className='main-display'>
                        <div className='subjects'>
                            <h2 className='sub-title'>Get Data About <div className='topic-holder'><span className={`${animationClass}`}>{text}</span></div></h2>
                            <div className='radio-text-holder'>
                                <div className='radio-dis'>
                                    <div className='radio-mover' 
                                    style={{
                                        top: `${position.top}px`,
                                        left: `${position.left+25}px`,
                                    }}></div>
                                    <div className='top-line'>
                                        <p className='fl-s'>88</p>
                                        <p>92</p>
                                        <p>96</p>
                                        <p>100</p>
                                        <p>104</p>
                                        <p>108</p>
                                        <p className='fl-e'>MHz</p>
                                    </div>
                                    <div className='middle-line'>
                                        <p className='fl-s'>530</p>
                                        <p>600</p>
                                        <p>800</p>
                                        <p>1000</p>
                                        <p>1300</p>
                                        <p>1600</p>
                                        <p className='fl-e'>KHz</p>
                                    </div>
                                    <div className='bottom-line'>
                                        <p className='fl-s'>5.0</p>
                                        <p>6.0</p>
                                        <p>7.0</p>
                                        <p>8.0</p>
                                        <p>10.0</p>
                                        <p>12.0</p>
                                        <p>15.0</p>
                                        <p>18.0</p>
                                        <p className='fl-e'>MHz</p>
                                    </div>
                                </div>
                                <p className='under-radio'>Antennai provides relevant and current data on a variety of subjects, and in a varirty of languages, that can be used for personal and business purposes. You can trust that data provided by antennai is reliable and relevant to whatever you may be working on.</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className='lang-holder'>
                    <h2 className='lang-title'>Get Data in...</h2>
                    <div className="marquee-container">
                        <div className="marquee">
                            {languages.map((item, index) => (
                            <div key={index} className='dynamicWidth'>
                                <span key={index} className="marquee-item">
                                    {item}
                                </span>
                            </div>
                            ))}
                            {/* Duplicate for seamless looping */}
                            {languages.map((item, index) => (
                            <div key={index} className='dynamicWidth'>
                            <span key={`duplicate-${index}`} className="marquee-item">
                                {item}
                            </span>
                            </div>
                            ))}
                        </div>
                        </div>
                </div>
            </div>
            <div className='contact' id='contact'>
                <div className='form-data'>
                    <div className='contact-text'>
                        <h2>Contact Us</h2>
                        <p>Have a question or a comment?<br/> Fill the form and we will be in touch as soon as possible.</p>
                    
                    </div>
                    <div className='contact-form'>
                        <form action="https://formsubmit.co/andrewarochukwu@gmail.com" method="POST">
                            <input type='text' name='name' placeholder='Name'/>
                            <input type='text' name='email' placeholder='Email'/>
                            <input type='text' name='company' placeholder='Company'/>
                            <textarea  name='text' placeholder='How can we help?'/>
                            <button className='form-submit'>Submit</button>
                        </form>
                    </div>
                </div>
                <div className='footer'>
                    Copyright © 2024 Antennai - All Rights Reserved.
                </div>
            </div>
        </div>
    )
}