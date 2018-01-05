import { Action } from 'redux';

interface ChangeClientName extends Action {
    type: 'CHANGE_CLIENT_NAME';
    payload: {
        changedName: string;
    };
}

export default ChangeClientName;
