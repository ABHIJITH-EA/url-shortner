import React from 'react';
import { Box, Typography, Grid, IconButton, Button } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export function DisplayShortUrl({ shortUrl }) {
  const redirectUrl = `http://127.0.0.1:8000/api/${shortUrl}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(redirectUrl);
  };

  const handleVisit = () => {
    window.open(redirectUrl, '_blank');
  }

  if (!shortUrl) {
    return null;
  }

  return (
    <Box mt={3} sx={{ width: '100%' }}>
      <Typography variant="h6" align="center" gutterBottom>
        Shortened URL
      </Typography>
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={8} md={9}>
          <Button
            fullWidth
            variant="outlined"
            color="primary"
            onClick={handleVisit}
            sx={{wordBreak: 'break-all'}}
          >
           {shortUrl}
          </Button>
        </Grid>
        <Grid item xs={2} md={1}>
          <IconButton color="primary" onClick={handleCopy} aria-label="copy">
            <ContentCopyIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
}
