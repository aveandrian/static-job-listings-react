
import './App.css'
import JobListingsData from '../data.json'
import JobListing from './components/JobListing'
import { useEffect, useState } from 'react'
import FilterTag from './components/FilterTag'
import { nanoid } from 'nanoid'

function App() {
  const [filteredList, setFilteredList] = useState([])
  const [filters, setFilters] = useState([])

  useEffect(()=>{
    if(filters.length == 0 )
      return setFilteredList(JobListingsData)

    let startList = JobListingsData
    let newList = []
    
    startList.forEach(startListItem => {
      let shouldBeAdded = true
      filters.forEach(filterItem => {
        if(!startListItem[filterItem.type].includes(filterItem.name))
          shouldBeAdded = false
      })
      if(shouldBeAdded)
        newList.push(startListItem)
    })
    setFilteredList(newList)
  }, [filters])

  function clearFilters(){
    setFilters([])
  }

  function removeTagFromFilter(id){
    setFilters(prev => prev.filter(item => item.id != id))
  }

  function addTagToFilter(type, name){
    let isFilterAdded = false
    filters.forEach(filter => {
      if(filter.type == type && filter.name == name)
        isFilterAdded = true
    })
    if(!isFilterAdded)
      setFilters(prev => [...prev, {
        id: nanoid(),
        type: type,
        name: name
      }])
  }

  return (
    <main>
      <div className='header-bg'></div>
      {filters.length > 0 && (
        <div className='filters-section'>
          <div className='filter-tags-container'>
            {filters.map(filter => <FilterTag key={filter.id} {...filter} removeTagFromFilter={removeTagFromFilter}/>)}

          </div>
          <p className='clear-btn' onClick={clearFilters}>Clear</p>
        </div>
      )}
      <div className='listings-container'>
        {filteredList.map(listing => <JobListing key={listing.id} {...listing} addTagToFilter={addTagToFilter}/>)}
      </div>
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/aveandrian">aveandrian</a>.
      </div>
    </main>
  )
}

export default App
