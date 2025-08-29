import React from "react";
import styles from "./SearchError.module.scss";
interface SearchErrorProps {
  lastFailedQuery: string;
}
export const SearchError: React.FC<SearchErrorProps> = ({ lastFailedQuery }) => {
  return (
    <div className={styles.searchError}>
      There is no such city as "<span>{lastFailedQuery}</span>". <p>Fight me</p>
    </div>
  );
};
