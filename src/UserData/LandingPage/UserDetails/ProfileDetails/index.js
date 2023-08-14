import ProfileInfo from "./ProfileInfo";
import Address from "./Address";
import styles from "./styles.module.css";

const ProfileDetails = ({ currentUser = {} }) => {
    return (
        <div className={styles.container}>
            <div className={styles.left_container}>
                <ProfileInfo currentUser={currentUser} />
            </div>

            <div className={styles.divider_line} />

            <div className={styles.right_container}>
                Address:
                <Address currentUser={currentUser} />
            </div>
        </div>
    );
};
export default ProfileDetails;
