import { Action } from 'redux';

interface ChangeCreatorName extends Action {
    type: 'CHANGE_CREATOR_NAME';
    payload: {
        changedName: string;
    };
}

export default ChangeCreatorName;
