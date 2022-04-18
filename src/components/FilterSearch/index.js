import {BsSearch} from 'react-icons/bs'
import './index.css'

const FilterSearch = props => {
  const renderJobsCategoryFilterList = () => {
    const {employmentTypesList} = props

    return employmentTypesList.map(eachType => {
      const {activeJobId, changeJobCategory} = props
      const onClickChangeCategory = () =>
        changeJobCategory(eachType.activeJobId)
      const isActive = eachType.employmentTypeId === activeJobId
      return (
        <form>
          <li
            className="rating-item"
            onClick={onClickChangeCategory}
            key={eachType.employmentTypeId}
          >
            <input
              className="checkBox"
              type="checkbox"
              id="job-type"
              value={eachType.label}
              key={eachType.employmentTypeId}
            />
            <label htmlFor="job-type" className="cursor">
              {eachType.label}
            </label>
          </li>
        </form>
      )
    })
  }

  const renderJobType = () => (
    <>
      <h1 className="employment-heading">Type of Employment</h1>
      <ul className="list-items">{renderJobsCategoryFilterList()}</ul>
    </>
  )

  const onEnterSearchInput = event => {
    const {enterSearchInput} = props
    if (event.key === 'Enter') {
      enterSearchInput()
    }
  }

  const onChangeSearchInput = event => {
    const {changeSearchInput} = props
    changeSearchInput(event.target.value)
  }

  const renderSearchInput = () => {
    const {searchInput} = props
    return (
      <div className="search-container">
        <input
          value={searchInput}
          type="search"
          className="search"
          placeholder="Search"
          key="label"
          onChange={onChangeSearchInput}
          onKeyDown={onEnterSearchInput}
        />
        <button className="icon" testid="searchButton" type="button">
          <BsSearch />
        </button>
      </div>
    )
  }

  const renderSalaryJobsList = () => {
    const {salaryRangesList} = props
    return salaryRangesList.map(eachSalary => {
      const {changeSalary, activeSalaryId} = props
      const isActive = eachSalary.salaryRangeId === activeSalaryId
      const onClickChangeCategory = () => changeSalary(eachSalary.salaryRangeId)

      return (
        <>
          <li
            className="rating-item"
            onClick={onClickChangeCategory}
            key={eachSalary.salaryRangeId}
          >
            <input
              id="vicky"
              value={eachSalary.label}
              type="radio"
              key="label"
            />
            <label htmlFor="vicky">{eachSalary.label}</label>
          </li>
        </>
      )
    })
  }

  const renderSalaryResult = () => (
    <>
      <h1 className="employment-heading">Salary Range</h1>
      <ul className="list-items">{renderSalaryJobsList()}</ul>
    </>
  )

  return (
    <div>
      {renderSearchInput()}
      {renderJobType()}
      {renderSalaryResult()}
    </div>
  )
}

export default FilterSearch

//  <div className="profile-filter-container">
//             <div className="profile-container">
//               <img src={profileUrl} alt={name} className="profile-image" />
//               <h1 className="name">{name}</h1>
//               <p className="bio">{bio}</p>
//             </div>
//             <hr className="hr-line" />
//             <div>
//               <h1 className="filter-header">Type of Employment</h1>
//               <ul className="list-container">
//                 {employmentTypesList.map(eachList => (
//                   <li className="list-items" key={eachList.employmentTypeId}>
//                     <input type="checkbox" id={eachList.employmentTypeId} />
//                     {eachList.label}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <hr className="hr-line" />
//             <div>
//               <h1 className="filter-header">Salary Range</h1>
//               <ul>
//                 {salaryRangesList.map(eachRange => (
//                   <li className="list-items" key={eachRange.salaryRangeId}>
//                     <input type="checkbox" id={eachRange.salaryRangeId} />{' '}
//                     {eachRange.label}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//           <div className="search-result-container">
//             <div className="search-container">
//               <input
//                 type="search"
//                 className="search"
//                 placeholder="search"
//                 onChange={this.onChangeSearch}
//               />
//               <div className="icon">
//                 <BsSearch />
//               </div>
//             </div>
//             <div>

//             </div>
//           </div>
