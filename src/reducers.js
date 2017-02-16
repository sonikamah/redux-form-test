/**
 * Created by muduna on 1/10/2017.
 */

import { combineReducers } from 'redux';
import welcomeReducer from './containers/Welcome/reducer';
import * as questionsReducer  from './containers/Questionnaire/reducer';
import proposalReducer  from './containers/Proposal/reducer';
import { reducer as formReducer } from 'redux-form'


export default combineReducers({
  user: welcomeReducer,
  questions: questionsReducer.questionnaireReducer,
  userResponse: questionsReducer.userResponseReducer,
  proposal: proposalReducer,
  form: formReducer
})