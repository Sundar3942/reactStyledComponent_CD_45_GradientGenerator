import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {
  GradientGeneratorPage,
  Heading,
  Para,
  GradientDirectionItemList,
  ColorPickersContainer,
  ColorPickerItem,
  ColorInput,
  GenerateButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here
class GradientGenerator extends Component {
  state = {
    activeDirection: gradientDirectionsList[0].value,
    firstColor: '#8ae323',
    secondColor: '#014f7b',
    setDirection: gradientDirectionsList[0].value,
    setFirstColor: '#8ae323',
    setSecondColor: '#014f7b',
  }

  onClickDirectionItemHandler = value => {
    this.setState({activeDirection: value})
  }

  firstColorInputHandler = event => {
    console.log(event.target.value)
    this.setState({firstColor: event.target.value})
  }

  secondColorInputHandler = event => {
    console.log(event.target.value)
    this.setState({secondColor: event.target.value})
  }

  onGenerate = () => {
    const {activeDirection, firstColor, secondColor} = this.state
    this.setState({
      setDirection: activeDirection,
      setFirstColor: firstColor,
      setSecondColor: secondColor,
    })
  }

  render() {
    console.log(this.state)
    const {
      activeDirection,
      firstColor,
      secondColor,
      setDirection,
      setFirstColor,
      setSecondColor,
    } = this.state
    return (
      <GradientGeneratorPage
        data-testid="gradientGenerator"
        firstColor={setFirstColor}
        secondColor={setSecondColor}
        activeDirection={setDirection}
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <Para>Choose Direction</Para>
        <GradientDirectionItemList>
          {gradientDirectionsList.map(each => (
            <GradientDirectionItem
              onClickDirectionItemHandler={this.onClickDirectionItemHandler}
              key={each.directionId}
              activeDirection={activeDirection}
              each={each}
            />
          ))}
        </GradientDirectionItemList>
        <Para>Pick the Colors</Para>
        <ColorPickersContainer>
          <ColorPickerItem>
            <Para small>{firstColor}</Para>
            <ColorInput
              type="color"
              value={firstColor}
              onChange={this.firstColorInputHandler}
            />
          </ColorPickerItem>
          <ColorPickerItem>
            <Para small>{secondColor}</Para>
            <ColorInput
              type="color"
              value={secondColor}
              onChange={this.secondColorInputHandler}
            />
          </ColorPickerItem>
        </ColorPickersContainer>
        <GenerateButton onClick={this.onGenerate}>Generate</GenerateButton>
      </GradientGeneratorPage>
    )
  }
}

export default GradientGenerator
