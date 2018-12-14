import React from 'react';

import styles from './OneTwoWay.module.css';

const oneTwoWay = props => (
  <div className={styles.OneTwoWay}>
    <button
      onClick={() => props.clicked(1)}
      className={props.active === 1 ? styles.active : null}
    >
      One Way
    </button>
    <button
      onClick={() => props.clicked(2)}
      className={props.active === 2 ? styles.active : null}
    >
      Two Way
    </button>
  </div>
);

export default oneTwoWay;
