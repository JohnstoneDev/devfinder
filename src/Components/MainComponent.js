// lib imports
import { useState, useEffect  } from 'react'

// local imports
import '../Styles/index.css'
import '../Styles/main.css'

import { DevInfo, UserNotFound } from './DevInfo'

const SearchBar = ({ callFunction, updateFound }) => {
	const [ username, setUsername ] = useState("")

	function handleSubmit(){
		const url = `https://api.github.com/users/${username}`

		fetch(url)
		.then(r => {
			r.ok?
			r.json().then(d => { callFunction(d) }) :
			r.json().then(() => {
				updateFound(false)
				callFunction(null)

				setTimeout(() => {
					updateFound(true)
				}, 5000)

			})
		})
		.catch(e => console.log(e))

		setUsername("")
	}

  return (
    <div className='searchbar'>
      <form onSubmit={(e) => { e.preventDefault(); handleSubmit()}}>
				<span className='icon-container'>
        	<ion-icon name="search-sharp" className="font-extrabold"></ion-icon>
				</span>
        <input
					type="text"
					value={username}
					onChange={(e) => { e.preventDefault(); setUsername(e.target.value);}}
					placeholder='Enter Github username ...'/>
        <button> Search </button>
      </form>
    </div>
  )
}

// Main Component
export const MainComponent = () => {
	const [ userData, setUserData ] = useState(null)
	const [ found, setFound ] = useState(true)

	console.log(userData)

	useEffect(() => {
	},[userData])

	return (
		<div className="main-display">
			<h2>devfinder</h2>
			<div className='display'>
				<SearchBar callFunction={setUserData} updateFound={setFound}/>
				<div hidden={userData === null}>
					<DevInfo {...userData}/>
				</div>
				<div hidden={found}>
					<UserNotFound />
				</div>
			</div>
		</div>
	)
}