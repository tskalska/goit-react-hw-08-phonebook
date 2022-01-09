import React from 'react';
import PropTypes from 'prop-types';
import {filterContacts} from '../../../redux/contacts/contacts-actions';
import {connect} from 'react-redux';


const Filter = ({value, onChange}) => {

return (
  <div>
    <span>Find contact by name</span>
    <form>
      <label>
        <input
          type="text"
          value={value}
          onChange ={onChange}
          >  
        </input>
      </label>
    </form>
  </div>)
}

const mapStateToProps = state => ({...state,
  value: state.filter,
})

const mapDispatchToProps = dispatch => ({
  onChange: (event) => dispatch(filterContacts(event.target.value)),
})

Filter.propTypes = {
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
}


export default connect(mapStateToProps, mapDispatchToProps)(Filter)