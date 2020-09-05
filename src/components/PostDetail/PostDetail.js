import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';
import randomImg from '../FakeData/FakeData';
import { Button } from '@material-ui/core';

const PostDetail = () => {
    const {postId} = useParams();
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
        .then(data =>{
            let info = data.map((user, index) => {
                user.img = randomImg[index].img;
                return user;
            })
            setComments(info);
        })
    }, []);



    const {userId, id, title, body} = postDetail;
    return (
        <div>
            <div>
                <Button variant="contained" color="primary">Post ID: {userId}</Button>
                <h3>{title}</h3>
                <p>{body}</p>
            </div>
            {
                comments.map(comment => <Comment 
                    key={comment.id}
                    comment={comment}></Comment>)
            }
        </div>
    );
};

export default PostDetail;