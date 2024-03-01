import React, { useState } from "react";
import styled from "styled-components";

// Assuming UIColorScheme is directly included or imported in your package
const UIColorScheme = {
  input: {
    error: "#ff0000", // Example error color
    active: "#00ff00", // Example active color
    border: "#0000ff", // Example border color
  },
};

/**
 * AppInput is a reusable input component with customizable styles and behaviors.
 *
 * @component
 * @param {Object} props
 * @param {string} props.text Placeholder text for the input field.
 * @param {('text'|'password'|'search'|'date'|'email'|'number')} [props.inputType='text'] The type of input.
 * @param {string} [props.value=''] The current value of the input field.
 * @param {Function} [props.setValue=() => {}] Function to set the value of the input field.
 * @param {string} [props.className=''] CSS class for additional styling.
 * @param {JSX.Element} [props.icon=null] Icon to display inside the input component.
 * @param {string} [props.width='200'] Width of the input component, in pixels.
 * @param {string} [props.errorMessage=''] Error message to display below the input field.
 * @returns {JSX.Element} Rendered component
 */
const AppInput = ({
  text,
  inputType = "text",
  value = "",
  setValue = () => {},
  className = "",
  icon = null,
  width = "200",
  errorMessage = "",
}) => {
  const [onFocus, setOnFocus] = useState(false);

  return (
    <AppInputStyle
      focusStatus={onFocus}
      isError={errorMessage}
      width={width}
      className={className}
    >
      <div className="form-container">
        <div className="d-flex">
          {icon && <div className="ms-2">{icon}</div>}
          <input
            type={inputType}
            placeholder={text}
            onChange={(e) => setValue(e.target.value)}
            value={value}
            onFocus={() => setOnFocus(true)}
            onBlur={() => setOnFocus(false)}
          />
        </div>
      </div>
      <span className="errorMessage">{errorMessage}</span>
    </AppInputStyle>
  );
};

export default AppInput;

const AppInputStyle = styled.div`
  width: ${(props) => props.width}%;
  .form-container {
    margin-top: 10px;
    border: 0.5px solid
      ${(props) =>
        props.isError
          ? UIColorScheme.input.error
          : props.focusStatus
          ? UIColorScheme.input.active
          : UIColorScheme.input.border};
    padding: 3px;
    border-radius: 5px;

    input {
      margin: 5px;
      height: 15px;
      outline: none;
      border: none;
      width: 100%;
      font-size: 12px;
    }
  }

  .errorMessage {
    color: #bf0303;
    font-size: 10px;
  }
`;
