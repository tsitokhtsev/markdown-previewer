import React, { useState } from 'react'
import Editor from './components/Editor'
import Preview from './components/Preview'

import './app.css'

const App = () => {
	const defaultMdValue = '# Markdown Previewer'

	const [mdValue, setMdValue] = useState(defaultMdValue)

	const onInputChange = e => {
		setMdValue(e.target.value)
	}
	
	return (
		<div>
			<header>
				<h1>Markdown Previewer</h1>
			</header>
			<main>
				<Editor onInputChange={onInputChange} mdValue={mdValue} />
				<Preview mdValue={mdValue} />
			</main>
		</div>
	)
}

export default App