import { useEffect, useState } from "react";
import axios from "axios";

const useGetUsersDetails = () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    const getUserDetails = async () => {
        try {
            const response = await axios.get(
                "https://panorbit.in/api/users.json"
            );
            setData(response.data);
            setLoading(false);
        } catch (error) {
            console.error(error, "Opps! Somthing went wrong");
            setLoading(false);
        }
    };

    useEffect(() => {
        getUserDetails();
    }, []);

    return {
        data,
        loading,
    };
};
export default useGetUsersDetails;
