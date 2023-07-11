
import './App.css'
import JobListingsData from '../data.json'
import JobListing from './components/JobListing'
import { useState } from 'react'
import FilterTag from './components/FilterTag'
import { nanoid } from 'nanoid'
function App() {
  const [filters, setFilters] = useState([
    {
      id: nanoid(),
      name: "Fontend"
    }
  ])
  function clearFilters(){
    setFilters([])
  }
  return (
    <main>
      <div className='header-bg'></div>
      {filters.length >= 0 && (
        <div className='filters-section'>
          {filters.map(filter => <FilterTag key={filter.id} {...filter}/>)}
          <p className='clear-btn' onClick={clearFilters}>Clear</p>
        </div>
      )}
      <div className='listings-container'>

        {JobListingsData.map(listing => <JobListing key={listing.id} {...listing} />)}
      </div>
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/aveandrian">aveandrian</a>.
      </div>
    </main>
  )
}

export default App
