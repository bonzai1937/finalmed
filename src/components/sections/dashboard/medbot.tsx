import React, { useState } from 'react';
import {
  Box,
  Paper,
  Button,
  Typography,
  CircularProgress,
  TextField,
  Avatar,
  IconButton,
} from '@mui/material';
const MedBot = () => {
  const apiKey = 'AIzaSyATdjV2agdgNFoaaSPHtRAkN5zLBMdxv-g'; // Ensure to replace this with a safer method like .env
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;
  const [userQuery, setUserQuery] = useState('');
  const [botResponse, setBotResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false); // State to control the minimized state of the bot
  const fetchResponse = async () => {
    if (!userQuery) return;
    setLoading(true);
    setBotResponse('');
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: userQuery, // Sending the user query as input text
                },
              ],
            },
          ],
        }),
      });
      const data = await response.json();
      console.log('API Response:', data); // Log the full API response for debugging
      // Adjusting to access the response correctly
      if (data && data.candidates && data.candidates[0] && data.candidates[0].content) {
        const responseText = data.candidates[0].content.parts[0].text;
        setBotResponse(responseText); // Setting the correct response text
      } else {
        setBotResponse('Sorry, I could not understand your question.');
      }
    } catch (error) {
      console.error('Error fetching response:', error);
      setBotResponse('An error occurred, please try again.');
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <Box
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          width: 350,
          zIndex: 9999,
          borderRadius: 3,
          boxShadow: 3,
        }}
      >
        {/* If the bot is minimized, show a button to restore it */}
        {isMinimized ? (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#1976d2',
              borderRadius: '20px',
              padding: '10px',
              cursor: 'pointer',
            }}
            onClick={() => setIsMinimized(false)} // Restore the bot when clicked
          >
            <Typography variant="body2" sx={{ color: 'white', fontWeight: 'bold' }}>
              MedBot
            </Typography>
          </Box>
        ) : (
          <Paper
            sx={{
              padding: 3,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              borderRadius: 3,
              position: 'relative', // To position the minimize button correctly
            }}
          >
            {/* Custom Minimize Button */}
            <IconButton
              onClick={() => setIsMinimized(true)} // Minimize the bot
              sx={{
                position: 'absolute',
                top: 8,
                right: 8,
                backgroundColor: 'transparent',
                color: '#888',
                '&:hover': {
                  color: 'black',
                },
                fontSize: '20px',
                fontWeight: 'bold',
                padding: 0, // Remove padding around the icon
              }}
            >
              _
            </IconButton>
            {/* Bot Title and Avatar */}
            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
              <Avatar
                sx={{ marginRight: 2 }}
                alt="MedBot Avatar"
                src="https://img.icons8.com/ios/452/doctor-male.png"
              />
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                MedBot
              </Typography>
            </Box>
            {/* Input field for user query */}
            <TextField
              variant="outlined"
              fullWidth
              value={userQuery}
              onChange={(e) => setUserQuery(e.target.value)}
              sx={{
                marginBottom: 2,
                '& .MuiOutlinedInput-root': {
                  borderRadius: '20px',
                },
              }}
            />
            {/* Ask Button */}
            <Button
              variant="contained"
              color="primary"
              onClick={fetchResponse}
              disabled={loading}
              sx={{
                padding: '10px 20px',
                borderRadius: 20,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
              }}
            >
              {loading ? <CircularProgress size={24} color="inherit" /> : 'Ask'}
            </Button>
            {/* Bot Response Display */}
            {botResponse && (
              <Box
                sx={{
                  padding: 2,
                  marginTop: 2,
                  width: '100%',
                  borderRadius: 1,
                  backgroundColor: '#f5f5f5',
                  border: '1px solid #ddd',
                  boxShadow: 1,
                }}
              >
                <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
                  {botResponse}
                </Typography>
              </Box>
            )}
          </Paper>
        )}
      </Box>
    </>
  );
};
export default MedBot;
