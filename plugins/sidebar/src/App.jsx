import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { navigateToUrl } from 'single-spa';

const drawerWidth = 240;

function App() {
	return (
		<>
			<CssBaseline />
			<AppBar
				position='fixed'
				sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
			>
				<Toolbar>
					<Typography variant='h6' noWrap component='div'>
						Pandora
					</Typography>
				</Toolbar>
			</AppBar>
			<Drawer
				variant='permanent'
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					[`& .MuiDrawer-paper`]: {
						width: drawerWidth,
						boxSizing: 'border-box',
					},
				}}
			>
				<Toolbar />
				<Box sx={{ overflow: 'auto' }}>
					<List>
						{['Plugin A', 'Plugin B', 'Plugin C', 'Plugin D'].map(
							(text, index) => (
								<ListItem
									key={text}
									disablePadding
									onClick={() => navigateToUrl('/pluginA')}
								>
									<ListItemButton>
										<ListItemIcon>
											{index % 2 === 0 ? (
												<InboxIcon />
											) : (
												<MailIcon />
											)}
										</ListItemIcon>
										<ListItemText primary={text} />
									</ListItemButton>
								</ListItem>
							)
						)}
						<Divider />
						{['Plugin E', 'Plugin F', 'Plugin G', 'Plugin H'].map(
							(text, index) => (
								<ListItem key={text} disablePadding>
									<ListItemButton>
										<ListItemIcon>
											{index % 2 === 0 ? (
												<InboxIcon />
											) : (
												<MailIcon />
											)}
										</ListItemIcon>
										<ListItemText primary={text} />
									</ListItemButton>
								</ListItem>
							)
						)}
					</List>
				</Box>
			</Drawer>
		</>
	);
}

export default App;
