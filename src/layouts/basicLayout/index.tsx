import React from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';

import styles from './index.less';

export default function (props) {
  return (
    <div className={styles['basic-layout']}>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}
