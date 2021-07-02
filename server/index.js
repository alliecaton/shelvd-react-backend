const express = require('express')
const fetch = require('node-fetch')
const cors = require('cors')

const PORT = process.env.PORT || 3001

const app = express()
app.use(cors())

app.get('/results/:query', (req, res) => {
	fetch(
		`https://www.googleapis.com/books/v1/volumes?q=${req.params.query}&printType=books`
	)
		.then(res => res.json())
		.then(data => {
			console.log(req.params.query)
			res.json({ results: data })
		})
})

app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`)
})
