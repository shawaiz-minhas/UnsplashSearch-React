import React,{useState} from 'react'

const SearchBar = ({onsubmit}) => {
  const formHandler = (e) => {
    e.preventDefault()
    onsubmit(term)
  }
  const [term, setTerm] = useState('')
  const changeHandler = (e) => {
    setTerm(e.target.value)
  }

  
  return (
    <div>
     <form onSubmit={formHandler}>
      <input type="text" onChange={changeHandler} value={term} />
     </form>
    </div>
  )
}

export default SearchBar
