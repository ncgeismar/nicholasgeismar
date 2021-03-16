import React from 'react'
import { connect } from 'react-redux'
import { getJobs } from '../redux'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

//ICONS =======================================================
import StarsIcon from '@material-ui/icons/Stars';
import WorkRoundedIcon from '@material-ui/icons/WorkRounded';



class Jobs extends React.Component {
  constructor(props){
    super()
  }
  componentDidMount() {
    this.props.getJobs()
  }
  render() {
    let jobs = this.props.jobs
      return (
        <div className='timeline'>
          <VerticalTimeline>
            {jobs.map(job => {
              return (
                <VerticalTimelineElement
                  key={job.id}
                  className="vertical-timeline-element--work"
                  contentStyle={{ background: '#5CC757', color: '#0B090B' }}
                  contentArrowStyle={{ borderRight: '7px solid  #5CC757' }}
                  date={`${job.start} - ${job.end}`}
                  iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                  icon={<WorkRoundedIcon />}
                >
                  <div key={job.id}>
                    <h1 className="vertical-timeline-element-title">{job.title}
                    </h1>
                    <div>
                      <h2 className="vertical-timeline-element-subtitle">
                        {job.organization}
                      </h2>
                      <h4>{job.location}</h4>
                      {job.descriptions.map(description => (
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
        </div>
      )
  }
}

const mapState = (state) => ({
  jobs: state.jobs
})

const mapDispatch = dispatch => {
  return {
    getJobs: () => dispatch(getJobs())
  }
}

export default connect(mapState, mapDispatch)(Jobs)
