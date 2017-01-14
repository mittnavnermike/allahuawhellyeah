import styled from 'styled-components';
import vars from '../variables';

const Button = styled.button`
  background: ${props => props.secondary ? vars.colors.secondary : vars.colors.primary};
  color:  ${props => props.secondary ? vars.colors.white : vars.colors.black};
  padding: ${props => props.small ? '.5rem 1rem' : '1rem 2rem'};
  transition: all 400ms;
  cursor: pointer;
  margin-bottom: 1rem;
  border: 0;
  font-size: ${vars.fontSize.default};
  margin-bottom: 0;

  &:hover {
    outline: 0;
  }

  &:disabled {
    background: ${vars.colors.gray};
    color: ${vars.colors.black};
    transition: all 200ms;
  }
`;

export default Button;
