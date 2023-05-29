import React, { useEffect, useState } from 'react'
import { Helmet } from "react-helmet";
import { useNavigate, useParams } from 'react-router-dom';
import { GetId, PUT } from '../api/request';

import { ImageValidation } from '../validation/Validation';
import { Button, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
const Edit = () => {

const [loading, setLoading]=useState(true)
const navigate= useNavigate()
const  [datas, setDatas]=useState()
const [data, setData]=useState({})
const {id}=useParams()
useEffect(()=>{
    GetId(id).then((res)=>{
        setData(res);
    formik.values.name=res.name
    formik.values.age=res.age
    formik.values.image=res.image
    setLoading(false)
    })

}, [id])

const handleEdit=async(values, actions)=>{
    setDatas(values)
    await  PUT(id,values)
    navigate('/hello')
actions.resetForm()
}

const formik = useFormik({
    initialValues: {
      name: "",
      age: "",
      image: "",
    },
    validationSchema: ImageValidation,
    onSubmit: handleEdit,
  });


  return (
<>
<Helmet>
     <title>Edit page</title>
</Helmet>

<Typography> { data.name} Edit</Typography>
{ loading ? <div>loading...</div> : <form onSubmit={formik.handleSubmit}>
    
    <TextField
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    value={formik.values.name}
    placeholder="enter name"
    type="text"
    name="name" />
    <TextField 
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    value={formik.values.age}
    placeholder="enter age"
    type="number"
    name="age"/>
    <TextField
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    value={formik.values.image}
    placeholder="enter image"
    type="url"
    name="image"/>

<Button variant='contained' type='submit'> EDIT</Button>
    </form>}
















</>
  )
}

export default Edit