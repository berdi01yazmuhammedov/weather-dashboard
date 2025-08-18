import React from 'react';
import styles from "./Weekdays.module.scss";

export const Weekdays = () => {
    return (
        <>
            <div className={styles.weekdays}>
                <div className={styles.variety}>
                    <button>Today</button>
                    <button>Tomorrow</button>
                    <button>Next 7 days</button>
                </div>
            </div>

        </>
    )
}