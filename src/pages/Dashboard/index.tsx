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
      <div className={styles.contentWr}>
        <div className={styles.animationWr}>
          <div className={styles.leftPart}>
            <div className={styles.logoWr}>
              <img src={'../../assets/images/logo.svg'} alt={'Websites image'}/>
            </div>

            <img className={styles.baseImage} src={'../../assets/images/image1.svg'} alt={'Websites image'}/>
            {/*<img src={'../../assets/images/image2.svg'} />*/}
            {/*<img src={'../../assets/images/image3.svg'} />*/}

          </div>

          <div className={styles.rightPart}>
            <div className={styles.imageWr}>
              <h4>Websites</h4>
              <img className={styles.hoverImage} src={'../../assets/images/image1.svg'} data-image="second-image" alt={'Apps image'}/>
            </div>
            <div className={styles.imageWr}>
              <h4>Apps</h4>
              <img className={styles.hoverImage} src={'../../assets/images/image2.svg'} data-image="second-image" alt={'Apps image'}/>
            </div>
            <div className={styles.imageWr}>
              <h4>Concepts</h4>
              <img className={styles.hoverImage} src={'../../assets/images/image3.jpg'} data-image="second-image" alt={'Apps image'}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
