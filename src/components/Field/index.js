import PropTypes from "prop-types";

import "./style.scss";

export const FIELD_TYPES = {
  INPUT_TEXT: 1,
  TEXTAREA: 2,
};

const Field = ({ type = FIELD_TYPES.INPUT_TEXT, label, name, placeholder }) => {
  let component;
  if (type === FIELD_TYPES.TEXTAREA) {
      component = <textarea id={label} name={name} data-testid="field-testid" />;
  } else {
      component = (
        <input
          type="text"
          id={label}
          name={name}
          placeholder={placeholder}
          data-testid="field-testid"
        />
      );
  }
  return (
    <div className="inputField">
      <label htmlFor={label} className="label">{label}</label>
      {component}
    </div>
  );
};

Field.propTypes = {
  type: PropTypes.oneOf(Object.values(FIELD_TYPES)),
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};
 Field.defaultProps = {
   label: "",
   placeholder: "",
   type: FIELD_TYPES.INPUT_TEXT,
   name: "field-name",
 }

export default Field;
