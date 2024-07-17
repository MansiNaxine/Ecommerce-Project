import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { store } from '../../State/store';
import { getAllCustomers } from '../../State/Auth/Action';
import { Avatar, Card, CardHeader, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

const Customers=()=>{

    const  navigate=useNavigate();
    const dispatch=useDispatch();
    const {auth}=useSelector(store=>store);

    useEffect(()=>{
        console.log("Customer table use effect");
        dispatch(getAllCustomers(localStorage.getItem("jwt")))
    },[])

    console.log("Customer table")


    return(
       <Card>
        <CardHeader
          title='New Customers'
          sx={{pt:2,alignItems:'center','&.MultiCardHeader-action':{mt:0.6}}}
          action={<Typography onClick={()=>navigate("/admin/customers")} variant='caption'
          sx={{color:"blue",cursor:"pointer",paddingRight:".8rem"}}>View All</Typography>}
          titleTypographyProps={{variant:'h5',sx:{lineHeight: '1.6 !important',lineSpacing: '0.15px !important'}}}
          />
        <TableContainer>
            <Table sx={{minWidth:390}} aria-label='table in dashbaord'>
                <TableHead>
                    <TableRow>
                        <TableCell>Image</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>

                    </TableRow>

                </TableHead>
                <TableBody>
                    {auth.customers.map(item=>(
                        <TableRow hover key={item.name} sx={{'&:last-of-type td,&:last-of-type th': {border:0}}}>
                            <TableCell><Avatar>{item.firstName[0].toUpperCase()}</Avatar></TableCell>
                            <TableCell>
                            {item.firstName} {item.lastName}
                            </TableCell>
                            <TableCell>{item.email}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table> 
        </TableContainer>

       </Card>

    )
}

export default Customers;