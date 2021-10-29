import { Button, Grid, TextareaAutosize, TextField, Typography } from '@material-ui/core';
import React,{useState} from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { bindActionCreators } from 'redux';
import { viewdata } from '../actions';
import { connect } from 'react-redux';
import CONFIG from '../config/config';
const useStyles = makeStyles({
    typo:{
        marginLeft:'75px',
        marginBottom:'20px'
    },
    button:{
        marginLeft:'125px',
        marginBottom:'20px'
    }
})

async function addpost(userId,title,body,props){
    console.log("qeqweqwe",CONFIG.POST_URL)
   const res= await axios.post(CONFIG.POST_URL,{

    userId:userId,
    title:title,
    body:body

    })
    console.log(res);
    props.viewdata();
}


function Post(props) {
    const [userId, setUserId] = useState('');
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const classes=useStyles();
    return (
        <Grid>
            <Typography variant='h2'>Post Application</Typography>
            <Typography className={classes.typo} variant='h4'>Enter user ID</Typography>
            <TextField  value={userId}
                onChange={(e)=>setUserId(e.target.value)}
             className={classes.typo} id="outlined-basic" label="user ID" variant="outlined"/>
            <Typography  className={classes.typo} variant='h4'>Enter Title</Typography>
            <TextField  value={title}
                onChange={(e)=>setTitle(e.target.value)}
             className={classes.typo}id="outlined-basic" label="post title" variant="outlined"/>
            <Typography  className={classes.typo} variant='h4'>Enter Body</Typography>
            <TextField
            value={body}
            onChange={(e)=>setBody(e.target.value)}
             className={classes.typo}
          id="filled-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Post Body"
          variant="filled"
        />
          <Typography  className={classes.typo} variant='h4'>Submit Form</Typography>
        <Button onClick={()=>{
            addpost(userId,title,body,props);
        }}  className={classes.button}variant="contained">Submit</Button>
        </Grid>
    );
}

 function mapDispatchToProps(dispatch){
    return bindActionCreators({viewdata},dispatch)
}
export default connect(null,mapDispatchToProps)(Post);