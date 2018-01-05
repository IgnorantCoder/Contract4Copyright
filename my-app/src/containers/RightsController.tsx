import { RootState } from '../reducers/index';
import { Dispatch } from 'redux';
import {
    ChangeCopyrightsLicenseExpiryDate,
    ChangeCopyrightsLicenseHomepageName,
    SetCopyrightsAllowDerivativeWorks,
    SetCopyrightsControllerValue,
    SetCopyrightsTransfer,
    SetMoralRightsAbandonExerciseRights,
    SetMoralRightsControllerValue
} from '../actions';
import Rights from '../components/Rights';
import { connect } from 'react-redux';
import { TransferType } from '../actions/SetCopyrightsControllerValue';
import { ExerciseType } from '../actions/SetMoralRightsControllerValue';

const mapStateToProps = (state: RootState) => {
    return {
        selecetedTransfer: state.controller.transfer,
        selecetedExercise: state.controller.exercise,
        displayLicense: !state.copyrights.transfer,
        displayMoral: state.copyrights.transfer
    };
};

const mapDispatchToProps = (dispatch: Dispatch<RootState>) => {
    return {
        onChangeTransfer: (changed: TransferType) => {
            dispatch(SetCopyrightsControllerValue(changed));
            switch (changed.type) {
                case 'TRANSFER_NOTHING':
                    dispatch(SetCopyrightsTransfer(false));
                    return;
                case 'TRANSFER_WITHOUT_DERIVATIVES':
                    dispatch(SetCopyrightsTransfer(true));
                    dispatch(SetCopyrightsAllowDerivativeWorks(false));
                    return;
                case 'TRANSFER_ALL':
                    dispatch(SetCopyrightsAllowDerivativeWorks(true));
                    return;
                default:
                    return;
            }
        },
        onChangeMoral: (changed: ExerciseType) => {
            dispatch(SetMoralRightsControllerValue(changed));
            switch (changed.type) {
                case 'EXERCISABLE':
                    dispatch(SetMoralRightsAbandonExerciseRights(false));
                    return;
                case 'ABANDON':
                    dispatch(SetMoralRightsAbandonExerciseRights(true));
                    return;
                default:
                    return;
            }
        },
        onChangeLicensedContentsName: (changed: string) => {
            dispatch(ChangeCopyrightsLicenseHomepageName(changed));
        },
        onChangeLicenseExpiry: (changed: Date) => {
            dispatch(ChangeCopyrightsLicenseExpiryDate(changed));
        }
    };
};

const rightsController = connect(
    mapStateToProps,
    mapDispatchToProps
)(Rights);

export default rightsController;