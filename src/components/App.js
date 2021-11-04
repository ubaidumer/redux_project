import { Container, Grid, TextField ,Box,Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Post from './Post';
import ViewPost from './ViewPost';
import Header from './Header';
import DeletePost from './DeletePost';
import EditPost from './EditPost';

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
            < Grid container spacing={2}>
            <Grid item  md ={6}>
             <Post/>
             <EditPost/>
             <DeletePost/>
            </Grid>
            <Grid item md ={6}>
             <ViewPost/>
            </Grid>
        </Grid>
        </div>
    );
}

export default App;