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



const MyUsers = () => {

  const [users , setUsers] = useState([]);

  useEffect( () => {
    const fetchdata = async()=>{
      const res = await fetch("http://localhost:3000/api/getUsers");
      const d = await res.json();
      const data = d.users;
      setUsers(data);
  
    }
  
    fetchdata();
   
  }, []);

  return (
    <>
      <Card variant="outlined" sx={{ p: 0 , maxHeight: 350, overflow: 'auto' }}>
        <Box
          px={3}
          py={2}
          bgcolor="primary.main"
          color="white"
          borderRadius="0 !important"
          mb="-15px"
        >
          <Typography variant="h5">My Users</Typography>
          <Typography variant="subtitle1">Here is a list of all the users</Typography>
        </Box>
        <Box pt={2}>
      
          <List>
            {users.map((item, i) => (
              <ListItem key={i}>
                <ListItemButton>
                  <ListItemAvatar>
                    <Badge
                      >
                      <Avatar src={item.img} alt="1" />
                    </Badge>
                  </ListItemAvatar>
                  <ListItemText
                    primary={item.name}
                    primaryTypographyProps={{
                      fontSize: "16px",
                      fontWeight: 500,
                    }}
                    secondary={item.email}
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


export default MyUsers;
