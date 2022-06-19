import './Button.css'

function Button(props){
    return (
        <div>
            <button className={props.className}>Learn more</button>
        </div>
    )
}

export default Button;