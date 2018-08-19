const BASIC_REDUCER = 'BASIC_REDUCER'

const initialState = {
  btnText: 'initialBtnText'
}

const basicReducer = (state=initialState, action) => {
  switch (action.type) {
    case BASIC_REDUCER:
      return action.text;
  
    default:
      return state;
  }
}

export default basicReducer