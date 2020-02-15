import React from 'react';
import classes from './MyPosts.module.css';
import Post from './MyPosts/Posts/Post'

const MyPosts = () => {
    return (
        <div>
            My Posts
            <div>
                <textarea></textarea>
                <button>Add</button>
                <button>Remove</button>
            </div>
            <Post message="Hi! I'm fine, thank you" />
            <Post message='Hello! How are you?' />
        </div>
    );
}

export default MyPosts;