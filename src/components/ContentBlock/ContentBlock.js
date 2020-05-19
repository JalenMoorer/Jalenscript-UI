import React from 'react';
import styles from './ContentBlock.scss';

const ContentBlock = ({id, data}) => (
    <div className={styles.contentCard}>
        <div className={styles.eyebrow}>{data.eyebrow}</div>
        <h2 id={id} className={styles.contentHeading}>{data.contentHeading}</h2>
        <div className={styles.contentHr}></div>
        <p className={styles.contentCopy}>{data.contentCopy}</p>
  </div>
);

export default ContentBlock;