import { nanoid } from 'nanoid'
import '../styles/JobListing.css'
import PositionTag from './PositionTag'

export default function JobListing(props){
    return (
        <div className={`job-listing ${props.featured ? "featured" : ""}`}>
            <img className='logo' src={props.logo} />
            <div className='description'>
                <div className='listing-tags'>
                    <p className='company-name'>{props.company}</p>
                    {props.new && <div className='new-tag listing-tag'>NEW!</div>}
                    {props.featured && <div className='featured-tag listing-tag'>FEATURED</div>}
                </div> 
                <h1 className='position-title'>{props.position}</h1>
                <div className='listing-stats'>
                    <p className='time'>{props.postedAt}</p>
                    <div className='stats-divider'></div>
                    <p className='contract'>{props.contract}</p>
                    <div className='stats-divider'></div>
                    <p className='location'>{props.location}</p>
                </div>
            </div>
            <div className='listing-divider'></div>
            <div className='position-tags'>
                <PositionTag addTagToFilter={props.addTagToFilter} id={nanoid()} type="role" name={props.role} />
                <PositionTag addTagToFilter={props.addTagToFilter}  id={nanoid()} type="level" name={props.level} />
                {props.languages.length > 0 && props.languages.map((language, i) => 
                    <PositionTag key={i} addTagToFilter={props.addTagToFilter} id={nanoid()}  type="languages" name={language} />
                )}
                {props.tools.length > 0 && props.tools.map((tool, i) => 
                    <PositionTag key={i} addTagToFilter={props.addTagToFilter} id={nanoid()}  type="tools" name={tool} />
                )}
            </div>
        </div>
    )
}