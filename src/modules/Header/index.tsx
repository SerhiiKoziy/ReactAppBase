import React, { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getUserMeta } from '@store/user/selectors';

import { Button } from '@components/Button';
import { Modal } from '@components/Modal';
import { Input } from '@components/Input';

import styles from './styles.module.scss';

const Header = () => {
  const [openAuthModal, setOpenAuthModal] = useState<boolean>(false)
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

      <Button variant="outlined" onClick={() => setOpenAuthModal(true)}>
        Log In
      </Button>

      <Modal
        className={styles.authModal}
        title="Auth modal"
        confirmButtonLabel="Login"
        onConfirm={() => setOpenAuthModal(false)}
        onCancel={() => setOpenAuthModal(false)}
        open={openAuthModal}
      >
        <div>
          <Input />
        </div>
      </Modal>
    </header>
  );
};

export default Header;
