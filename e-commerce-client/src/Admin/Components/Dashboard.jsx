import { Grid, ThemeProvider } from "@mui/material";
import React from "react";
import AdminPannel from "../AdminPannel";
import Achievememnt from "../Tables/Achievement";
import { customTheme, darkTheme } from "../Theme/CustomeTheme";
import MonthlyOverView from "../Tables/MonthlyOverView";
import OrderTableView from "../Tables/OrdetTableView";
import RecentlyAddeddProducts from "../Tables/RecentlyAddedProduct";
import Customers from "./Customers";
import CustomersTable from "../Tables/CustomersTable";

const AdminDashboard = () => {
  return (
    <div className="adminContainer">
      <ThemeProvider theme={darkTheme}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Achievememnt />
          </Grid>
          <Grid item xs={12} md={8}>
            <MonthlyOverView />
          </Grid>
          <Grid item xs={12} md={6}>
            <OrderTableView />
          </Grid>
          <Grid item xs={12} md={6}>
            <RecentlyAddeddProducts/>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <CustomersTable />
            </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
};

export default AdminDashboard;
