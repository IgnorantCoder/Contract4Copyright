import { Action } from 'redux';

interface ChangeDeliveryDate extends Action {
    type: 'CHANGE_DELIVERY_DATE';
    payload: {
        changed: Date;
    };
}

export default ChangeDeliveryDate;
