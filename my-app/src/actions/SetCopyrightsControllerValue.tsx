import { Action } from 'redux';

export interface Unknown {
    type: string;
}

export interface TransferNothing {
    type: 'TRANSFER_NOTHING';
}

export const transferNothing = (): TransferNothing => {
    return {
        type: 'TRANSFER_NOTHING'
    };
};

export interface TransferWithoutDerivatives {
    type: 'TRANSFER_WITHOUT_DERIVATIVES';
}

export const transferWithoutDerivatives = (): TransferWithoutDerivatives => {
    return {
        type: 'TRANSFER_WITHOUT_DERIVATIVES'
    };
};

export interface TransferAll {
    type: 'TRANSFER_ALL';
}

export const transferAll = (): TransferAll => {
    return {
        type: 'TRANSFER_ALL'
    };
};

export type TransferType = Unknown | TransferNothing | TransferWithoutDerivatives | TransferAll;

interface SetCopyrightsControllerValue extends Action {
    type: 'SET_COPYRIGHTS_CONTROLLER_VALUE';
    payload: {
        selected: TransferType;
    };
}

export default SetCopyrightsControllerValue;