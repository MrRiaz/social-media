import React, { useEffect, useState } from 'react';
import './Comment.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 3,
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: '',
    color: theme.palette.text.secondary,
  },
}));

const Comment = (props) => {
    const {name, email, body, img} = props.comment;
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                {/* <Grid item xs={12}>
                <Paper className={classes.paper}>xs=12</Paper>
                </Grid> */}
                {/* <Grid item xs={6}>
                <Paper className={classes.paper}>
                <div className="comments">
                    <div>
                        <img src={img} alt=""/>
                    </div>
                    <div>
                        <h3>name: {name}</h3>
                        <p>{email}</p>
                        <p>{body}</p>
                    </div>
                </div>
                </Paper>
                </Grid> */}
                {/* <Grid item xs={6}>
                <Paper className={classes.paper}>
                <div className="comments">
                    <div>
                        <img src={img} alt=""/>
                    </div>
                    <div>
                        <h3>name: {name}</h3>
                        <p>{email}</p>
                        <p>{body}</p>
                    </div>
                </div>
                </Paper>
                </Grid> */}
                <Grid item xs={4}>
                <Paper className={classes.paper}>
                <div className="comments">
                    <div>
                        <img src={img} alt=""/>
                    </div>
                    <div>
                        <h3>{name}</h3>
                        <p>{email}</p>
                        <p>{body}</p>
                    </div>
                </div>
                </Paper>
                </Grid>
            </Grid>

            {/* <div>
                <img src={img} alt=""/>
            </div>
            <div>
                <h3>name: {name}</h3>
                <p>{email}</p>
                <p>{body}</p>
            </div> */}
            
        </div>
    );
};

export default Comment;