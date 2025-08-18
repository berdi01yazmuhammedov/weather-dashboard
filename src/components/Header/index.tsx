import React, { useState } from 'react';
import styles from "./Header.module.scss";
import profilePhoto from "../../assets/profile.jpg";
import searchSVG from "../../assets/search.svg";
interface HeaderProps {
  searchValue: string;
  setSearchValue: (value: string) => void;
}
export const Header = ({ searchValue, setSearchValue }: HeaderProps) => {

  const onChangeThemeClick = () => {
    document.body.classList.toggle('dark-theme');
  }
  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  }
  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchValue(searchValue);
  }
  return (
    <div className={styles.header}>
      <h2 className={styles.cityName}>Saint-Petersburg</h2>
      <form onSubmit={onSubmitForm}>
        <div className={styles.search}>
          <input value={searchValue} onChange={onSearchChange} type="text" placeholder='Search city...' />
          <button type='submit'>
            <img src={searchSVG} alt="Search icon" />
          </button>
        </div>
      </form>
      <button className={styles.changeThemeButton} type='button' onClick={onChangeThemeClick}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_2_52)">
          <path d="M12.3 22H12.2C10.8285 21.9895 9.4729 21.7056 8.21254 21.1647C6.95219 20.6238 5.81242 19.8369 4.85998 18.85C3.09382 16.9613 2.08986 14.4853 2.04184 11.8999C1.99383 9.31452 2.90517 6.80298 4.59998 4.84999C5.69186 3.62633 7.06451 2.68607 8.59998 2.10999C8.77914 2.04104 8.97436 2.02513 9.16232 2.06414C9.35029 2.10315 9.52305 2.19544 9.65998 2.32999C9.78679 2.45931 9.87611 2.62065 9.91838 2.79677C9.96065 2.9729 9.95429 3.15719 9.89998 3.32999C9.35193 4.83092 9.24335 6.45703 9.58698 8.01751C9.9306 9.57798 10.7122 11.0081 11.84 12.14C12.9783 13.2643 14.4118 14.0433 15.9745 14.3866C17.5372 14.7299 19.1652 14.6236 20.67 14.08C20.8491 14.0169 21.0424 14.0062 21.2274 14.049C21.4124 14.0918 21.5814 14.1864 21.7146 14.3217C21.8478 14.457 21.9398 14.6274 21.9797 14.8131C22.0196 14.9987 22.0058 15.1919 21.94 15.37C21.4291 16.7337 20.6311 17.9717 19.6 19C18.6408 19.9563 17.5021 20.7136 16.2494 21.2285C14.9966 21.7433 13.6544 22.0055 12.3 22ZM7.45998 4.91999C6.95765 5.27228 6.49791 5.68169 6.08998 6.13999C4.71451 7.71612 3.9734 9.74691 4.01035 11.8385C4.0473 13.9301 4.8597 15.9334 6.28998 17.46C7.0585 18.2582 7.97924 18.8942 8.99777 19.3305C10.0163 19.7667 11.112 19.9944 12.22 20H12.3C13.6262 19.9992 14.9331 19.6822 16.1122 19.0753C17.2914 18.4683 18.3088 17.5889 19.08 16.51C17.5083 16.7136 15.9109 16.5544 14.4104 16.0444C12.9099 15.5344 11.5463 14.6873 10.4242 13.5681C9.30214 12.449 8.45151 11.0875 7.93766 9.58834C7.4238 8.08916 7.26039 6.49216 7.45998 4.91999Z" fill="#1E1E1E" />
        </g>
        <defs>
          <clipPath id="clip0_2_52">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg></button>
      <div className={styles.profile}><img width={100} src={profilePhoto} alt="Profile" /></div>
    </div>
  )
}