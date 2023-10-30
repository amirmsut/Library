import { useState } from "react";
import { books } from "../constants/data";

// style
import styles from "./BookCard.module.css";
// icon
import { AiFillHeart } from "react-icons/ai";

const BookCard = ({ data, handleLikedList }) => {
    const { title, author, image, language, pages } = data;
    const [like, setLike] = useState(false);

    const likeHandler = () => {
        handleLikedList(data, like);
        setLike((like) => !like);
    };

    return (
        <div className={styles.card}>
            <img src={image} alt={title} />
            <div className={styles.info}>
                <h3>{title}</h3>
                <p>{author}</p>
                <div>
                    <span>{language}</span>
                    <span>{pages} pages</span>
                </div>
                <button onClick={likeHandler}>
                    <AiFillHeart
                        color={like ? "#e7106c" : "#E0E0E0"}
                        fontSize="1.8rem"
                    />
                </button>
            </div>
        </div>
    );
};
export default BookCard;
