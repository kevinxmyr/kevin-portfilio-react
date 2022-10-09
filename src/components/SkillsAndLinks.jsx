import React from 'react';
import { Button, Icon, Label } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

export default function SkillsAndLinks() {
  return (
    <div className='skills-card-main'>
        <div className='skills-section'>
            <h3 className='skills-title'> More About Me</h3>
            <p> I build Projects to learn how to code</p>
            <p> And while I am not coding I enjoy writing poetry
                and stories, and cooking delicious meals</p>
        <div className='hr-container'>
            <hr />
        </div>
        
            <p>Full Stack developer with primary focus on Software 
            Software Development, Progressive Web Applications,
            Web Applications and API's</p>
            
            <Button primary>Download Resume</Button>
            
            <div className='skills-container'>
                <ul className='skill-list'>
                    <li>HTML/CSS</li>
                    <li>React</li>
                    <li>Node.JS</li>
                </ul>
                <ul className='skill-list'>
                    <li>Photography</li>
                    <li>Cooking</li>
                    <li>Video Editing</li>
                </ul>
            </div>
        </div>
       
        <div className='link-section'>
        
        </div>
        
        
        
    </div>
  )
}
