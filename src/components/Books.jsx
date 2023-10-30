import { books } from "../constants/data";
import BookCard from "./BookCard";

const Books = () => {
    return (
        <div>
            {books.map((book) => (
                <BookCard key={book.id} data={book} />
            ))}
        </div>
    );
};
export default Books;
