import React, { useEffect, useState } from "react";
import {
  Typography,
  Avatar,
  Box,
  Card,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemButton,
  Badge,
} from "@mui/material";



const MyRestaurants = ( ) => {

  const [Restaurants , setRestaurants] = useState([]);

  useEffect( () => {
    const fetchdata = async()=>{
      const res = await fetch("http://localhost:3000/api/getRestaurants");
      const d = await res.json();
      const data = d.restaurants;
      setRestaurants(data);
  
    }
  
    fetchdata();
   
  }, []);

  return (
    <>
      <Card variant="outlined" sx={{ p: 0  , maxHeight: 350 , overflow: 'auto'}}>
        <Box
          px={3}
          py={2}
          bgcolor="primary.main"
          color="white"
          borderRadius="0 !important"
          mb="-15px"
        >
          <Typography variant="h5">My Restaurants</Typography>
          <Typography variant="subtitle1">Here is a list of all the Restaurants</Typography>
        </Box>
        <Box pt={2}>
      
          <List>
            {Restaurants.map((item, i) => (
              <ListItem key={i}>
                <ListItemButton>
                  <ListItemAvatar>
                    <Badge
                      >
                      {i+1}
                    </Badge>
                  </ListItemAvatar>
                  <ListItemText
                    primary={item.name}
                    primaryTypographyProps={{
                      fontSize: "16px",
                      fontWeight: 500,
                    }}
                    secondary={item.location}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Card>
    </>
  );
};


export default MyRestaurants;
