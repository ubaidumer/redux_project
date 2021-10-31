import { Button, FormControl, FormLabel, Grid, Paper, TextareaAutosize, TextField, Typography, Box } from '@material-ui/core';
import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { styled } from '@mui/material/styles';
import { removedata } from './../actions/index';
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

function DeletePost(props) {
    const [postId, setPostId] = useState('');
    const classes=useStyles();
    return (
        <Paper item className={classes.paper}>
            <div className={classes.title}>
            <Typography variant='h2'>Delete Post Form</Typography>
            </div>
            <div className={classes.form}>
            <div className={classes.format}>
            <ValidationTextField  
            InputProps={{
                className:classes.fontColor
            }}
            value={postId}
                onChange={(e)=>setPostId(e.target.value)}
             className={classes.typo}         required
             variant="outlined" label="Enter Post Id" />
             </div>
             <div>   
        </div>
        </div>
        <div className={classes.button}>
        <Button style={{backgroundColor:'#3f51b5' , color:'azure'}} 
        
        className={classes.button}variant="contained" 
        onClick={()=>props.removedata(postId)}>Delete Post</Button>
        </div>
        </Paper>
        
    );
}

 function mapDispatchToProps(dispatch){
    return bindActionCreators({removedata},dispatch)
}
export default connect(null,mapDispatchToProps)(DeletePost);