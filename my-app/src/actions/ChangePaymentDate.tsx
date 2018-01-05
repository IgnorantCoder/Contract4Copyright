import { Action } from 'redux';

interface ChangePaymentDate extends Action {
    type: 'CHANGE_PAYMENT_DATE';
    payload: {
        changed: Date;
    };
}

export default ChangePaymentDate;
