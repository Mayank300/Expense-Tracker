import React, { useState, useEffect, useContext } from 'react';
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core';

import useStyles from './styles'; 
import Form from './Form/Form';
import List from './List/List';

const ExpenseTracker = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader title="Expense Tracker" subheader="Made by Mayank" />
      <CardContent>
        <Typography align="center" variant="h5">“Not he who has much is rich, but he who gives much.”
</Typography>

        {/* <Typography variant="subtitle1" style={{ lineHeight: '1.5em', marginTop: '20px' }}>
          <InfoCard />
          Try Saying: Add Income for ₹1000 in Category Salary for Monday...
        </Typography> */}

        <Divider className={classes.divider} />
        <Form />
      </CardContent>
      <CardContent className={classes.cardContent}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <List />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ExpenseTracker;
