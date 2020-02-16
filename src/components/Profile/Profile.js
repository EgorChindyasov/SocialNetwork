import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts';

const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img src="https://ps.w.org/360-image/assets/banner-772x250.jpg?rev=1933038" />
            </div>
            <MyPosts />

        </div>
    );
}

export default Profile;