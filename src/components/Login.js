import React from 'react'
import { Avatar,  Button,  Grid, Paper, TextField, Typography, Link} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import  FormControlLabel  from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Formik,Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';

const Login = ({handleChange}) => {

    const paperStyle ={padding: "20px",height:'81vh',width:300,margin:"0 auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnStyle={margin:"8px 0"}

    const initialValues ={
      username:'',
      password:'',
      remember:false
    }
    
    const validationSchema= Yup.object().shape({
      username:Yup.string().email('Please enter your Valid Email'),
      password:Yup.string()
    })

    const onSubmit =(values, props) =>{
      console.log(values)
      setTimeout(() => {
        props.resetForm()
        props.setSubmitting(false)
      },1000)
     
      console.log(props)
    }

   
  return (
      <Grid>
         <Paper style={paperStyle}>
             <Grid align ='center'>
             <Avatar style={avatarStyle}>
              <LockOutlinedIcon /></Avatar>
           <h2>Sign in</h2>
             </Grid>
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
              {(props) =>(
                <Form>
                  {console.log(props)}
            <Field as={TextField} label='Username' name='username' placeholder='Enter username' fullWidth required  helperText={< ErrorMessage name='username'/>}/>
             <Field as ={TextField} label='Password' name='password' placeholder='Enter password' type='Password' fullWidth required helperText={< ErrorMessage name='password'/>} />
             <FormControlLabel
               name='remember'
              control={
                  <Checkbox
                  color='primary'
                 

                  />
              }
              label='Remember me'
            />
        <Button
         type='submit' 
         variant='contained' 
         color='primary' 
         disabled ={props.isSubmitting}style={btnStyle} 
         fullWidth>{props.isSubmitting?"Loading":"Sign In"}</Button>
            </Form>
              )}
            </Formik>
             
        <Typography>
        <Link href="#">
             Forget password
        </Link>
        </Typography>
        <Typography>Do you have an account?
        <Link href="#" onClick={() => handleChange ("event",1)}>
             Sign up?
        </Link>
        </Typography>
         </Paper>
      </Grid>
  )
}

export default Login