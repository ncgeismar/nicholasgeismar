import axios from 'axios'

const initialState = []

//ACTION TYPES
const GET_SKILLS = 'GET_SKILLS'

//ACTION CREATORS
const gotSkills = (skills) => ({
  type: GET_SKILLS,
  skills
})

//THUNKS
export const getSkills = () => {
  return async dispatch => {
  try {
    const { data: skills } = await axios.get('/api/skills')
    dispatch(gotSkills(skills))
  } catch (error) {
    console.error(error)
  }
}
}

//REDUCERS
const skillsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SKILLS:
      return action.skills
    default:
      return state
  }
}

export default skillsReducer
