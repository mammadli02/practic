import React, { useEffect, useState } from 'react'
import {   GetId } from '../api/request'
import { Card, Typography } from 'antd';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import {  useParams } from 'react-router-dom';
import { Helmet } from "react-helmet";
const Detail = () => {
    const [data, setData]=useState({})
    const {id} =useParams()
useEffect(()=>{
    GetId(id).then((res)=>{
        setData(res)
    })
},[id])

  return ( <>
  <Helmet>
    <title>Detail Page</title>
  </Helmet>
 <Container maxWidth="lg">
   
   <Grid container spacing={2}>
   
   <Grid  key={data.id} item lg={6}>
<Card hoverable
    style={{ width: 240,}}
    cover={<img alt="example" src={data.image}/>}>
 <Typography >{data.name}</Typography>
 <Typography >  {data.age}</Typography>

  </Card>
</Grid>

</Grid>
</Container>
   </>
  )
}
export default Detail