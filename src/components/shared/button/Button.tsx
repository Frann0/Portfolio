import './Button.scss'


const Button = ({ icon, text }: { icon?: string, text: string }) => {
  return (
    <button className="Button">
      {icon && (
        <img src={icon} className="Button_Icon" />
      )}
      <p className="Button_Text">{text}</p>
    </button>
  )
}

export default Button 
