import { useNavigate } from "react-router-dom";
import useGetUsersDetails from "../hooks/useGetUsersDetail";
import styles from "./styles.module.css";

const LandingPage = () => {
    const { data = {} } = useGetUsersDetails();
    const { users = [] } = data;
    const navigate = useNavigate();

    const handleProfile = (user) => {
        navigate("/profile", { state: { user, users } });
    };

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.header}>Select an account</div>
                {users.map((user) => {
                    return (
                        <div
                            className={styles.details}
                            key={user.id}
                            onClick={() => handleProfile(user)}
                        >
                            <div className={styles.card_item}>
                                <img
                                    src={user.profilepicture}
                                    alt="user-name"
                                    className={styles.user_image}
                                />
                                {user.name}
                            </div>

                            <div className={styles.hr} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
export default LandingPage;
