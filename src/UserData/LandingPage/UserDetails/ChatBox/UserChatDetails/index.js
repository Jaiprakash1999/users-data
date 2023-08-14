import { useState } from "react";
import styles from "./styles.module.css";

const UserChatDetails = ({
    user = {},
    setUserChat = () => {},
    messageList = [],
    setMessageList = () => {},
}) => {
    const { name, profilepicture } = user;
    const [inputMessage, setInputMessage] = useState("");
    const handleAddItem = () => {
        setMessageList([...messageList, inputMessage]);
        setInputMessage("");
    };
    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            handleAddItem();
        }
    };
    const isValidInput = inputMessage.trim() === "";

    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <div className={styles.header_text}>
                    <img
                        src={profilepicture}
                        alt="user-name"
                        className={styles.user_image}
                    />
                    <div className={styles.text}>{name}</div>
                </div>
                <div className={styles.arrow_icon}>
                    <div onClick={() => setUserChat(false)}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            fill="currentColor"
                            class="bi bi-x"
                            viewBox="0 0 16 16"
                        >
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />{" "}
                        </svg>
                    </div>
                    <div onClick={() => setUserChat(false)}>
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
            </div>

            {messageList.map((item) => {
                return <div className={styles.type_message}>{item}</div>;
            })}
            <div className={styles.chat_message_container}>
                <form>
                    <input
                        className={styles.input_text}
                        type="text"
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                </form>
                <button
                    className={styles.button}
                    type="submit"
                    onClick={handleAddItem}
                    disabled={isValidInput}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="#0d80f2"
                        class="bi bi-cursor-fill"
                        viewBox="0 0 16 16"
                    >
                        <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z" />{" "}
                    </svg>
                </button>
            </div>
        </div>
    );
};
export default UserChatDetails;
