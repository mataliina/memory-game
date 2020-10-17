import React, { useState, useEffect } from 'react'
import ReactCardFlip from 'react-card-flip'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import BackImage from '../components/tausta.jpg'

const GameCard = (props) => {
	const {
		cardImage,
		name,
		id,
		flippedCards,
		setFlippedCards,
		correctPairs,
		resetAllFlips,
		setResetAllFlips,
		unFlip,
		setUnFlip,
		changeClassName,
		setChangeClassName,
	} = props
	const [isFlipped, setIsFlipped] = useState(false)
	const [className, setClassName] = useState(false)

	useEffect(() => {
		setIsFlipped(false)
		setClassName(false)
		setResetAllFlips(false)
	}, [resetAllFlips])

	useEffect(() => {
		if (Object.values(correctPairs).indexOf(name) > -1) {
			setClassName(true)
		}
		setChangeClassName(false)
	}, [changeClassName])

	useEffect(() => {
		if (unFlip) {
			if (Object.values(correctPairs).indexOf(name) === -1 && isFlipped) {
				setTimeout(() => {
					setIsFlipped(false)
				}, 1000)
			}
			setUnFlip(false)
		}
	}, [unFlip])

	const handleOpenClick = (event) => {
		setIsFlipped(true)
		let newFlipped = { ...flippedCards }
		newFlipped[id] = event.target.alt
		setFlippedCards(newFlipped)
	}

	return (
		<>
			<ReactCardFlip
				isFlipped={isFlipped}
				flipDirection='horizontal'
				cardZIndex='1'
				flipSpeedBackToFront='0.3'
				flipSpeedFrontToBack='0.3'
				index={id}
			>
				<Card raised onClick={handleOpenClick}>
					<CardMedia component='img' alt={name} height='width' image={BackImage} />
				</Card>

				<Card raised className={className ? 'winningCard' : ''}>
					<CardMedia component='img' alt={name} height='width' image={cardImage} />
				</Card>
			</ReactCardFlip>
		</>
	)
}
export default GameCard
