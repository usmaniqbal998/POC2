import React from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import MediaCard from './Card';
import { Grid } from '@mui/material';

const drawerWidth = 240;

const data = [
	{
		Animal: 'Owl',
		Link: 'https://i.pinimg.com/550x/aa/76/d0/aa76d04a47d07ef37ae579e4bd76f79c.jpg',
		Details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sodales risus et efficitur imperdiet. Phasellus faucibus lacinia ante at rhoncus. In lobortis mauris egestas libero tempus malesuada. Aliquam ornare odio diam, sit amet rutrum risus ultricies quis. Mauris dignissim facilisis malesuada. Integer eget sollicitudin dui. Aenean suscipit ex eu diam porttitor vestibulum. Quisque bibendum mi nec metus pulvinar,',
	},
	{
		Animal: 'Owl',
		Link: 'https://site-547756.mozfiles.com/files/547756/catitems/Barn_Owl-5ac510a90bff9b2cf198640d04e214bc.jpg',
		Details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sodales risus et efficitur imperdiet. Phasellus faucibus lacinia ante at rhoncus. In lobortis mauris egestas libero tempus malesuada. Aliquam ornare odio diam, sit amet rutrum risus ultricies quis. Mauris dignissim facilisis malesuada. Integer eget sollicitudin dui. Aenean suscipit ex eu diam porttitor vestibulum. Quisque bibendum mi nec metus pulvinar,',
	},
	{
		Animal: 'Owl',
		Link: 'https://i.pinimg.com/originals/25/8d/60/258d606e117ca82f5bedcf9871e69fe8.jpg',
		Details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sodales risus et efficitur imperdiet. Phasellus faucibus lacinia ante at rhoncus. In lobortis mauris egestas libero tempus malesuada. Aliquam ornare odio diam, sit amet rutrum risus ultricies quis. Mauris dignissim facilisis malesuada. Integer eget sollicitudin dui. Aenean suscipit ex eu diam porttitor vestibulum. Quisque bibendum mi nec metus pulvinar,',
	},
	{
		Animal: 'Owl',
		Link: '	https://i.pinimg.com/originals/b2/eb/52/b2eb52780d143d4b34f5f3cded47c56a.jpg',
		Details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sodales risus et efficitur imperdiet. Phasellus faucibus lacinia ante at rhoncus. In lobortis mauris egestas libero tempus malesuada. Aliquam ornare odio diam, sit amet rutrum risus ultricies quis. Mauris dignissim facilisis malesuada. Integer eget sollicitudin dui. Aenean suscipit ex eu diam porttitor vestibulum. Quisque bibendum mi nec metus pulvinar,',
	},

	{
		Animal: 'Owl',
		Link: 'https://site-547756.mozfiles.com/files/547756/catitems/Barn_Owl-5ac510a90bff9b2cf198640d04e214bc.jpg',
		Details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sodales risus et efficitur imperdiet. Phasellus faucibus lacinia ante at rhoncus. In lobortis mauris egestas libero tempus malesuada. Aliquam ornare odio diam, sit amet rutrum risus ultricies quis. Mauris dignissim facilisis malesuada. Integer eget sollicitudin dui. Aenean suscipit ex eu diam porttitor vestibulum. Quisque bibendum mi nec metus pulvinar,',
	},
	{
		Animal: 'Owl',
		Link: 'https://i.pinimg.com/originals/25/8d/60/258d606e117ca82f5bedcf9871e69fe8.jpg',
		Details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sodales risus et efficitur imperdiet. Phasellus faucibus lacinia ante at rhoncus. In lobortis mauris egestas libero tempus malesuada. Aliquam ornare odio diam, sit amet rutrum risus ultricies quis. Mauris dignissim facilisis malesuada. Integer eget sollicitudin dui. Aenean suscipit ex eu diam porttitor vestibulum. Quisque bibendum mi nec metus pulvinar,',
	},

	{
		Animal: 'Owl',
		Link: 'https://i.pinimg.com/550x/aa/76/d0/aa76d04a47d07ef37ae579e4bd76f79c.jpg',
		Details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sodales risus et efficitur imperdiet. Phasellus faucibus lacinia ante at rhoncus. In lobortis mauris egestas libero tempus malesuada. Aliquam ornare odio diam, sit amet rutrum risus ultricies quis. Mauris dignissim facilisis malesuada. Integer eget sollicitudin dui. Aenean suscipit ex eu diam porttitor vestibulum. Quisque bibendum mi nec metus pulvinar,',
	},

	{
		Animal: 'Owl',
		Link: '	https://i.pinimg.com/originals/b2/eb/52/b2eb52780d143d4b34f5f3cded47c56a.jpg',
		Details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sodales risus et efficitur imperdiet. Phasellus faucibus lacinia ante at rhoncus. In lobortis mauris egestas libero tempus malesuada. Aliquam ornare odio diam, sit amet rutrum risus ultricies quis. Mauris dignissim facilisis malesuada. Integer eget sollicitudin dui. Aenean suscipit ex eu diam porttitor vestibulum. Quisque bibendum mi nec metus pulvinar,',
	},
];

function App() {
	return (
		<>
			<CssBaseline />

			<Grid
				container
				direction='row'
				justifyContent='flex-start'
				alignItems='flex-start'
				spacing={3}
			>
				{data.map((d) => (
					<Grid item xs={3}>
						<MediaCard
							Animal={d.Animal}
							Link={d.Link}
							Details={d.Details}
						/>
					</Grid>
				))}
			</Grid>
		</>
	);
}

export default App;
