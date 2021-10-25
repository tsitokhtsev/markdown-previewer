import React from 'react'
import marked from 'marked'

import './preview.css'

const Preview = ({ mdValue }) => {
	const parsedText = marked(mdValue, { breaks: true })

	return (
		<div id="preview" dangerouslySetInnerHTML={{ __html: parsedText }}>
		</div>
	)
}

export default Preview