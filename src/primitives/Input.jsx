import styled from 'styled-components';
import vars from '../variables';

const Button = styled.input`
  background: ${vars.colors.gray};
  color: ${vars.colors.black};
  border: 2px solid ${vars.colors.gray};
  padding: 1rem;
  transition: background 400ms;
  cursor: pointer;
  transition: transform 100ms;
  margin-bottom: 1rem;
  border: 0;
  font-size: ${vars.fontSize.default};
  margin-bottom: 0;

  &:focus {
    outline: 0;
  }

  &:disabled {
    background: ${vars.colors.gray};
  }
`;

export default Button;
