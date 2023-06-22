import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import React from 'react';
import Typography from '@mui/material/Typography';
import { useHistory } from 'react-router-dom';

function Home() {
  const history = useHistory();

  const handleGetStarted = () => {
    history.push('/another-page');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f5f5f5',
      }}
    >
      <Typography variant='h2' component='h1' align='center' gutterBottom>
        Welcome to My Student Portfolio
      </Typography>
      <Typography variant='h4' align='center' gutterBottom>
        Showcase your achievements and skills
      </Typography>
      <Button
        variant='contained'
        color='primary'
        size='large'
        onClick={handleGetStarted}
      >
        Get Started
      </Button>
    </Box>
  );
}

export default Home;
