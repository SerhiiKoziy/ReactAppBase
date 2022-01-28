import React from 'react';
import clsx from 'clsx';

import Dialog, { DialogProps } from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { Button } from '../Button';
import { Icon } from '../Icon';

import styles from './styles.module.scss';

interface IModalAdditionalAction {
  label: string
  onClick: () => void
  cypressId: string
}

interface IModalProps extends DialogProps {
  title?: string
  confirmButtonLabel?: string
  cancelButtonLabel?: string
  confirmationDisabled?: boolean
  onConfirm: () => void
  onCancel: () => void
  leftSideComponent?: React.ReactNode
  additionalActions?: IModalAdditionalAction[]
  locked?: boolean
}

export const Modal: React.FC<IModalProps> = (props) => {
  const {
    className,
    open,
    title,
    confirmButtonLabel,
    cancelButtonLabel,
    confirmationDisabled,
    onConfirm,
    onCancel,
    children,
    leftSideComponent,
    additionalActions,
    ...rest
  } = props

  const onClose = () => {
    onCancel()
  }

  return (
    <Dialog
      open={open}
      onClose={onClose}
      className={clsx(styles.modal, className)}
      { ...rest }
    >
      <div className={styles['modal__content']}>
        {leftSideComponent && (
          <div className={styles['modal__content-left']}>
            { leftSideComponent }
          </div>
        )}

        <div className={styles['modal__content-center']}>
          {title && (
            <DialogTitle disableTypography>
              { title }
              <Button
                onClick={onCancel}
                variant="text"
              >
                <Icon icon={faTimes} />
              </Button>
            </DialogTitle>
          )}

          <DialogContent>{ children }</DialogContent>

          <DialogActions>
            {additionalActions && additionalActions.map((action, index) => (
              <Button
                variant="outlined"
                key={index}
                onClick={action.onClick}
              >
                { action.label }
              </Button>
            ))}

            {additionalActions && <div className={styles['modal__spacer']} />}

            <Button
              variant="outlined"
              onClick={onCancel}
            >
              { cancelButtonLabel ?? 'Cancel' }
            </Button>

            <Button
              className="modal__confirm-button"
              onClick={onConfirm}
              disabled={confirmationDisabled}
            >
              {confirmButtonLabel ?? 'Confirm'}
            </Button>
          </DialogActions>
        </div>
      </div>
    </Dialog>
  )
}
