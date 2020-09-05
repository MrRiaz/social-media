import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Posts from '../Posts/Posts';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

const Home = () => {
    const classes = useStyles();
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            setPosts(data);
        })
    }, [])
    return (
        <div>
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Demo Social Media
                    </Typography>
                    <Button color="inherit"><Link to="/home">Home</Link></Button>
                    <Button color="inherit"><Link to="/">About</Link></Button>
                    <Button color="inherit"><Link to="/home">Contact</Link></Button>
                    </Toolbar>
                </AppBar>
                <h3>Posts: {posts.length}</h3>
                {
                    posts.map(post => <Posts 
                        key = {post.id}
                        post={post}>

                        </Posts>)
                }
            </div>
        </div>
    );
};

export default Home;