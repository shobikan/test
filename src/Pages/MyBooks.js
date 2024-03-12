import PersistentDrawerLeft from "../components/PersistentDrawerLeft";
import BookView from "../components/BookView";
import imgSrc from "../resources/book-cover.jpg";
import styles from "./style/MyBooks.module.css"; // Import the CSS module

function MyBooks() {
    return (
        <div className={styles.MyBooks}>
            <PersistentDrawerLeft />

            <div className={styles.content}>
                <h1>My Books</h1>
                <div className={styles.bookViewContainer}>
                    <BookView
                        imgSrc={imgSrc}
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit...Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit...Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
                        borrowedDate="7 days ago"
                    />
                </div>
            </div>

        </div>
    );
}

export default MyBooks;