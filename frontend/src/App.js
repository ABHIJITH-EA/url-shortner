import React, { useState } from 'react';
import { Container, Box, Typography } from '@mui/material';

import { ShortUrlForm } from './components/ShortUrlForm';
import { DisplayShortUrl } from './components/DisplayShortUrl';

function App() {
  const [shortUrl, setShortUrl] = useState('');

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        URL Shortener
      </Typography>
      <ShortUrlForm onShorten = {setShortUrl}/>
      { shortUrl && (
        <DisplayShortUrl shortUrl={shortUrl} />
      )}
      </Box>
    </Container>
  );
}

export default App;
