import React from 'react';

import styles from './TransportationType.module.css';

const transportationType = props => (
  <div className={styles.TransportationType}>
    <button
      onClick={() => props.clicked('ambulatory')}
      className={props.active === 'ambulatory' ? styles.active : null}
    >
      Ambulatory
    </button>
    <button
      onClick={() => props.clicked('wheelChair')}
      className={props.active === 'wheelChair' ? styles.active : null}
    >
      Wheel Chair
    </button>
    <button
      onClick={() => props.clicked('gurney')}
      className={props.active === 'gurney' ? styles.active : null}
    >
      Gurney
    </button>

    {/* <button>Ambulatory</button>
    <button>Wheel Chair</button>
    <button>Gurney</button> */}
  </div>
);

export default transportationType;
