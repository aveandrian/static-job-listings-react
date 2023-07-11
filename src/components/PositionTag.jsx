import '../styles/PositionTag.css'

export default function PositionTag(props){
    return (
        <div className="position-tag" onClick={()=> props.addTagToFilter(props.type, props.name)}>
            <p className="position-tag-name" >{props.name}</p>
        </div>
    )
}