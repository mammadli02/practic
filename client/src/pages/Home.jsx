import React, { useEffect, useState } from 'react'
import { Delete, GETALL } from '../api/request'
import { Card, Typography } from 'antd';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import TextField from '@mui/material/TextField';
import { Helmet } from "react-helmet";
const Home = () => {
    const [datas, setDatas]=useState([])
useEffect(()=>{
    GETALL().then((res)=>{
        setDatas(res)
    })
},[])
function handleSearch(e){
    GETALL(e.target.value).then((res)=>{
        setDatas(res)
    })}
  return ( 
  <>
  <Helmet>
    <title>Home Page</title>
  </Helmet>
 <Container maxWidth="lg">
 
     <Grid container spacing={2}>
 
 <TextField 
   onChange={(e)=> handleSearch(e) }
   id="outlined-basic" label="Search" variant="outlined" />
<Button onClick={()=>{
    let sortedData=[...datas.sort((a,b)=>a.name.localeCompare(b.name))]
    setDatas(sortedData)
}}>
SORTED Name
</Button>
<Button onClick={()=>{
    let sortedDatas=[...datas.sort((a,b)=>a.age-b.age)]
    setDatas(sortedDatas)
}}>
SORTED Age
</Button>

{datas && datas.map((data)=>{
    return(
   <Grid  key={data.id} item lg={3} md={6}  sm={12} style={{marginTop:'200px'}}>
<Card hoverable
    style={{ width: 240,}}
    cover={<img alt="example" src={data.image}/>}>
 <Typography >{data.name}</Typography>
 <Typography >  {data.age}</Typography>
 <Button variant='contained'> <Link to={`/hello/${data._id}`}>VIEW DETAIL</Link></Button>
 <Button variant='contained'> <Link to={`/hello/edit/${data._id}`}>EDIT</Link></Button>
 <Button variant='contained' onClick={()=>{
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
            Delete(data._id).then((res)=>{
                 Swal.fire(
                 `${res.name} Deleted`,
                  'Your file has been deleted.',
                  'success'
                )
            })
            setDatas(datas.filter((x)=>
                x._id!==data._id
            ))  } }) }}> DELETE
</Button>
  </Card>
</Grid>
 )
})}
</Grid>
</Container>
   </>
  )
}
export default Home