import "./header.css"
import Search from './Search'
const Header = ({getSearch}) => {

  return (
      <div className='container'>
      <header>
      <h1>
        All Naruto Images
    </h1>
    <Search getSearch={getSearch}/>
      </header>
    </div>
  )
}

export default Header