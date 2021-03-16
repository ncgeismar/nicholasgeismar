import axios from 'axios'

const initialState = []

//ACTION TYPES
const GET_SCHOOLS = 'GET_SCHOOLS'

//ACTION CREATORS
const gotSchools = (schools) => ({
  type: GET_SCHOOLS,
  schools
})

//THUNKS
export const getSchools = () => {
  return async dispatch => {
  try {
    const { data: schools } = await axios.get('/api/schools')
    dispatch(gotSchools(schools))
  } catch (error) {
    console.error(error)
  }
}
}

//REDUCERS
const schoolsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SCHOOLS:
      return action.schools
    default:
      return state
  }
}

export default schoolsReducer
