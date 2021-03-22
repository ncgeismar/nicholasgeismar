import React from 'react'
import { connect } from 'react-redux'
import { getProjects } from '../redux'
import screenshotofbobs from '../Images/screenshotofbobs.png'
import Image from 'react-bootstrap/Image'
import Fade from 'react-reveal/Fade';
import cookdpic from '../Images/cookdpic.jpg'
import resumewebpic from '../Images/resumewebsite.jpg'
import gmaillogo from '../Images/gmaillogo.png'
import linkedinlogo from '../Images/linkedinlogo.png'


class Projects extends React.Component {
  constructor(props) {
    super()
  }
  componentDidMount() {
    this.props.getProjects()
  }

  render() {
    let projects = this.props.projects
    return (
      <div className='projectlist'>
        {/* COOK'D APP SECTION STARTS HERE ///////////////////////////////////////////////////////////////// */}
        <Fade duration={3000} triggerOnce>
          <h1 className='projectheaders'><u>Cook'd</u></h1>
        <Image className='cookdpic' src={cookdpic}></Image>
        <h3 className='description-text'><u>Description:</u> Cook'd is a social media mobile application focused on recipes.  With a design similar to instagram, one can post recipes, like, comment, share, direct message, and follow other users to occupy their personal feed.  This app was created using react-native and deployed on expo.  Watch the youtube video below for help setting up and installing the app.</h3>
        <h3><u>Job Title:</u> Fullstack Developer</h3>
        <a href='https://www.youtube.com/watch?v=2qv1BzJ4XH4&feature=youtu.be'>Visit youtube tutorial!</a>
        <h3>
          <u>Technologies used:</u>
          <p>react-native, react-redux, express, postgres, heroku, expo</p>
        </h3>
        <hr />
        {/* BOB'S PASTA SHOP SECTION STARTS HERE ///////////////////////////////////////////////////////////////// */}
        <h1 className='projectheaders'><u>Bob's Pasta Store</u></h1>
        <Image className='bob-picture' src={screenshotofbobs}></Image>
        <h3 className='description-text'><u>Description:</u> This is a mock e-commerce website displaying my teams skills in developing a well functioning e-commerce website.  We deploy the ability to log in, signup (also through google), add items to a cart, and shop as a guest.  This website was developed to show off skills with redux-react, express api routes, postgres relational databases, as well as many other APIs and tools.</h3>
        <h3><u>Job Title:</u> Fullstack Developer</h3>
        <a href='https://kitchen-ecommerce-store.herokuapp.com/'>Visit Bob's Pasta Store! Order today!</a>
        <h3>
          <u>Technologies used:</u>
          <p>react, react-redux, express, postgres (SQL relational database), heroku, webpack</p>
        </h3>
        <hr />
        {/* RESUME PROJECT SECTION STARTS HERE ///////////////////////////////////////////////////////////////// */}
        <h1 className='projectheaders'><u>Nicholas Geismar's Resume Website</u></h1>
        <Image className='resume-picture' src={resumewebpic}></Image>
        <h3><u>Job Title:</u> Fullstack Developer </h3>
        <h3>
          <u>Technologies used:</u>
          <p>react, react-redux, express, postgres (SQL relational database), webpack</p>
        </h3>
        </Fade>
        <hr/>
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

const mapState = (state) => ({
  projects: state.projects
})

const mapDispatch = dispatch => {
  return {
    getProjects: () => dispatch(getProjects())
  }
}

export default connect(mapState, mapDispatch)(Projects)
