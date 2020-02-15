import React from 'react';
import classes from './Profile.module.css';

const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img src="https://ps.w.org/360-image/assets/banner-772x250.jpg?rev=1933038" />
            </div>
            <div>
                avatar + description
        </div>
            <div>
                My Post
          <div>
                    New Post
        </div>
            </div>
            <div>
                <div>
                    Post 1
        </div>
                <div>
                    Post 2
        </div>
            </div>
        </div>
    );
}

export default Profile;