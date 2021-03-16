import React from 'react'
import { connect } from 'react-redux'
import { getSkills } from '../redux'
import Roll from 'react-reveal/Roll';
import Sticky from 'react-sticky-el';

class Skills extends React.Component {
  constructor(props) {
    super()
    this.state = {
      text: 'Scroll over a skill to learn more!'
    }
    this.onMouseOver = this.onMouseOver.bind(this)
  }
  componentDidMount() {
    this.props.getSkills()
  }
  onMouseOver(description) {
    console.log(this.state)
    this.setState({ text: description[0].description })
    // if (!this.state.pressed) {
    //   this.setState({
    //     skillNum: id,
    //     pressed: true
    //   })
    // } else {
    //   this.setState({
    //     pressed: false
    //   })
    // }
  }
  render() {
    let skills = this.props.skills
    return (
      <div className='skills-div'>
        <div>
          <h1>Coding Skills:</h1>
          {skills.map(skill => (
            <div className='skills-map-div' key={skill.id}>
              <Roll>
                <div>
                  <button className="bttnStyle" onMouseOver={() => this.onMouseOver(skill.descriptions)}>
                    <h1>{skill.name}</h1>
                  </button>
                </div>
              </Roll>
            </div>
          ))}
        </div>
        <Sticky className='sticky-div'>
          <div className='sticky-child'>
          <p className='skills-text'>
            {this.state.text}
          </p>
          </div>
        </Sticky>
      </div>
    )
  }
}

const mapState = (state) => ({
  skills: state.skills
})

const mapDispatch = dispatch => {
  return {
    getSkills: () => dispatch(getSkills())
  }
}

export default connect(mapState, mapDispatch)(Skills)
