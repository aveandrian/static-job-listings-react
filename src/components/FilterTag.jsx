import '../styles/FilterTag.css'

export default function FilterTag(props){
    return (
        <div className="filter-tag">
            <p className="name">{props.name}</p>
            <button className="remove-filter" onClick={()=>props.removeTagFromFilter(props.id)}>
                <img className="remove-filter-icon" src="./images/icon-remove.svg"></img>
            </button>
        </div>
    )
}