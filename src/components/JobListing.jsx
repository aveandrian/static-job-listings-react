import '../styles/JobListing.css'

export default function JobListing(props){
    return (
        <div className={`job-listing ${props.featured ? "featured" : ""}`}>
            <img className='logo' src={props.logo} />
            <div className='description'>
                <div className='listing-tags'>
                    <p className='company-name'>{props.company}</p>
                    {props.new && <p className='new-tag listing-tag'>NEW!</p>}
                    {props.featured && <p className='featured-tag listing-tag'>FEATURED</p>}
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
            <div className='position-tags'>
                <p className='position-role'>{props.role}</p>
                <p className='position-level'>{props.level}</p>
                <p className='position-languages'>{props.languages[0]}</p>
                <p className='position-tools'>{props.tools[0]}</p>
            </div>
        </div>
    )
}