import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const ChangeUserAccountModal = ({
    currentUser = {},
    users = [],
    handleDropDownClick = () => {},
}) => {
    const navigate = useNavigate();
    const { id, name, email, profilepicture } = currentUser;

    return (
        <div className={styles.dropdown}>
            <div className={styles.img_container}>
                <img
                    src={profilepicture}
                    alt="login_user_profile"
                    className={styles.image}
                />
                <div>{name}</div>
                <div className={styles.email_text}>{email}</div>
            </div>
            <div className={styles.rest_users}>
                {users.map((user) => {
                    const { name, id: itemUserId, profilepicture } = user || {};
                    return (
                        <div id="user.id">
                            {id === itemUserId ? null : (
                                <div>
                                    <div className={styles.bottom_border} />
                                    <div
                                        className={styles.profile}
                                        onClick={() =>
                                            handleDropDownClick(user)
                                        }
                                    >
                                        <img
                                            src={profilepicture}
                                            alt="user_profile"
                                            className={styles.picture}
                                        />

                                        {name}
                                    </div>
                                </div>
                            )}
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
