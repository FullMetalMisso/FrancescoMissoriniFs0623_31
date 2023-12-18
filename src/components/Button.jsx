const Button = (props) =>{
   return <button type="button" onClick={()=> window.alert(`io sono ${props.nameB}`)}> {props.nameB}</button>
}
export default Button