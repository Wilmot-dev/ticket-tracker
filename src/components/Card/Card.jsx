import React, { useState } from 'react';
import styles from './Card.module.scss';

const Card = (props) => {
  const { name, role } = props;
  let [count, setCount] = useState(0);
  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    if (count === 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };


return (
  <div className={styles.mainCard}>
    <p className={styles.name}>{name}</p>
    <p className={styles.role}>{role}</p>
    <div className={styles.counterCard}>
      <p>Counter</p>
      <p>{count}</p>
      <button onClick={decrease} className={styles.btn}>-</button>
      <button onClick={increase} className={styles.btn}>+</button>
    </div>
  </div>
)
};

export default Card;