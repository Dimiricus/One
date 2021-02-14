import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
      <div className={s.profileContent}>
        <div>
          <img src="./img/forest-bathing.jpg" />
        </div>
        <div className={s.avaDescription}>
          ava + description
        </div>
      </div>
    );
}

export default ProfileInfo;