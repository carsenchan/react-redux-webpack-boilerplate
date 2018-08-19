import AppView from '../components/app.jsx'
import {connect} from 'react-redux'

const mapStateToProps = (state, ownProps) => {
  return {
   buttonText: state.text
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
      onClick: () => {
        dispatch({type: 'BASIC_ACTION', text: 'new text'})
      }
  }
}
const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppView)
export default App;