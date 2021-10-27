import React, { FC } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';

import styles from './index.less';

const BasicLayout: FC = ({ children }) => {
  console.log('basic layout loading');
  return (
    <div className={styles['basic-layout']}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default BasicLayout;
