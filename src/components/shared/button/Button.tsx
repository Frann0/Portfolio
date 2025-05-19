import type { ButtonProps } from '../../../models/Button'
import './Button.scss'


const Button = ({ icon, text, onClick }: ButtonProps) => {
  return (
    <button className="Button" onClick={onClick}>
      {icon && (
        <img src={icon} className="Button_Icon" />
      )}
      <p className="Button_Text">{text}</p>
    </button>
  )
}

export default Button 
