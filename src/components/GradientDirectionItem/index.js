// Write your code here
import {CustomButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {each, activeDirection, onClickDirectionItemHandler} = props
  const {directionId, value, displayText} = each

  const buttonStateActive = activeDirection === value

  const onClickDirectionItem = () => {
    onClickDirectionItemHandler(value)
  }

  return (
    <li id={directionId}>
      <CustomButton
        buttonStateActive={buttonStateActive}
        type="button"
        onClick={onClickDirectionItem}
      >
        {displayText}
      </CustomButton>
    </li>
  )
}

export default GradientDirectionItem
