import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login';

const Header = () => {
  return (
    <AppBar>
      <Toolbar>
        <Typography
          variant='h6'
          component='span'
          sx={{
            flexGrow: '1',
          }}
        >
          Logo
        </Typography>
        <IconButton 
          color='inherit'
        >
          <LoginIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default Header