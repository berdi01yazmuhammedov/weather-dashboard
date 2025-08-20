import React from 'react';
import styles from "./Weekdays.module.scss";
import sunnyWindy from "../../assets/weather-icons/sunny-windy.png";
import rainySunny from "../../assets/weather-icons/rainy-sunny2.png";
export const Weekdays = () => {
    return (
        <>
            <div className={styles.weekdays}>
                <div className={styles.variety}>
                    <button>Today</button>
                    <button>Tomorrow</button>
                    <button>Next 7 days</button>
                </div>
                <div className={styles.days}>
                    <div className={`${styles.day} ${styles.active}`}>
                        <div className={styles.title}>
                            <h3>Monday</h3>
                            <h3>11:45</h3>
                        </div>
                        <div className={styles.degreeInfo}>
                            <div className={styles.degree}>
                                <h2>16°</h2>
                                <img src={sunnyWindy} alt="Sunny Windy icon" />
                            </div>
                            <div className={styles.info}>
                                <div className={styles.conditions}>
                                    <p>Real Feel <span>18°</span></p>
                                    <p>Wind N-E. <span>6-7km/h</span></p>
                                    <p>Pressure <span>100MB</span></p>
                                    <p>Humidity <span>51%</span></p>
                                </div>
                                <div className={styles.suntime}>
                                    <p>Sunrise <span>5:30AM</span></p>
                                    <p>Sunset <span>6:45PM</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.day}>
                        <h3>TUE</h3>
                        <span className={styles.line}></span>
                        <img src={rainySunny} alt="Rainy and Sunny icon" />
                        <h2>10°</h2>
                    </div>
                    <div className={styles.day}>
                        <h3>WED</h3>
                        <span className={styles.line}></span>
                        <img src={rainySunny} alt="Rainy and Sunny icon" />
                        <h2>10°</h2>
                    </div>
                    <div className={styles.day}>
                        <h3>THU</h3>
                        <span className={styles.line}></span>
                        <img src={rainySunny} alt="Rainy and Sunny icon" />
                        <h2>10°</h2>
                    </div>
                    <div className={styles.day}>
                        <h3>FRI</h3>
                        <span className={styles.line}></span>
                        <img src={rainySunny} alt="Rainy and Sunny icon" />
                        <h2>10°</h2>
                    </div>
                    <div className={styles.day}>
                        <h3>SAT</h3>
                        <span className={styles.line}></span>
                        <img src={rainySunny} alt="Rainy and Sunny icon" />
                        <h2>10°</h2>
                    </div>
                    <div className={styles.day}>
                        <h3>SUN</h3>
                        <span className={styles.line}></span>
                        <img src={rainySunny} alt="Rainy and Sunny icon" />
                        <h2>10°</h2>
                    </div>
                </div>
            </div>

        </>
    )
}