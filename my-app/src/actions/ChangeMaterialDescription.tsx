import { Action } from 'redux';

interface ChangeMaterialDescription extends Action {
    type: 'CHANGE_MATERIAL_DESCRIPTION';
    payload: {
        changedText: string;
    };
}

export default ChangeMaterialDescription;
