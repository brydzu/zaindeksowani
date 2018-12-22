import React, { PropTypes } from 'react';

const Field = (props) => (
  <input type={props.textarea ? 'textarea' : 'text'}
  onChange={props.onChange}
  value={props.value}/>
);

FieldProptypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  textarea: PropTypes.bool.isRequired,
};

Field.defaultProps = {
  textarea: false,
}

export default Field;
