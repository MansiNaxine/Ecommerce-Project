import { Grid, Link,Typography } from "@mui/material";
import React from "react";
import { Button } from "@mui/material";

const Footer = () => {
  return (
    <div>
      <Grid
        className="bg-black text-white text-center mt-10"
        container
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6" gutterBottom>
            Company
          </Typography>
          <div>
            <Typography variant="body5" component="p" gutterBottom>
              About
            </Typography>
          </div>
          <div>
            <Typography variant="body5" component="p" gutterBottom>
              Blog
            </Typography>
          </div>
          <div>
            <Typography variant="body5" component="p" gutterBottom>
              Press
            </Typography>
          </div>
          <div>
            <Typography variant="body5" component="p" gutterBottom>
              Jobs
            </Typography>
          </div>
          <div>
            <Typography variant="body5" component="p" gutterBottom>
              Partners
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6" gutterBottom>
            Solutions
          </Typography>
          <div>
            <Typography variant="body5" component="p" gutterBottom>
              Marketing
            </Typography>
          </div>
          <div>
            <Typography variant="body5" component="p" gutterBottomn>
              Analytics
            </Typography>
          </div>
          <div>
            <Typography variant="body5" component="p" gutterBottom>
              Commerce
            </Typography>
          </div>
          <div>
            <Typography variant="body5" component="p" gutterBottom>
              Insights
            </Typography>
          </div>
          <div>
            <Typography variant="body5" component="p" gutterBottom>
              Support
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6" gutterBottom>
            Documentation
          </Typography>
          <div>
            <Typography variant="body5" component="p" gutterBottom>
              Guides
            </Typography>
          </div>
          <div>
            <Typography variant="body5" component="p" gutterBottom>
              API Status
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6" gutterBottom>
            Legal
          </Typography>
          <div>
            <Typography variant="body5" component="p" gutterBottom>
              Claim
            </Typography>
          </div>
          <div>
            <Typography variant="body5" component="p" gutterBottom>
              Privacy
            </Typography>
          </div>
          <div>
            <Typography variant="body5" component="p" gutterBottom>
              Terms
            </Typography>
          </div>
        </Grid>
        <Grid className='pt-20' item xs={12} >
        <Typography variant="body2" component="p" align="center">
          &copy; 2023 My Company. All rights reserved.
        </Typography>
        <Typography variant="body2" component="p" align="center">
          Made with love by Me.
        </Typography>
        <Typography variant="body2" component="p" align="center">
          Icons made by{' '}
          <Link href="https://www.freepik.com" color="inherit" underline="always">
            Freepik
          </Link>{' '}
          from{' '}
          <Link href="https://www.flaticon.com/" color="inherit" underline="always">
            www.flaticon.com
          </Link>
        </Typography>
      </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
