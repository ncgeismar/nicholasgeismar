//Import all reducers here
import { combineReducers } from 'redux'
import skillsReducer from './skills'
import jobsReducer from './jobs'
import schoolsReducer from './schools'
import projectsReducer from './projects'

const resumeReducer = combineReducers({
  //School: schoolsReducer
  skills: skillsReducer,
  jobs: jobsReducer,
  schools: schoolsReducer,
  projects: projectsReducer
})

export * from './skills'
export * from './jobs'
export * from './schools'
export * from './projects'

export default resumeReducer
