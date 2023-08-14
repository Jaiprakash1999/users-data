import { useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./styles.module.css";
import ProfileDetails from "./ProfileDetails";
import OtherDetails from "./OtherDetails";
import ChangeUserAccountModal from "./ChangeUserAccountModal";
import ChatBox from "./ChatBox";
import UserChatDetails from "./ChatBox/UserChatDetails";
import Sidebar from "./Sidebar";

const UserDetails = () => {
    const location = useLocation();
    const { state = {} } = location || {};
    const { user = {}, users = [] } = state;
    const [currentUser, setCurrentUser] = useState(user);
    const [showDropDownData, setShowDropDownData] = useState(false);
    const [showDetails, setShowDetails] = useState("Profile");
    const [isChatboxActive, setIsChatboxActive] = useState(false);
    const [userChat, setUserChat] = useState(false);
    const [userChatDetails, setUserChatDetails] = useState({});
    const [messageList, setMessageList] = useState([]);

    const handleDropDownClick = (user) => {
        setCurrentUser(user);
        setShowDropDownData(false);
    };

    return (
        <div className={styles.profile_container}>
            <div className={styles.sub_container}>
                <div className={styles.navbar}>
                    <Sidebar
                        showDetails={showDetails}
                        setShowDetails={setShowDetails}
                    />
                </div>
                <div className={styles.right_side_container}>
                    <div className={styles.header_detail}>
                        <h3> {showDetails} </h3>
                        <div
                            className={styles.profile}
                            onClick={() =>
                                setShowDropDownData(!showDropDownData)
                            }
                        >
                            <img
                                src={currentUser?.profilepicture}
                                alt="profile"
                                className={styles.picture}
                            />

                            {currentUser?.name}
                        </div>
                    </div>
                    <div className={styles.hr} />
                    {showDropDownData ? (
                        <div className={styles.popover}>
                            <ChangeUserAccountModal
                                currentUser={currentUser}
                                users={location.state.users}
                                handleDropDownClick={handleDropDownClick}
                            />
                        </div>
                    ) : null}
                    {showDetails === "Profile" ? (
                        <ProfileDetails currentUser={currentUser} />
                    ) : (
                        <OtherDetails />
                    )}
                    <div
                        className={
                            isChatboxActive
                                ? styles.active_accordian_style
                                : styles.accordian_style
                        }
                    >
                        <ChatBox
                            users={users}
                            isChatboxActive={isChatboxActive}
                            setIsChatboxActive={setIsChatboxActive}
                            setUserChat={setUserChat}
                            setUserChatDetails={setUserChatDetails}
                            setMessageList={setMessageList}
                        />
                    </div>
                    {userChat ? (
                        <div className={styles.user_chats}>
                            <UserChatDetails
                                user={userChatDetails}
                                setUserChat={setUserChat}
                                messageList={messageList}
                                setMessageList={setMessageList}
                            />
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
};
export default UserDetails;
