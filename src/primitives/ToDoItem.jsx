import styled, { keyframes } from 'styled-components';
import vars from '../variables';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100%);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const Button = styled.li`
  background: ${props => props.completed ? vars.colors.primary : vars.colors.gray};
  color:  ${vars.colors.black};
  padding: 1rem;
  cursor: pointer;
  margin-bottom: 1rem;
  border: 0;
  font-size: ${vars.fontSize.default};
  animation: ${fadeIn} 400ms;
`;

export default Button;
