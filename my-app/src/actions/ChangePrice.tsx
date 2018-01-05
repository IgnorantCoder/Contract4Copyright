import {Action} from 'redux';

interface ChangePrice extends Action {
    type: 'CHANGE_PRICE';
    payload: {
        changedPrice: number;
    };
}

export default ChangePrice;
