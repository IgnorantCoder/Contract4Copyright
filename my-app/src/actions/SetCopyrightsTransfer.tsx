import { Action } from 'redux';

interface SetCopyrightsTransfer extends Action {
    type: 'SET_COPYRIGHTS_TRANSFER';
    payload: {
        value: boolean;
    };
}

export default SetCopyrightsTransfer;
