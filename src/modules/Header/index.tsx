import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import { getUserMeta } from '@store/user/selectors';

import styles from './styles.module.scss';


const Header = () => {
  const userMeta = useSelector(getUserMeta);

  const preparedTitle = useMemo(
    () => {
      return (userMeta?.displayName) || 'User';
    },
    [userMeta],
  );

  return (
    <header className={styles.header}>
      <Link to="/profile">
        <span>Hello!  Dear, { preparedTitle }</span>
      </Link>
    </header>
  );
};

export default Header
