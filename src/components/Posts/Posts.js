import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {useHistory } from 'react-router-dom';
import { Link } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

const Posts = (props) => {
    console.log(props)
    const classes = useStyles();
    const { title, body, id} = props.post;

    const history = useHistory();
    const handleClick = (postId) => {
        history.push(`/posts/${postId}`)
    }

    return (
        <div>
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                    <Button variant="contained" color="primary">Post No. {id}</Button>
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                    {title}
                    </Typography>
                    <Typography variant="body2" component="p">
                    {body}
                    <br />
                    </Typography>
                </CardContent>
                <CardActions>
                   <Button variant="contained"  size="small" onClick={() => handleClick(id)}>Learn More</Button>
                   {/* <Link to={`/posts/${id}`}>
                       Learn More
                   </Link> */}
                </CardActions>
            </Card>
        </div>
    );
};

export default Posts;