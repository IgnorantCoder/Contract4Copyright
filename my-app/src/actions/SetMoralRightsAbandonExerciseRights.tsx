import { Action } from 'redux';

interface SetMoralRightsAbandonExerciseRights extends Action {
    type: 'SET_MORALRIGHTS_ABANDON_EXERCISE_RIGHTS';
    payload: {
        value: boolean;
    };
}

export default SetMoralRightsAbandonExerciseRights;
