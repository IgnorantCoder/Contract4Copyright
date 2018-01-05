import ChangeClientNameAction from './ChangeClientName';
import ChangeCopyrightsLicenseExpiryDateAction from './ChangeCopyrightsLicenseExpiryDate';
import ChangeCopyrightsLicenseHomepageNameAction from './ChangeCopyrightsLicenseHomepageName';
import ChangeCreatorNameAction from './ChangeCreatorName';
import ChangeDeliveryDateAction from './ChangeDeliveryDate';
import ChangeDeliveryWayAction from './ChangeDeliveryWay';
import ChangeMaterialDescriptionAction from './ChangeMaterialDescription';
import ChangePaymentDateAction from './ChangePaymentDate';
import ChangePriceAction from './ChangePrice';
import ToggleCopyrightsAllowDerivativeWorksAction from './SetCopyrightsAllowDerivativeWorks';
import ToggleCopyrightsTransferAction from './SetCopyrightsTransfer';
import ToggleMoralRightsAbandonExerciseRightsAction from './SetMoralRightsAbandonExerciseRights';
import SetCopyrightsControllerValueAction, { TransferType } from './SetCopyrightsControllerValue';
import SetMoralRightsControllerValueAction, { ExerciseType } from './SetMoralRightsControllerValue';

export type Actions
    = ChangeClientNameAction
    | ChangeCopyrightsLicenseExpiryDateAction
    | ChangeCopyrightsLicenseHomepageNameAction
    | ChangeCreatorNameAction
    | ChangeDeliveryDateAction
    | ChangeDeliveryWayAction
    | ChangeMaterialDescriptionAction
    | ChangePaymentDateAction
    | ChangePriceAction
    | ToggleCopyrightsAllowDerivativeWorksAction
    | ToggleCopyrightsTransferAction
    | ToggleMoralRightsAbandonExerciseRightsAction
    | SetCopyrightsControllerValueAction
    | SetMoralRightsControllerValueAction;

export const ChangeClientName = (changedName: string): ChangeClientNameAction => (
    {
        type: 'CHANGE_CLIENT_NAME',
        payload: {
            changedName: changedName
        }
    });

export const ChangeCopyrightsLicenseExpiryDate = (changed: Date): ChangeCopyrightsLicenseExpiryDateAction => (
    {
        type: 'CHANGE_COPYRIGHTS_LICENSE_EXPIRY_DATE',
        payload: {
            changed: changed
        }
    });

export const ChangeCopyrightsLicenseHomepageName = (changedName: string): ChangeCopyrightsLicenseHomepageNameAction => (
    {
        type: 'CHANGE_COPYRIGHTS_LICENSE_HOMEPAGE_NAME',
        payload: {
            changedName: changedName
        }
    });

export const ChangeCreatorName = (changedName: string): ChangeCreatorNameAction => (
    {
        type: 'CHANGE_CREATOR_NAME',
        payload: {
            changedName: changedName
        }
    });

export const ChangeDeliveryDate = (changed: Date): ChangeDeliveryDateAction => (
    {
        type: 'CHANGE_DELIVERY_DATE',
        payload: {
            changed: changed
        }
    });

export const ChangeDeliveryWay = (changedWay: string): ChangeDeliveryWayAction => (
    {
        type: 'CHANGE_DELIVERY_WAY',
        payload: {
            changedWay: changedWay
        }
    });

export const ChangeMaterialDescription = (changedText: string): ChangeMaterialDescriptionAction => (
    {
        type: 'CHANGE_MATERIAL_DESCRIPTION',
        payload: {
            changedText: changedText
        }
    });

export const ChangePaymentDate = (changed: Date): ChangePaymentDateAction => (
    {
        type: 'CHANGE_PAYMENT_DATE',
        payload: {
            changed: changed
        }
    });

export const ChangePrice = (changedPrice: number): ChangePriceAction => (
    {
        type: 'CHANGE_PRICE',
        payload: {
            changedPrice: changedPrice
        }
    });

export const SetCopyrightsAllowDerivativeWorks = (value: boolean): ToggleCopyrightsAllowDerivativeWorksAction => (
    {
        type: 'SET_COPYRIGHTS_ALLOW_DERIVATIVE_WORKS',
        payload: {
            value: value
        }
    });

export const SetCopyrightsTransfer = (value: boolean): ToggleCopyrightsTransferAction => (
    {
        type: 'SET_COPYRIGHTS_TRANSFER',
        payload: {
            value: value,
        }
    });

export const SetMoralRightsAbandonExerciseRights = (value: boolean): ToggleMoralRightsAbandonExerciseRightsAction => (
    {
        type: 'SET_MORALRIGHTS_ABANDON_EXERCISE_RIGHTS',
        payload: {
            value: value,
        }
    });

export const SetCopyrightsControllerValue = (selected: TransferType): SetCopyrightsControllerValueAction => (
    {
        type: 'SET_COPYRIGHTS_CONTROLLER_VALUE',
        payload: {
            selected: selected
        }
    });

export const SetMoralRightsControllerValue = (selected: ExerciseType): SetMoralRightsControllerValueAction => (
    {
        type: 'SET_MORALRIGHTS_CONTROLLER_VALUE',
        payload: {
            selected: selected
        }
    });
