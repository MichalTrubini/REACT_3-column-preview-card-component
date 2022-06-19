import Column from "./Column";
import './Columns.css'

function Columns(props){
    return (
        <div className="container">
            <Column 
                type={props.items[0].type}
                description={props.items[0].description}
                className={props.items[0].className}
                imgsrc={props.items[0].imgsrc}
            />
            <Column
                type={props.items[1].type}
                description={props.items[1].description}
                className={props.items[1].className}
                imgsrc={props.items[1].imgsrc}
            />
            <Column 
                type={props.items[2].type}
                description={props.items[2].description}
                className={props.items[2].className}
                imgsrc={props.items[2].imgsrc}
            />
        </div>
    )
}

export default Columns;