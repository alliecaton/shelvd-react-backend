const express = require('express')
const fetch = require('node-fetch')
const cors = require('cors')

const PORT = process.env.PORT || 3001

const app = express()
app.use(cors())

// fetch('https://google.com')
//     .then(res => res.text())
//     .then(text => res.json({ message: 'Hello from server!' }))

app.get('/results', (req, res) => {
	fetch(
		'https://www.googleapis.com/books/v1/volumes?q=%22wool%22+inTitle&printType=books'
	)
		.then(res => res.json())
		.then(data => {
			console.log('node', req.params)
			res.json({ results: data })
		})
})

app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`)
})
