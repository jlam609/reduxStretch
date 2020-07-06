const { spookyTypes } = require('./types');
const {createStore} = require('redux')

const initialState = {
  // code initial state here
    steps: 0,
   spookySounds: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    // code case statements here
    case spookyTypes.INCREMENT_STEP:
      return{
        ...state,
        steps:state.steps+1
      };
    case spookyTypes.CREATE_NEW_SPOOKY_SOUND:
      return{
        ...state,
        spookySounds:[...state.spookySounds, action.sounds]
      }
    default:
      return state;
  }
};

const store = createStore(rootReducer)
module.exports = rootReducer;
