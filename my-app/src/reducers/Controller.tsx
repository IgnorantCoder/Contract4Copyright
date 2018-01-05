import { Actions } from '../actions/index';
import {
    transferNothing,
    TransferType
} from '../actions/SetCopyrightsControllerValue';
import {
    exercisable,
    ExerciseType
} from '../actions/SetMoralRightsControllerValue';

export interface ControllerState {
    transfer: TransferType;
    exercise: ExerciseType;
}

const init = (): ControllerState => ({
    transfer: transferNothing(),
    exercise: exercisable()
});

export const controllerStateReducer = (state: ControllerState = init(), action: Actions): ControllerState => {
    switch (action.type) {
        case 'SET_COPYRIGHTS_CONTROLLER_VALUE':
            return Object.assign(
                {},
                state,
                {
                    transfer: action.payload.selected
                });
        case 'SET_MORALRIGHTS_CONTROLLER_VALUE':
            return Object.assign(
                {},
                state,
                {
                    exercise: action.payload.selected
                });
        default:
            return state;
    }
};