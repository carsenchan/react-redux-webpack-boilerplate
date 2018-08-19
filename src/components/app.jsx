import React from 'react';
import PropTypes from 'prop-types'
import RaisedButton from 'material-ui/RaisedButton'

const MyBtn = props => <div>Our main Component
  <RaisedButton label="Click Me"></RaisedButton>
</div>

MyBtn.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

MyBtn.defaultProps = {
  buttonText: 'iAmDefaultText',
  onClick: ()=>console.log("Button")
}

export default MyBtn