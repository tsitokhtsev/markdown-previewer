import React from 'react'

import './editor.css'

const Editor = ({ mdValue, onInputChange }) => {
	return (
		<textarea
			id="editor"
			value={mdValue}
			onChange={onInputChange}
		>
		</textarea>
	)
}

export default Editor