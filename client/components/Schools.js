import React from 'react'
import { connect } from 'react-redux'
import { getSchools } from '../redux'
import Image from 'react-bootstrap/Image'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

//ICONS =======================================================
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import StarsIcon from '@material-ui/icons/Stars';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import gmaillogo from '../Images/gmaillogo.png'
import linkedinlogo from '../Images/linkedinlogo.png'

const icons = [<ImportContactsIcon />, <LocalLibraryIcon />, <MenuBookIcon />]

class Schools extends React.Component {
  constructor(props) {
    super()
  }
  componentDidMount() {
    this.props.getSchools()
  }

  render() {
    let schools = this.props.schools
    return (
      <div className='timeline'>
        <VerticalTimeline>
          {schools.map(school => {
            let icon = icons[Math.floor(Math.random() * (2 - 0 + 1)) + 0]
            return (
              <VerticalTimelineElement
                key={school.id}
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#F19953', color: '#0B090B' }}
                contentArrowStyle={{ borderRight: '7px solid  #F19953' }}
                date={school.end}
                iconStyle={{ background: '#F19953', color: '#fff' }}
                icon={icon}
              >
                <div key={school.id}>
                  <h1 className="vertical-timeline-element-title">{school.name}
                  </h1>
                  <div>
                    <h2 className="vertical-timeline-element-subtitle">
                      {school.focus}
                    </h2>
                    <h4>{school.location}</h4>
                    {school.descriptions.map(description => (
                      <p key={description.id}>-{description.description}</p>
                    ))}
                  </div>
                </div>
              </VerticalTimelineElement>
            )
          })}
          <VerticalTimelineElement
            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
            icon={<StarsIcon />}
          />
        </VerticalTimeline>
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
  schools: state.schools
})

const mapDispatch = dispatch => {
  return {
    getSchools: () => dispatch(getSchools())
  }
}

export default connect(mapState, mapDispatch)(Schools)
