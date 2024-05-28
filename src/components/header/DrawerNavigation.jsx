import { Box, Divider, Drawer, List, ListItem, ListItemButton, ModalClose, Typography } from '@mui/joy'
import React from 'react'
import { NavLink } from 'react-router-dom'

const DrawerNavigation = ({ open, toggleDrawer }) => {
  return (
    <Drawer open={open} onClose={toggleDrawer(false)} 
    sx={{
      '--Drawer-transitionDuration': open ? '0.4s' : '0.2s',
      '--Drawer-transitionFunction': open
        ? 'cubic-bezier(0.79,0.14,0.15,0.86)'
        : 'cubic-bezier(0.77,0,0.18,1)',
    }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 0.5,
          ml: 'auto',
          mt: 1,
          mr: 2,
        }}
      >
        <Typography
          component="label"
          htmlFor="close-icon"
          fontSize="sm"
          fontWeight="lg"
          sx={{ cursor: 'pointer' }}
        >
          Close
        </Typography>
        <ModalClose id="close-icon" sx={{ position: 'initial' }} />
        </Box>
        <Box
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <nav className='flex flex-col gap-1'>
          <NavLink to={'/'} className='px-8 py-1 hover:bg-slate-100'>Beranda</NavLink>
          <NavLink to={'/quran'} className='px-8 py-1 hover:bg-slate-100'>Quran</NavLink>
          <NavLink to={'/hadis'} className='px-8 py-1 hover:bg-slate-100'>Hadist</NavLink>
          <NavLink to={'dzikir'} className='px-8 py-1 hover:bg-slate-100'>Dzikir</NavLink>
          <NavLink to={'/doa'} className='px-8 py-1 hover:bg-slate-100'>Doa</NavLink>
          </nav>
          {/* <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text) => (
              <ListItem key={text}>
                <ListItemButton>{text}</ListItemButton>
              </ListItem>
            ))}
          </List> */}
        </Box>
    </Drawer>)
}

export default DrawerNavigation