import './Column.css'
import Button from './Button'

function Column(props){
    return (
        <div className="column">
            <img src={props.imgsrc} alt="car"></img>
            <h2 className="column-heading">{props.type}</h2>
            <p className="column-paragraph">{props.description}</p>
            <Button className={props.className}></Button>
        </div>
    )
}

export default Column;