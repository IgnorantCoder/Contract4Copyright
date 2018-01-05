import { Action } from 'redux';

export interface Unknown {
    type: string;
}

export interface Exercisable {
    type: 'EXERCISABLE';
}

export const exercisable = (): Exercisable => {
    return {
        type: 'EXERCISABLE'
    };
};

export interface Abandon {
    type: 'ABANDON';
}

export const abandon = (): Abandon => {
    return {
        type: 'ABANDON'
    };
};

export type ExerciseType = Unknown | Exercisable | Abandon;

interface SetMoralRightsControllerValue extends Action {
    type: 'SET_MORALRIGHTS_CONTROLLER_VALUE';
    payload: {
        selected: ExerciseType;
    };
}

export default SetMoralRightsControllerValue;
