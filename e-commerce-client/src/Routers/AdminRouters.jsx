import React from 'react'
import {Route, Routes} from 'react-router-dom'
import AdminPannel from '../Admin/AdminPannel';

const AdminRouters=()=>{
    return(
        <div>
                <Routes>
                    <Route path='/*' element={<AdminPannel/>}>

                    </Route>

                </Routes>
        </div>
    )
}

export default AdminRouters;