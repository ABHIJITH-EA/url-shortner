import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';
import { shortUrl } from '../apis/shortUrl';

export function ShortUrlForm({onShorten}) {
    const [url, setUrl] = useState('');

    const handleSubmit = async (event) => {
      event.preventDefault();
      
      try {
        const data = await shortUrl(url);
        onShorten(data.shortUrl);
        console.log(`Url: ${url}`);
      } catch (error){
        console.log('Error: ', error);
      }

    };
    return(
        <form onSubmit={handleSubmit} noValidate>
        <Grid container spacing={2} direction="column" alignItems="center">
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Enter URL"
              variant="outlined"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </Grid>
  
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Shorten URL
            </Button>
          </Grid>
        </Grid>
      </form>
    );
}