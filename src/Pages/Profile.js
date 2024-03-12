import React, { useState, useEffect } from 'react';
import { FaEdit } from 'react-icons/fa';
import PersistentDrawerLeft from '../components/PersistentDrawerLeft';
import styles from './style/Profile.module.css';
import '../Pages/style/Profile.module.css';

function Profile() {
    const [formData, setFormData] = useState({
        field1: 'Yasothan R.',
        field2: '214240E',
        field3: 'yasothanr.21@uom.lk',
        field4: '+94 766 267 577',
        picture: null
    });

    useEffect(() => {
        // Fetch data from the backend and populate the formData state
        fetchDataFromBackend();
    }, []);

    const fetchDataFromBackend = async () => {
        try {
            // Make a fetch request to your backend API to get the user profile data
            const response = await fetch('your_backend_endpoint');
            if (response.ok) {
                const data = await response.json();
                // Populate formData state with the fetched data
                setFormData(data);
            } else {
                console.error('Failed to fetch data from the backend');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handlePictureChange = (e) => {
        setFormData({
            ...formData,
            picture: e.target.files[0]
        });
    };

    const handleSave = () => {
        // Perform save action with formData
        console.log(formData);
    };

    const handleCancel = () => {
        // Perform cancel action
        console.log("Cancelled");
    };

    return (
        <div>
            <PersistentDrawerLeft />

            <div className={styles.content}>
                <h1>Profile</h1>
                <br />
                <div className={styles.inputContainer}>
                    <input
                        type="text"
                        name="field1"
                        value={formData.field1}
                        onChange={handleInputChange}
                        disabled
                    />
                    {/* <FaEdit className={styles.editIcon} /> */}
                </div>
                <div className={styles.inputContainer}>
                    <input
                        type="text"
                        name="field2"
                        value={formData.field2}
                        onChange={handleInputChange}
                        disabled
                    />
                    {/* <FaEdit className={styles.editIcon} /> */}
                </div>
                <div className={styles.inputContainer}>
                    <input
                        type="text"
                        name="field3"
                        value={formData.field3}
                        onChange={handleInputChange}
                    />
                    <FaEdit className={styles.editIcon} />
                </div>
                <div className={styles.inputContainer}>
                    <input
                        type="text"
                        name="field4"
                        value={formData.field4}
                        onChange={handleInputChange}
                    />
                    <FaEdit className={styles.editIcon} />
                </div>
                {/* <label style={{ color: 'black'}}>
                    Picture
                </label> */}
                <div className={styles.imageContainer}>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handlePictureChange}
                    />
                </div>
                <div className={styles.buttonContainer}>
                    <button className={styles.savebutton} onClick={handleSave}>Save</button>
                    <button className={styles.cancelbutton} onClick={handleCancel}>Cancel</button>
                </div>
            </div>
        </div>
    );
}

export default Profile;
