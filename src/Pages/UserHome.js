import React from 'react';
import BookFrame from "../components/BookFrame";
import PersistentDrawerLeft from "../components/PersistentDrawerLeft";
import imgSrc from "../resources/book-cover.jpg";
import styles from './style/userHomeStyle.module.css'; // Import the CSS module

function UserHome() {
    return (
        <div className={styles.home}>
            <PersistentDrawerLeft>
                <div className={styles.userHome}>
                    <h1>Hi Mihunan, Welcome to Library Management system</h1>

                    <div className={styles.bookFrameItem}>
                        <div className={styles.bookFrame}>
                            <BookFrame book={{
                                title: "The Great Gatsby",
                                author: "F. Scott Fitzgerald",
                                availability: "Available",
                                image: imgSrc
                            }} />
                        </div>

                        <div className={styles.bookFrame}>
                            <BookFrame book={{
                                title: "The Great Gatsby",
                                author: "F. Scott Fitzgerald",
                                availability: "Available",
                                image: imgSrc
                            }} />
                        </div>

                        <div className={styles.bookFrame}>
                            <BookFrame book={{
                                title: "The Great Gatsby",
                                author: "F. Scott Fitzgerald",
                                availability: "Available",
                                image: imgSrc
                            }} />
                        </div>

                        <div className={styles.bookFrame}>
                            <BookFrame book={{
                                title: "The Great Gatsby",
                                author: "F. Scott Fitzgerald",
                                availability: "Available",
                                image: imgSrc
                            }} />
                        </div>

                        <div className={styles.bookFrame}>
                            <BookFrame book={{
                                title: "The Great Gatsby",
                                author: "F. Scott Fitzgerald",
                                availability: "Available",
                                image: imgSrc
                            }} />
                        </div>

                        <div className={styles.bookFrame}>
                            <BookFrame book={{
                                title: "The Great Gatsby",
                                author: "F. Scott Fitzgerald",
                                availability: "Available",
                                image: imgSrc
                            }} />
                        </div>

                        <div className={styles.bookFrame}>
                            <BookFrame book={{
                                title: "The Great Gatsby",
                                author: "F. Scott Fitzgerald",
                                availability: "Available",
                                image: imgSrc
                            }} />
                        </div>

                        <div className={styles.bookFrame}>
                            <BookFrame book={{
                                title: "The Great Gatsby",
                                author: "F. Scott Fitzgerald",
                                availability: "Available",
                                image: imgSrc
                            }} />
                        </div>

                        <div className={styles.bookFrame}>
                            <BookFrame book={{
                                title: "The Great Gatsby",
                                author: "F. Scott Fitzgerald",
                                availability: "Available",
                                image: imgSrc
                            }} />
                        </div>

                        <div className={styles.bookFrame}>
                            <BookFrame book={{
                                title: "The Great Gatsby",
                                author: "F. Scott Fitzgerald",
                                availability: "Available",
                                image: imgSrc
                            }} />
                        </div>

                        <div className={styles.bookFrame}>
                            <BookFrame book={{
                                title: "The Great Gatsby",
                                author: "F. Scott Fitzgerald",
                                availability: "Available",
                                image: imgSrc
                            }} />
                        </div>
                    </div>
                </div>
            </PersistentDrawerLeft>
        </div>
    );
}

export default UserHome;
