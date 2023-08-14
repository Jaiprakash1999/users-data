import React from "react";
import styles from "../styles.module.css";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Address = ({ currentUser }) => {
    const { address = {} } = currentUser;

    const containerStyle = {
        width: "530px",
        height: "300px",
        borderRadius: "12px",
    };
    const { street, city, suite, zipcode, geo = {} } = address;
    const { lat, lng } = geo;

    // const gurugramCoordinates = {
    //     lat: 28.4595,
    //     lng: 77.0266,
    // };   for testing only:  to see real map. replace formated coordinates to gurugramCoordinates.

    const formatedCoordinates = {
        lat: parseFloat(lat),
        lng: parseFloat(lng),
    };

    return (
        <div>
            <div className={styles.sub_container}>
                <div className={styles.label}>Street</div>
                <div className={styles.colon}>:</div>
                <div className={styles.value}>{street}</div>
            </div>
            <div className={styles.sub_container}>
                <div className={styles.label}>Suite</div>
                <div className={styles.colon}>:</div>
                <div className={styles.value}>{suite}</div>
            </div>
            <div className={styles.sub_container}>
                <div className={styles.label}>City</div>
                <div className={styles.colon}>:</div>
                <div className={styles.value}>{city}</div>
            </div>
            <div className={styles.sub_container}>
                <div className={styles.label}>Zipcode</div>
                <div className={styles.colon}>:</div>
                <div className={styles.value}>{zipcode}</div>
            </div>
            <div className={styles.map_container}>
                <div className={styles.map_style}>
                    <LoadScript googleMapsApiKey="AIzaSyAIAs0_3632DlFctFIelafBsDpc8zQf66g">
                        <GoogleMap
                            mapContainerStyle={containerStyle}
                            center={formatedCoordinates}
                            zoom={1}
                        >
                            <Marker position={formatedCoordinates} />
                        </GoogleMap>
                    </LoadScript>
                </div>
                <div className={styles.coordinates}>
                    <div className={styles.coordinates_label}>Lat :</div>
                    <div className={styles.coordinates_value}>{lat}</div>
                    <div className={styles.gap}></div>
                    <div className={styles.coordinates_label}>Long :</div>
                    <div className={styles.coordinates_value}>{lng}</div>
                </div>
            </div>
        </div>
    );
};

export default Address;
