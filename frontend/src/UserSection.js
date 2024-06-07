import { styled } from '@mui/material/styles';
import React, { useState, useEffect } from 'react';
import axios from "axios";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';



const client = axios.create({
  baseURL: "http://localhost:3000/api/v1" 
});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const UserSection = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    client.get('users').then((response) => {
      setUsers(response.data);
    });
  }, []);
  

  return (
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={4}>
          {users.map((user) => {
            return (
            <Item key={user.userId}>
              <Card>
                <CardMedia
                sx={{ height: 140 }}
                image="https://picsum.photos/200/300"
                title="User Profile Image 1"
                />
                <CardMedia
                sx={{ height: 140 }}
                image="https://picsum.photos/200/300"
                title="User Profile Image 2"
              />
                <CardMedia
                sx={{ height: 140 }}
                image="https://picsum.photos/200/300"
                title="User Profile Image 3"
              />

            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <h2>{user.firstName} {user.lastName}</h2>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <h3>Gender: {user.userGender}</h3>
                <h3>Postcode: {user.userPostCode}</h3>
              </Typography>
            </CardContent>
            <CardActions>
              <Button  
                onClick={() => {
                  alert('clicked');
                }}              
              size="small">View Profile</Button>
              <Button size="small">Book A Date</Button>
            </CardActions>
          </Card>
          </Item>

         
          );
       })}
    </Grid>
      
    </Grid>
    </Box>
  );
 
}



export default UserSection;