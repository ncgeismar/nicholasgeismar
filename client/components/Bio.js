import React from 'react'
import { connect } from 'react-redux'
import Image from 'react-bootstrap/Image'
import nickPicture from '../Images/nickpicture.png'
import gmaillogo from '../Images/gmaillogo.png'
import linkedinlogo from '../Images/linkedinlogo.png'
import { Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap'

class Bio extends React.Component {
  constructor(props) {
    super()
    this.changeBackground = this.changeBackground.bind(this)
  }

  changeBackground(e) {
    e.target.style.background = 'red';
  }

  render() {
    return (
      <div>
        <h1 className='divMap'><u>Nicholas Geismar's Website!</u></h1>
        <div  className='bio-div'>
        <Image xs={6} md={4} className='nickpicture' src={nickPicture} roundedCircle />
        <p className='introblock'>Hello friends, <br /><br /> Welcome to my coding portfolio website!  I recently graduated from Fullstack's coding bootcamp, as shown in the
        <Nav.Link className='schoolbiolink' as={Link} to='/schools'>schools tab.</Nav.Link>  I wanted to display some of my knowledge by putting together a simple website using a relational database with a react frontend.  <br /><br /> A website such as this does not need a backend, I only decided to use a relational database to exhibit my arsenal of backend knowledge. I hope you enjoy.  <br /><br /> Feel free to reach out to me via email (<a href='mailto:ncgeismar@gmail.com'>ncgeismar@gmail.com</a>) or LinkedIn. Links below!</p>
        </div>
        <hr className='margin-top'/>
        <div className='logos-block'>
          <a href='mailto:ncgeismar@gmail.com'>
          <Image className='bio-logos' src={gmaillogo} />
            </a>
            <a href='https://www.linkedin.com/in/nicholas-geismar/'>
            <Image className='bio-logos' src={linkedinlogo} />
            </a>
        </div>
      </div>
    )
  }
}



export default Bio
