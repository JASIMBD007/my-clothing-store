import styled, { css } from 'styled-components';

// Define SCSS variables
const subColor = 'grey';
const mainColor = 'black';

// Define SCSS mixin as a CSS function
const shrinkLabelMixin = css`
  top: -14px;
  font-size: 12px;
  color: ${mainColor};
`;

// Styled component for the 'group' div
export const FormGroup = styled.div`
  position: relative;
  margin: 45px 0;
`;

// Styled component for the 'input' element
export const FormInput = styled.input`
  background: none;
  background-color: white;
  color: ${subColor};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};
  margin: 25px 0;

  &:focus {
    outline: none;
  }

  &:focus ~ label {
    ${shrinkLabelMixin}
  }

  &[type="password"] {
    letter-spacing: 0.3em;
  }
`;

// Styled component for the 'label' element
export const FormInputLabel = styled.label`
  color: ${subColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;

  ${props => props.shrink && shrinkLabelMixin}; // Apply the shrink mixin conditionally
`;
