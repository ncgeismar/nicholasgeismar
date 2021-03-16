import axios from 'axios'

const initialState = []

//ACTION TYPES
const GET_JOBS = 'GET_JOBS'

//ACTION CREATORS
const gotJobs = (jobs) => ({
  type: GET_JOBS,
  jobs
})

//THUNKS
export const getJobs = () => {
  return async dispatch => {
  try {
    const { data: jobs } = await axios.get('/api/jobs')
    dispatch(gotJobs(jobs))
  } catch (error) {
    console.error(error)
  }
}
}

//REDUCERS
const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS:
      return action.jobs
    default:
      return state
  }
}

export default jobsReducer
