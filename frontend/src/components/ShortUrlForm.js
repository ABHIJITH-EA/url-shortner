import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';
import { shortUrl } from '../apis/shortUrl';
import { ErrorPopup } from './ErrorPopUp';
import { isValidUrl } from '../utils/urlHelper';
import { API_ENDPOINTS } from '../config/apiConfig';

export function ShortUrlForm({onShorten}) {
    const [url, setUrl] = useState('');
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const handleSubmit = async (event) => {
      event.preventDefault();

      if(!isValidUrl(url)) {
        setErrorMsg('Invalid URL format. Please enter a valid http/https URL.');
        setOpenSnackbar(true);
        return;
      }
      
      try {
        const data = await shortUrl(API_ENDPOINTS.shortenUrl);
        onShorten(data.short_url);
        setErrorMsg('');
      } catch (error){
        onShorten('');
        setErrorMsg('Failed to process URL');
        setOpenSnackbar(true)
      }

    };

    const handleCloseSnackbar = () => {
      setOpenSnackbar(false);
    }
    return(
        <>
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

          <ErrorPopup 
            open={openSnackbar}
            message={errorMsg}
            onClose={handleCloseSnackbar}
          />
        </>
    );
}