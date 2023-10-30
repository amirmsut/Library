import React from "react";
import { MdSearch } from "react-icons/md";

// styles
import styles from "./SearchBox.module.css";

const SearchBox = ({ search, setSearch, searchHandler }) => {
    return (
        <div className={styles.search}>
            <input
                type="text"
                placeholder="Search title..."
                value={search}
                onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
            />
            <button onClick={searchHandler}>
                <MdSearch />
            </button>
        </div>
    );
};
export default SearchBox;
