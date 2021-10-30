import { Container, Grid, TextField ,Box,Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Post from './Post';
import ViewPost from './ViewPost';
import Header from './Header';

const useStyles = makeStyles({
    container:{
        paddingRight: "15px",
  paddingLeft: "15px",
  margin: "auto",
  display:'flex',
    },
    gridpost:{
        padding:'50px',
    },
    gridview:{
        minWidth:'700px',
        padding:'50px',
        overflow:'auto'
    },

})


function App(props) {
    const classes=useStyles();
    return (
        <div  >       
            <Header/>
            <Container>
        <div  className={classes.container}>
            <div className={classes.gridpost}>
            <Grid >
             <Post/>
            </Grid>
            </div>
            <div className={classes.gridview}>
            <Grid>
             <ViewPost/>
            </Grid>
            </div>
        </div>
        </Container>
        </div>
    );
}

export default App;