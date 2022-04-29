import React from 'react';
import styles from './Layout.module.css';
import MainNavigation from './MainNavigation';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <MainNavigation
        home="Home"
        search="Search"
        browse="Browse"
        addlisting="Add Listing"
      />
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Layout;
