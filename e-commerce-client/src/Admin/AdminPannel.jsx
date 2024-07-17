import {
  Box,
  CssBaseline,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ThemeProvider,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import "./AdminPannel.css";
import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import InboxIcon from "@mui/icons-material/Inbox";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CreateProductForm from "./Components/CreateProductForm";
import Orders from "./Components/OrdersTable";
import ProductsTable from "./Components/ProductsTable";
import Customers from "./Components/Customers";
import { customerTheme, customTheme, darkTheme } from "./Theme/CustomeTheme";
import AdminDashboard from "./Components/Dashboard";
import OrdersTable from "./Components/OrdersTable";

const drawerWidth = 240;

const menu = [
  { name: "Dashboard", path: "/admin" },
  { name: "Products", path: "/admin/products"},
  { name: "Customers", path: "/admin/customers " },
  { name: "Orders", path: "/admin/orders" },
  { name: "Add Products", path: "/admin/product/create" },
];

const AdminPannel = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const [sideBarVisible, setSideBarVisible] = useState(false);
  const navigate = useNavigate();

  const drawer = (
    <Box
      sx={{
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {isLargeScreen && <Toolbar />}
      <List>
        {menu.map((item, index) => (
          <ListItem
            key={item.name}
            disablePadding
            onClick={() => navigate(item.path)}
          >
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <EmailIcon />}
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <List sx={{ position: "absolute", bottom: 0, width: "100%" }}>
        <Divider />
        {["Account", "Request"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <AccountCircleIcon /> : <EmailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const drawerVariant = isLargeScreen ? "permanent" : "temporary";

  // const handleSideBarViewInMobile=()=>{
  //   setSideBarVisible(true);
  // }

  // const handleCloseSideBar=()=>{
  //   setSideBarVisible(false);
  // }

  return (<ThemeProvider theme={darkTheme}> 

<Box sx={{ display: `${isLargeScreen ? "flex" : "block"}` }}>
        <CssBaseline />

        <Drawer
          variant={drawerVariant}
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
              ...(drawerVariant === "temporary" && {
                top: 0,
                [`& .MuiPaper-root.MuiDrawer-paperAnchorTop.MuiDrawer-paperTemporary`]:
                  {
                    position: "fixed",
                    left: 0,
                    right: 0,
                    height: "100%",
                    zIndex: (theme) => theme.zIndex.drawer + 2,
                  },
              }),
            },
          }}
          open={isLargeScreen || sideBarVisible}
          // onClose={handleCloseSideBar}
        >
          {drawer}
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1 }}>
          <Toolbar />
          <Routes>
            <Route path="/" element={ <AdminDashboard />}></Route>
            <Route path="/product/create" element={<CreateProductForm/>}></Route>
            <Route path="/products" element={<ProductsTable/>}></Route>
            <Route path="/orders" element={<OrdersTable/>}></Route>
            <Route path="/customers" element={<Customers/>}></Route>
          </Routes>
         
        </Box>
      </Box>
  </ThemeProvider>);
};

export default AdminPannel;