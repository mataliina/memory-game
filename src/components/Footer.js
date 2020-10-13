import React from 'react'
import { Typography, Box, Grid } from '@material-ui/core'

const Footer = () => {
	return (
		<>
			<Box>
				<Grid container spacing={6} alignItems='center' style={{ marginTop: 2 }}>
					<Grid item>
						<Typography color='textSecondary' variant='body2'>
							Kuvat ja koodit: Kaisa Heinonen / kaisa.hannamaarit@gmail.com
						</Typography>
					</Grid>
				</Grid>
			</Box>
		</>
	)
}
export default Footer
