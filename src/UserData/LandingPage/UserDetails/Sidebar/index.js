import React from "react";
import styles from "../styles.module.css";

const Sidebar = ({ showDetails = "", setShowDetails = () => {} }) => {
    return (
        <ul type="none" className={styles.side_navigation}>
            <li
                onClick={() => setShowDetails("Profile")}
                className={
                    showDetails === "Profile" ? styles.active_text : styles.text
                }
            >
                Profile
                <div className={styles.bottom_border} />
            </li>
            <li
                onClick={() => {
                    setShowDetails("Posts");
                }}
                className={
                    showDetails === "Posts" ? styles.active_text : styles.text
                }
            >
                Post
                <div className={styles.bottom_border} />
            </li>
            <li
                onClick={() => setShowDetails("Gallery")}
                className={
                    showDetails === "Gallery" ? styles.active_text : styles.text
                }
            >
                Gallary
                <div className={styles.bottom_border} />
            </li>
            <li
                onClick={() => setShowDetails("ToDo")}
                className={
                    showDetails === "ToDo" ? styles.active_text : styles.text
                }
            >
                ToDo
                <div className={styles.to_do_border} />
            </li>
        </ul>
    );
};

export default Sidebar;
