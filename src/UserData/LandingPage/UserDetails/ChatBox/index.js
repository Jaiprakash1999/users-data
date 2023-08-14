import styles from "./styles.module.css";

const ChatBox = ({
    users = [],
    isChatboxActive,
    setIsChatboxActive = () => {},
    setUserChatDetails = () => {},
    setUserChat = () => {},
    setMessageList = () => {},
}) => {
    const handleUserChat = (user) => {
        setUserChat(true);
        setUserChatDetails(user);
        setMessageList([]);
    };

    return (
        <div className={styles.card}>
            <div
                className={styles.header}
                onClick={() => {
                    setIsChatboxActive((prev) => !prev);
                    setUserChat(false);
                }}
            >
                <div className={styles.header_text}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-chat-right-fill"
                        viewBox="0 0 16 16"
                    >
                        <path d="M14 0a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z" />
                    </svg>
                    <div className={styles.text}>Chats</div>
                </div>
                <div
                    className={isChatboxActive ? styles.arrow_icon : undefined}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-chevron-up"
                        viewBox="0 0 16 16"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                        />
                    </svg>
                </div>
            </div>
            {users.map((user) => {
                return (
                    <div
                        className={styles.details}
                        key={user.id}
                        onClick={() => handleUserChat(user)}
                    >
                        <div className={styles.card_item}>
                            <div className={styles.item}>
                                <img
                                    src={user.profilepicture}
                                    alt="user-name"
                                    className={styles.user_image}
                                />
                                {user.name}
                            </div>
                            <div className={styles.active_user} />
                        </div>
                        <div className={styles.hr} />
                    </div>
                );
            })}
        </div>
    );
};
export default ChatBox;
