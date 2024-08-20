import React, { useState } from 'react';
import { Container, Box, Typography } from '@mui/material';

import { ShortUrlForm } from './components/shortUrlForm';

function App() {
  const [shortUrl, setShortUrl] = useState('');

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        URL Shortener
      </Typography>
      <ShortUrlForm onShorten = {setShortUrl}/>
      </Box>
    </Container>
  );
}

export default App;
