import React from "react";
import styles from "../styles.module.css";

const ProfileInfo = ({ currentUser = {} }) => {
    const {
        profilepicture,
        name,
        username,
        email,
        phone,
        website,
        company = {},
    } = currentUser;

    const { name: companyName, catchPhrase, bs } = company;
    return (
        <div>
            <div className={styles.value}>
                <img
                    src={profilepicture}
                    alt="profile"
                    className={styles.profile_picture}
                />
            </div>
            <div className={styles.value}>{name}</div>
            <div className={styles.sub_container}>
                <div className={styles.label}>Username</div>
                <div className={styles.colon}>:</div>
                <div className={styles.value}>{username}</div>
            </div>
            <div className={styles.sub_container}>
                <div className={styles.label}>e-mail</div>
                <div className={styles.colon}>:</div>
                <div className={styles.value}>{email}</div>
            </div>
            <div className={styles.sub_container}>
                <div className={styles.label}>Phone</div>
                <div className={styles.colon}>:</div>
                <div className={styles.value}>{phone}</div>
            </div>
            <div className={styles.sub_container}>
                <div className={styles.label}>Website</div>
                <div className={styles.colon}>:</div>
                <div className={styles.value}>{website}</div>
            </div>
            <div className={styles.bottom_border} />
            <div className={styles.label}>Company</div>
            <div className={styles.sub_container}>
                <div className={styles.label}>Name</div>
                <div className={styles.colon}>:</div>
                <div className={styles.value}>{companyName}</div>
            </div>
            <div className={styles.sub_container}>
                <div className={styles.label}>catchPhrase</div>
                <div className={styles.colon}>:</div>
                <div className={styles.value}>{catchPhrase}</div>
            </div>
            <div className={styles.sub_container}>
                <div className={styles.label}>bs</div>
                <div className={styles.colon}>:</div>
                <div className={styles.value}>{bs}</div>
            </div>
        </div>
    );
};

export default ProfileInfo;
