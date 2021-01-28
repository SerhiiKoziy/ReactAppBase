import { submit } from 'redux-form';

import { EVENT_FORM } from '@configs/forms';

export const validateEventForm = () => submit(EVENT_FORM);
