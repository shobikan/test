import React from 'react';
import styles from './style/BookFrame.module.css'; // Import the CSS module

function BookFrame({ book }) {
    return (
        <div className={styles.bookFrame}>
            <img className={styles.bookImage} src={book.image} alt={book.title} />
            <div className={styles.bookInfo}>
                <p>{book.title}</p>
                <p>{book.author}</p>
            </div>
            <div className={styles.availabilityStatus}>
                <p>{book.availability}</p>
            </div>
        </div>
    );
}

export default BookFrame;