// Style your elements here
import styled from 'styled-components'

export const GradientGeneratorPage = styled.div`
  width: 100vw;
  min-height: 100vh;
  max-height: 100%;
  background-image: linear-gradient(
    ${props =>
      `to ${props.activeDirection}, ${props.firstColor} , ${props.secondColor}`}
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Heading = styled.h1`
  font-size: 28px;
  color: white;
  margin-bottom: 20px;
`
export const Para = styled.p`
  font-size: ${props => (props.small ? '17px' : '22px')};
  color: #ededed;
  margin-bottom: ${props => (props.small ? '10px' : '20px')};
`
export const GradientDirectionItemList = styled.ul`
  padding: none;
  list-style-type: none;
  display: flex;
`
export const ColorPickersContainer = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`
export const ColorPickerItem = styled.div`
  text-align: center;
  width: 150px;
`
export const ColorInput = styled.input`
  width: 130px;
  border: 1px solid #334155;
  height: 50px;
  padding: 0;
`
export const GenerateButton = styled.button`
  width: 100px;
  border: none;
  border-radius: 5px;
  outline: none;
  background-color: #00c9b7;
  color: #1e293b;
  padding: 10px;
  font-weight: bold;
  cursor: pointer;
`
