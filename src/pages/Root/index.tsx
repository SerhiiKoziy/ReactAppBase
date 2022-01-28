import React, { useEffect, useState, ReactNode } from 'react';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';

import Header from '@modules/Header';
import Footer from '@modules/Footer';

import { fetchUserAction } from '@store/user/actionCreators';

import Dashboard from '../Dashboard';

import styles from './styles.module.scss';

interface IRootProps {
  children?: ReactNode;
}

const Root = ({ children }: IRootProps) => {
  const [openAuth, setOpenAuth] = useState<boolean>(false);
  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch(fetchUserAction());
    },
    [dispatch],
  );

  return (
    <div className={styles.root}>
      <Header />

      <div
        className={
          classNames(
            styles.authWr,
            {
              [styles.open]: openAuth,
              [styles.close]: !openAuth,
            },
          )
        }
      >
      </div>

      <div className={styles.routeWr}>
        {children}

        <Dashboard />
      </div>

      <Footer />
    </div>
  );
};

export default Root
