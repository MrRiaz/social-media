import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';
import randomImg from '../FakeData/FakeData';
import { Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    media: {
        height: 140,
    },
});

const PostDetail = () => {
    const classes = useStyles();

    const { postId } = useParams();
    const [postDetail, setPostDetail] = useState({});
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setPostDetail(data))
    }, []);

    useEffect(() => {
        const cmntUrl = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
        fetch(cmntUrl)
            .then(res => res.json())
            .then(data => {
                let info = data.map((user, index) => {
                    user.img = randomImg[index].img;
                    return user;
                })
                setComments(info);
            })
    }, []);

    const {title, body, userId } = postDetail;

    return (
        <div>
            <div style={{margin : '10px'}}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardContent>
                        <Button variant="contained" color="primary">Post ID: {userId}</Button>
                            <Typography gutterBottom variant="h5" component="h2">
                                <h3>{title}</h3>
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                <p>{body}</p>
                            </Typography>

                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>

            <Grid container spacing={2}>
                {
                    comments.map(comment => <Comment
                        key={comment.id}
                        comment={comment}></Comment>)
                }
            </Grid>
        </div>
    );
};

export default PostDetail;