import { Container, Grid, TextField ,Box,Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Post from './Post';
import ViewPost from './ViewPost';


const useStyles = makeStyles({
    container:{
        paddingRight: "15px",
  paddingLeft: "15px",
  marginRight: "auto",
  marginLeft: "auto",
  width: "100%",
  display:'flex'
    },
    typo:{
    }
})


function App(props) {
    const classes=useStyles();
    return (
        <div >       
            <Container>
        <div  className={classes.container}>
            <Grid md={6} lg={6}>
             <Post/>
            </Grid>
            <Grid md={6} lg={6}>
             <ViewPost/>
            </Grid>
        </div>
        </Container>
        </div>
    );
}

export default App;