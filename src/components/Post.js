import { Button, FormControl, FormLabel, Grid, Paper, TextareaAutosize, TextField, Typography, Box } from '@material-ui/core';
import React,{useState} from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { bindActionCreators } from 'redux';
import { viewdata } from '../actions';
import { connect } from 'react-redux';
import { styled } from '@mui/material/styles';
import CONFIG from '../config/config';
const useStyles = makeStyles({
    paper:{
    marginTop: '100px',
    minWidth: '500px',
    background: '#3f51b5',
    color: 'azure',
    },
    format:{
        display:'flex',
    justifyContent: 'space-around',
    },
    textarea:{
        
        display:'grid',
        padding: 'inherit',
    },
    form:{
        padding: '20px'
    },
    button:{
        display: 'flex',
        justifyContent: 'center',
        height:' 50px',
        padding:'30px',
        backgroundColor:'#757de8'
    },
    title:{
        display: 'flex',
        justifyContent: 'center',
        padding:'20px'
    },
    fontColor:{
        color:'azure'
    }
})
const ValidationTextField = styled(TextField)({
    
    '& input:valid + fieldset': {
      borderColor: 'green',
      borderWidth: 5,
    },
    '& input:invalid + fieldset': {
      borderColor: 'red',
      borderWidth: 5,
    },
    '& input:valid:focus + fieldset': {
      borderLeftWidth: 10,
      borderColor: 'azure',
      padding: '4px !important',
    },
    '& label.Mui-focused': {
        color: 'azure',
      },
      '& label': {
        color: 'azure',
      },

  });

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
        <Paper item className={classes.paper}>
            <div className={classes.title}>
            <Typography variant='h2'>Post Form</Typography>
            </div>
            <div className={classes.form}>
            <div className={classes.format}>
                <div>
            <ValidationTextField  
            InputProps={{
                className:classes.fontColor
            }}
            value={userId}
                onChange={(e)=>setUserId(e.target.value)}
             className={classes.typo}         required
             variant="outlined" label="Enter User Id" />
             </div>
             <div>
            <ValidationTextField 
            InputProps={{
                className:classes.fontColor
            }} value={title}
                onChange={(e)=>setTitle(e.target.value)}
                required
             className={classes.typo}id="outlined-basic" label="Enter Post title" variant="outlined"/>
             </div>
             </div>
             <div className={classes.textarea}>
            <ValidationTextField
            InputProps={{
                className:classes.fontColor
            }}
            required
            value={body}
            onChange={(e)=>setBody(e.target.value)}
             className={classes.typo}
          id="filled-multiline-static"
          label="Post Body"
          multiline
          rows={4}
          defaultValue="Post Body"
          variant="filled"
        />
        </div>
        </div>
        <div className={classes.button}>
        <Button style={{backgroundColor:'#3f51b5' , color:'azure'}} onClick={()=>{
            addpost(userId,title,body,props);
        }}  className={classes.button}variant="contained">Add Post</Button>
        </div>
        </Paper>
        
    );
}

 function mapDispatchToProps(dispatch){
    return bindActionCreators({viewdata},dispatch)
}
export default connect(null,mapDispatchToProps)(Post);