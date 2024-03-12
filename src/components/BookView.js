import React from 'react';
import styles from './style/BookView.module.css'; // Import the CSS module

function BookView({ imgSrc, description, borrowedDate }) {
    return (
        <div className={styles.bookView}>
            <div className={styles.bookImg}>
                <img src={imgSrc} alt="Book Cover" />
            </div>

            <div className={styles.bookInfo}>
                <h1>Description</h1>
                <p>{description}</p>
            </div>

            <div className={styles.borrowedInfo}>
                <p>Borrowed {borrowedDate}</p>
            </div>
        </div>
    );
}

export default BookView;