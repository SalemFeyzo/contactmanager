import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TextInputGroup = ({
  name,
  lable,
  value,
  placeholder,
  type,
  onChange,
  error,
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{lable}</label>
      <input
        type={type}
        name={name}
        id={name}
        className={classnames('form-control form-control-lg', {
          'is-invalid': error,
        })}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};
TextInputGroup.propTypes = {
  name: PropTypes.string.isRequired,
  lable: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};
TextInputGroup.defaultProps = {
  type: 'text',
};
export default TextInputGroup;
/*
we could make it like :
const TextInoutGroup = (props){
    return (
    <div className="form-group">
      <label htmlFor={props.name}>{props.lable}</label>
      <input
        type={props.type}
        name={props.name}
        id={props.name}
        className="form-control form-control-lg"
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};
}
*/
