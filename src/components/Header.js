import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},

	title: {
		flexGrow: 1,
	},
}))

const Header = () => {
	const classes = useStyles()

	return (
		<div>
			<AppBar position='sticky' color='transparent'>
				<Toolbar variant='dense'>
					<Typography variant='h1' align='center' className={classes.title}>
						Kaisan taidemuistipeli
					</Typography>
				</Toolbar>
			</AppBar>
			<Toolbar variant='dense' />
		</div>
	)
}

export default Header
