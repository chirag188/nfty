/* eslint-disable import/prefer-default-export */
import { all, takeLatest } from 'redux-saga/effects';
import * as actionLabels from '../actionLabels';
import { loginSaga, authenticationValidatorSaga } from './auth/auth';

export function* watchAuthentication() {
  yield all([
    takeLatest(actionLabels.LOGIN_SAGA, loginSaga),
    takeLatest(actionLabels.AUTHENTICATION_VALIDATOR, authenticationValidatorSaga),
  ]);
}
