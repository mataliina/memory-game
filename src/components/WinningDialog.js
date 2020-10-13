import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Slide from '@material-ui/core/Slide'

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction='up' ref={ref} {...props} />
})

const WinningDialog = (props) => {
	const { open, setOpen, startGame } = props

	const handleCloseNo = () => {
		setOpen(false)
	}

	const handleCloseYes = () => {
		setOpen(false)
		startGame()
	}

	return (
		<div>
			<Dialog
				open={open}
				TransitionComponent={Transition}
				keepMounted
				onClose={handleCloseNo}
				aria-labelledby='winning-dialog-title'
				aria-describedby='winning-dialog-description'
			>
				<DialogTitle id='winning-dialog-title'>{'Voitto kotiin!'}</DialogTitle>
				<DialogContent>
					<DialogContentText id='winning-dialog-description'>
						Huvittaisiko pelata uudestaan?
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleCloseNo} color='primary'>
						Ei jaksa
					</Button>
					<Button onClick={handleCloseYes} color='primary'>
						Joo, uudestaan
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	)
}
export default WinningDialog
