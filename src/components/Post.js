import { Grid, TextareaAutosize, TextField, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { getAllPost } from '../axios';
const useStyles = makeStyles({
    typo:{
        marginLeft:'75px',
        marginBottom:'20px'
    }
})
function Post(props) {
    const classes=useStyles();
    return (
        <Grid>
            <Typography variant='h2'>Post Application</Typography>
            <Typography className={classes.typo} variant='h4'>Enter user ID</Typography>
            <TextField   className={classes.typo} id="outlined-basic" label="user ID" variant="outlined"/>
            <Typography  className={classes.typo} variant='h4'>Enter Title</Typography>
            <TextField   className={classes.typo}id="outlined-basic" label="post title" variant="outlined"/>
            <Typography  className={classes.typo} variant='h4'>Enter Body</Typography>
            <TextField
             className={classes.typo}
          id="filled-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Post Body"
          variant="filled"
        />
        </Grid>
    );
}

export default Post;