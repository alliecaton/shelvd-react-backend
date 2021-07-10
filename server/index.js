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
			console.log('backend query', req.params.query)
			res.json({ results: data })
		})
		.catch(error => {
			console.log(error.message)
		})
})

app.get('/books/:isbn', (req, res) => {
	fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${req.params.isbn}`)
		.then(res => res.json())
		.then(data => {
			console.log('in fetch', req.params.isbn)
			res.json({ results: data.items })
		})
		.catch(error => {
			console.log(error.message)
		})
})

app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`)
})
