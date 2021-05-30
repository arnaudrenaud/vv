import styled from 'styled-components';

export default styled.button<{ disabled?: boolean }>`
  margin: 0;
  border: 1px solid black;
  border-radius: 4px;
  padding: 6px 8px;
  font-size: 0.8125rem;
  text-transform: uppercase;
  font-weight: bold;
  color: initial;
  background: white;
  box-shadow: 1px 1px black;

  &:enabled:active {
    background: #eee;
    box-shadow: inset 1px 1px black;
  }
`;
