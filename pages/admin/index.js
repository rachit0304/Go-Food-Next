'use client'
import {styled, Grid, Box ,useTheme,Container} from '@mui/material';
import PageContainer from './container/PageContainer';
// components
import Sidebar from './layout/sidebar/Sidebar'
import Header from './layout/header/Header'
import Footer from './layout/footer/page'


import SalesOverview from './components/dashboard/TheSalesOverview';
import MyRestaurants from './components/dashboard/TheMyRestaurants';
import MyUsers from './components/dashboard/TheMyContacts';
import ProfileCard from "./components/dashboard/TheProfileCard";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const MainWrapper = styled("div")(() => ({
  // display: "flex",
  minHeight: "100vh",
  width: "100%",
}));

const PageWrapper = styled("div")(() => ({
  display: "flex",
  flexGrow: 1,
  paddingBottom: "60px",
  flexDirection: "column",
  zIndex: 1,
  backgroundColor: "transparent",
}));

const Dashboard = () => {

  const router = useRouter();
  const theme = useTheme();
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [val , setVal] = useState("");

  useEffect(() => {
    if(typeof window !== 'undefined') {
      const value = localStorage.getItem('adminToken');
      setVal(value);
      console.log(value);
    }
  }, []);


  return (
    <>
    {
      
      val !== null ? <div>    <MainWrapper className="mainwrapper">

      <Header toggleMobileSidebar={() => setMobileSidebarOpen(true)} />
  
         <PageWrapper className="page-wrapper"
            sx={{
                [theme.breakpoints.up("lg")]: {
                  ml: `270px`,
                },
            }}
        >
  
           <Sidebar
              isSidebarOpen={isSidebarOpen}
              isMobileSidebarOpen={isMobileSidebarOpen}
              onSidebarClose={() => setMobileSidebarOpen(false)}
            />
  
          <Container
            sx={{
              paddingTop: "20px",
              maxWidth: "1200px",
            }}
          >
      <PageContainer title="Dashboard" description="this is Dashboard">
  
          <Box mt={4} sx={{ minHeight: "calc(100vh - 170px)" }}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={8}>
              <SalesOverview />
            </Grid>
            <Grid item xs={12} lg={8}>
              <MyRestaurants />
            </Grid>

           
            <Grid item xs={12} lg={4}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <ProfileCard />
                </Grid>
                <Grid item xs={12}>
                  <MyUsers/>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        </PageContainer>
  
        <Footer/>
  
          </Container>
        </PageWrapper>
          </MainWrapper></div> :  <div>No Permissions</div>
    } 

</>
    

   

  )
} 

export default Dashboard;
