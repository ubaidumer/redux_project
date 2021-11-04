import { Button, FormControl, FormLabel, Grid, Paper, TextareaAutosize, TextField, Typography, Box } from '@material-ui/core';
import React,{useState} from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { bindActionCreators } from 'redux';
import { viewdata } from '../actions';
import { connect } from 'react-redux';
import { styled } from '@mui/material/styles';
import CONFIG from '../config/config';
import validator from 'validator';
import * as Yup from 'yup'
import { Alert } from '@mui/material';
import { Formik } from 'formik';
import { CircularProgress } from '@material-ui/core';
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

const Schema = {
    userId: {
        presence: {
            allowEmpty: false,
            message: "User Id Must Not Be Empty"
        },
        numericality: {
            required: true,
            message: 'User Id Must Be Numerical'
        },
    },
    title: {
        presence: {
            allowEmpty: false,
            message: "Title Must Not Be Empty"
        },
        length: {
          minimum: 6,
          maximum: 20,
          message: 'Title Must Be Atleast 6 characters and Atmost 20 characters'
        },

    },
    body:{
        presence: {
            allowEmpty: false,
            message: "Body Must Not Be Empty"
        },
        length: {
          minimum: 15,
          maximum: 100,
          message: 'Body Must Be Atleast 15 characters and Atmost 100 characters'
        },

    }
}

function Post(props) {
    const classes=useStyles();
    return (
        <Paper item className={classes.paper}>
            <div className={classes.title}>
            <Typography variant='h2'>Add Post Form</Typography>
            </div>
            <div className={classes.form}>
            <div className={classes.format}>
                <div>
                <Formik
      initialValues={{
          userId:'123123123',
          body:"lorem ipsm love u",
          title:'qeqweqwe',
        submit: null
      }}
      validationSchema={Yup.object().shape({
        userId: Yup.string()
          .max(255)
          .required('UserId is required'),
        body: Yup.string()
          .max(255)
          .required('Body is required'),
        title: Yup.string()
          .max(255)
          .required('Title is required')
      })}
      onSubmit={async (values,  { setErrors, setStatus }) => {
        let ERROR={};
        const {userId,title,body} = values;
        if((!validator.isNumeric(userId))||validator.isAlpha(userId)){
            ERROR['userId']="Only Numeric input is allowed in UserId field!"
        }
        if(!validator.isLength(title,{
            min:5,
            max:20
        })){
            ERROR['title']="title must be 5 characters to 20 characters!"  
        }
        if(!validator.isLength(body,{
            min:15,
            max:100
        })){
            ERROR['body']="body must be 15 characters to 100 characters!"  
        }
        console.log("cjec",ERROR)
        if(Object.keys(ERROR).length !== 0){
            setStatus({ success: false });
            setErrors({  submit:Object.values(ERROR) });
        }else{
       const res= await axios.post(CONFIG.POST_URL,{
    
        userId:userId,
        title:title,
        body:body
    
        })
        console.log(res);
    }
        props.viewdata();
        }
      }
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        touched,
        values
      }) => (
        <form
          noValidate
          onSubmit={handleSubmit}
        >
          <TextField
            error={Boolean(touched.userId && errors.userId)}
            autoFocus
            fullWidth
            helperText={touched.userId && errors.userId}
            label="UserId"
            margin="normal"
            name="userId"
            placeholder="userId"
            onBlur={handleBlur}
            onChange={handleChange}
            type="userId"
            value={values.userId}
            variant="outlined"
          />
          <TextField
            error={Boolean(touched.title && errors.title)}
            helperText={touched.title && errors.title}
            fullWidth
            label="Title"
            margin="normal"
            name="title"
            onBlur={handleBlur}
            onChange={handleChange}
            type="title"
            value={values.title}
            variant="outlined"
          />
            <TextField
            error={Boolean(touched.body && errors.body)}
            helperText={touched.body && errors.body}
            label="Body"
            fullWidth
            margin="normal"
            name="body"
            onBlur={handleBlur}
            onChange={handleChange}
            type="body"
            value={values.body}
            variant="outlined"
          />
          {errors.submit && (
            <Box mt={2}>
              <Alert severity="error">
                <div>
                  <strong>{errors.submit}</strong>
                </div>
              </Alert>
            </Box>
          )}
          <Box mt={2}>
            <Button
              color="secondary"
              disabled={isSubmitting}
              fullWidth
              size="large"
              type="submit"
              variant="contained"
            >
              Log In {'  '}
              {isSubmitting && (
                <CircularProgress />
              )}
            </Button>
          </Box>
        </form>
      )}
    </Formik>
             </div>
             </div>
        </div>

     
        </Paper>
        
    );
}

 function mapDispatchToProps(dispatch){
    return bindActionCreators({viewdata},dispatch)
}
export default connect(null,mapDispatchToProps)(Post);