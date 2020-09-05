import React, { useEffect, useState } from 'react';
import './Comment.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
                <Grid md={3} sm={12} >
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
        </div>
    );
};

export default Comment;