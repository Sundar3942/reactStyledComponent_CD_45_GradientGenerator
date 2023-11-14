// Style your elements here
import styled from 'styled-components'

export const CustomButton = styled.button`
  border: none;
  outline: none;
  background-color: white;
  opacity: ${props => (props.buttonStateActive ? '1' : '0.5')};
  color: ${props => (props.buttonStateActive ? '#1e293b' : ' #014f7b')};
  width: 100px;
  padding: 10px;
  border-radius: 8px;
  margin-right: 10px;
  font-weight: bold;
  cursor: pointer;
`
