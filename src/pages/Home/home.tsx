import React from 'react';
import { Grid, Paper, Typography, Button, List, ListItem, ListItemText } from '@mui/material';
import MainLayout from 'layouts/main-layout'; // assuming MainLayout exists

// Dummy data for posts/tweets
const tweets = [
  {
    id: 1,
    username: 'Ministry of Health',
    content: `Our youth are the future, and their actions today are contributing to a TB-free tomorrow. 
Schools and Colleges can organize rallies and competitions to spread TB awareness and inspire change. 
The next generation is leading the way towards a healthier India. #TBMuktBharat`,
    timestamp: '2 hours ago',
    /*image: 'https://via.placeholder.com/400x200.png?text=Image+2',*/
  },
  {
    id: 2,
    username: 'HospitalsApollo',
    content: `This International Day of Persons with Disabilities, we celebrate your strength and potential. With the right care, your mobility 🚶‍♂️ and quality of life can improve by up to 60%. Apollo is here to help you take the next step toward a brighter tomorrow. 🌟

#ApolloHospitals`,
    timestamp: '3 hours ago',
    /*image: 'https://via.placeholder.com/400x200.png?text=Image+2',*/
  },
  {
    id: 3,
    username: 'World Health Organization (WHO)',
    content: `Consent means actively agreeing to be sexual with someone.
It
✅ Must be freely given
✅ Must be explicit in words or actions
✅ Must be specific to each act
✅ Can be withdrawn at any time

Respect boundaries.`,
    timestamp: '5 hours ago',
    /*image: 'https://via.placeholder.com/400x200.png?text=Image+3',*/
  },
  {
    id: 4,
    username: 'Dr Mansukh Mandaviya',
    content: `Join me in the Fit India #SundaysOnCycle drive along with our ITBP & CRPF Jawans. 🚴‍

📅 Date: 22nd December 2024

⏰ Time: 8 AM

📍 Location: Major Dhyan Chand National Stadium, New Delhi

Let's come together and embrace fitness for a healthier tomorrow.`,
    timestamp: '1 day ago',
    /*image: 'https://via.placeholder.com/400x200.png?text=Image+2',*/
  },
  {
    id: 5,
    username: 'Ramaiah Medical College',
    content: 'Happy National Doctors Day 2024',
    timestamp: 'Jul 1',
    image: '',
  },
];

// Dummy data for trending topics and suggested follows
const trends = [
  {
    id: 1,
    hashtag: '#JananiShishuSurakshaKaryakaram (JSSK)',
    description: `The scheme is estimated to benefit more than 12 million pregnant women who access Government health facilities for their delivery`,
  },
  {
    id: 2,
    hashtag: '#WorldAIDSDay',
    description: `The day is an opportunity for public and private partners to spread awareness about the status of the pandemic and encourage progress in HIV/AIDS`,
  },
  {
    id: 3,
    hashtag: '#TheHeartTruth',
    description: `A campaign to raise awareness about heart disease and its risk factors among women and educate and motivate them to take action to prevent the disease and control its risk factors.`,
  },
];

const suggestedFollows = [
  {
    id: 1,
    username: 'NIMHgov',
    bio: `The lead federal agency for research on mental disorders.`,
  },
  {
    id: 2,
    username: 'WHO',
    bio: 'We are the #UnitedNations health agency - #HealthForAll.',
  },
  {
    id: 3,
    username: 'HospitalsApollo',
    bio: `India, let's #BeProHealth 🇮🇳`,
  },
];

const HomePage = () => {
  return (
    <MainLayout>
      <Grid container spacing={2}>
        {/* Main Feed */}
        <Grid item xs={8}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h5" gutterBottom>
              Home Feed
            </Typography>

            {/* Display Tweets/Posts */}
            {tweets.map((tweet) => (
              <Paper key={tweet.id} sx={{ padding: 2, marginBottom: 2 }}>
                <Typography variant="h6" gutterBottom>
                  {tweet.username}{' '}
                  <span style={{ fontSize: '0.8rem', color: 'gray' }}>{tweet.timestamp}</span>
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {tweet.content}
                </Typography>
                {tweet.image && (
                  <img
                    src={tweet.image}
                    alt="tweet"
                    style={{ width: '100%', borderRadius: '10px' }}
                  />
                )}
              </Paper>
            ))}
          </Paper>
        </Grid>

        {/* Right Sidebar */}
        <Grid item xs={4}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h6" gutterBottom>
              What's Happening
            </Typography>
            <List>
              {/* Display Trending Topics */}
              {trends.map((trend) => (
                <ListItem key={trend.id}>
                  <ListItemText primary={trend.hashtag} secondary={trend.description} />
                </ListItem>
              ))}
            </List>

            <Typography variant="h6" gutterBottom sx={{ marginTop: 3 }}>
              Who to follow
            </Typography>
            {/* Display Suggested Users */}
            {suggestedFollows.map((user) => (
              <ListItem key={user.id} button>
                <ListItemText primary={user.username} secondary={user.bio} />
                <Button variant="outlined" size="small">
                  Follow
                </Button>
              </ListItem>
            ))}
          </Paper>
        </Grid>
      </Grid>
    </MainLayout>
  );
};

export default HomePage;
