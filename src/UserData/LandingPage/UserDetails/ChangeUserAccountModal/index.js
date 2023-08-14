import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const ChangeUserAccountModal = ({
    currentUser = {},
    users = [],
    handleDropDownClick = () => {},
}) => {
    const navigate = useNavigate();

    return (
        <div className={styles.dropdown}>
            <div className={styles.img_container}>
                <img
                    src={currentUser.profilepicture}
                    alt="login_user_profile"
                    className={styles.image}
                />
                <div>{currentUser.name}</div>
                <div className={styles.email_text}>{currentUser.email}</div>
            </div>
            <div className={styles.rest_users}>
                {users.map((user) => {
                    return (
                        <div id="user.id">
                            <div className={styles.bottom_border} />
                            <div
                                className={styles.profile}
                                onClick={() => handleDropDownClick(user)}
                            >
                                <img
                                    src={user.profilepicture}
                                    alt="user_profile"
                                    className={styles.picture}
                                />

                                {user.name}
                            </div>
                        </div>
                    );
                })}
                <div className={styles.button_container}>
                    <button
                        onClick={() => navigate("/")}
                        className={styles.sign_out_button}
                    >
                        Sign Out
                    </button>
                </div>
            </div>
        </div>
    );
};
export default ChangeUserAccountModal;
