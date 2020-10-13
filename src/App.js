import React, { useState, useEffect } from 'react'
import GameCard from './components/GameCard'
import { Grid, Button } from '@material-ui/core'
import { Container } from '@material-ui/core'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import imageList from './images/imageList'
import Header from './components/Header'
import Footer from './components/Footer'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import './App.css'
import WinningDialog from './components/WinningDialog'

const theme = createMuiTheme({
	typography: {
		fontFamily: 'Waiting for the Sunrise',
		h1: {
			fontSize: '2rem',
		},
		body1: {
			color: 'black',
		},
		body2: {
			fontFamily: 'Roboto',
		},
	},
})

const App = () => {
	const [flippedCards, setFlippedCards] = useState({})
	const [sortedImages, setSortedImages] = useState([])
	const [correctPairs, setCorrectPairs] = useState({})
	const [resetAllFlips, setResetAllFlips] = useState(false)
	const [unFlip, setUnFlip] = useState(false)
	const [changeClassName, setChangeClassName] = useState(false)
	const [open, setOpen] = useState(false)
	const [count, setCount] = useState('6')

	useEffect(() => {
		sortImages()
	}, [])

	useEffect(() => {
		startGame()
	}, [count])

	const startGame = () => {
		sortImages()
		setFlippedCards({})
		setCorrectPairs({})
		setResetAllFlips(true)
		setChangeClassName(false)
	}

	const sortImages = () => {
		let countImages = imageList.sort(() => 0.5 - Math.random()).slice(0, count)
		let images = countImages.concat(countImages).sort(() => 0.5 - Math.random())
		setSortedImages(images)
	}

	const dealCards = () => {
		return sortedImages.map((i, index) => {
			return (
				<Grid item xs={4} md={3} key={index}>
					<GameCard
						cardImage={i.img}
						name={i.title}
						id={index}
						setFlippedCards={setFlippedCards}
						flippedCards={flippedCards}
						correctPairs={correctPairs}
						resetAllFlips={resetAllFlips}
						setResetAllFlips={setResetAllFlips}
						unFlip={unFlip}
						setUnFlip={setUnFlip}
						changeClassName={changeClassName}
						setChangeClassName={setChangeClassName}
					/>
				</Grid>
			)
		})
	}

	const handleChange = (event) => {
		setCount(event.target.value)
	}

	useEffect(() => {
		if (Object.keys(flippedCards).length === 2) {
			if (Object.values(flippedCards)[0] === Object.values(flippedCards)[1]) {
				console.log('Löysit parin!')
				let newCorrectPairs = Object.assign(correctPairs, flippedCards)
				setCorrectPairs(newCorrectPairs)
				setFlippedCards({})
				setChangeClassName(true)
			} else {
				console.log('ei tullut pari')
				setUnFlip(true)
				setFlippedCards({})
			}
		}
		if (
			Object.keys(correctPairs).length > 0 &&
			Object.keys(correctPairs).length === Object.keys(sortedImages).length
		) {
			console.log('Voitto!')
			setOpen(true)
		}
	}, [flippedCards])

	return (
		<div>
			<ThemeProvider theme={theme}>
				<Header />
				<Container maxWidth={'md'}>
					<Grid container spacing={2} alignItems='center'>
						<Grid item xs={12} sm={9}>
							<FormControl component='fieldset'>
								<FormLabel component='legend'>Valitse vaikeustaso</FormLabel>
								<RadioGroup
									row
									aria-label='vaikeustaso'
									name='vaikeustaso'
									value={count}
									onChange={handleChange}
								>
									<FormControlLabel value='4' control={<Radio />} label='Helppo' />
									<FormControlLabel value='6' control={<Radio />} label='Ihan OK' />
									<FormControlLabel value='10' control={<Radio />} label='Vaivalloisin' />
								</RadioGroup>
							</FormControl>
						</Grid>
						<Grid item xs={12} sm={3}>
							<Button fullWidth onClick={startGame} variant='outlined'>
								Ota uusiksi
							</Button>
						</Grid>
					</Grid>

					<Grid container spacing={2} style={{ marginTop: 2 }}>
						{dealCards()}
					</Grid>
					<Footer />
				</Container>
				<WinningDialog open={open} setOpen={setOpen} startGame={startGame} />
			</ThemeProvider>
		</div>
	)
}
export default App
