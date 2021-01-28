import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import styles from './styles.module.scss';

const Dashboard = () => {
  const dispatch = useDispatch();

  const onDeleteEvent = useCallback(
    (eventId: string): void => {
      // dispatch(deleteEvent(eventId));
    },
    [dispatch],
  );

  return (
    <div className={styles.dashboardWrapper}>
    </div>
  );
};

export default Dashboard;
