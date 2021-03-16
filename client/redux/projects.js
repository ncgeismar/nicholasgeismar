import axios from 'axios'

const initialState = []

//ACTION TYPES
const GET_PROJECTS = 'GET_PROJECTS'

//ACTION CREATORS
const gotProjects = (projects) => ({
  type: GET_PROJECTS,
  projects
})

//THUNKS
export const getProjects = () => {
  return async dispatch => {
  try {
    const { data: projects } = await axios.get('/api/projects')
    dispatch(gotProjects(projects))
  } catch (error) {
    console.error(error)
  }
}
}

//REDUCERS
const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROJECTS:
      return action.projects
    default:
      return state
  }
}

export default projectsReducer
