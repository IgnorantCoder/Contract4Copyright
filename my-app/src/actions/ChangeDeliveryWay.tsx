import { Action } from 'redux';

interface ChangeDeliveryWay extends Action {
    type: 'CHANGE_DELIVERY_WAY';
    payload: {
        changedWay: string;
    };
}

export default ChangeDeliveryWay;
