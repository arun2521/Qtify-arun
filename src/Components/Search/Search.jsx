import React from "react";
import styles from "./Search.module.css";
import { ReactComponent as SearchIcon } from "../../assets/Search icon.svg";

const Search = () => {
  return (
    <div>
      <form className={styles.wrapper}>
        <input className={styles.search} />
        <button className={styles.searchButton} type="submit">
          <SearchIcon />
        </button>
      </form>
    </div>
  );
};

export default Search;
