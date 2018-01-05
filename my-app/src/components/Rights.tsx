import * as React from 'react';
import {
    MenuItem,
    SelectField,
    TextField,
    DatePicker
} from 'material-ui';
import {
    transferAll,
    transferNothing,
    TransferType,
    transferWithoutDerivatives
} from '../actions/SetCopyrightsControllerValue';
import {
    abandon,
    exercisable,
    ExerciseType
} from '../actions/SetMoralRightsControllerValue';

export interface RightsProps {
    selecetedTransfer: TransferType;
    selecetedExercise: ExerciseType;
    displayLicense: boolean;
    displayMoral: boolean;
    onChangeTransfer: (changed: TransferType) => void;
    onChangeMoral: (changed: ExerciseType) => void;
    onChangeLicensedContentsName: (changed: string) => void;
    onChangeLicenseExpiry: (changed: Date) => void;
}

const hideStyle = {
    display: 'none'
};

const displayStyle = {
    display: 'block'
};

const Rights: React.SFC<RightsProps> = (props: RightsProps) => {
    return (
        <div>
            <h3>権利関係の入力項目</h3>
            <div style={{paddingLeft: '20px'}}>
                <SelectField
                    floatingLabelText={'著作権の移転'}
                    autoWidth={true}
                    value={props.selecetedTransfer.type}
                    onChange={(e, v, p) => { props.onChangeTransfer( { type: p }); }}
                >
                    <MenuItem value={transferNothing().type} primaryText="移転しない" />
                    <MenuItem value={transferWithoutDerivatives().type} primaryText="移転する(二次利用除く)" />
                    <MenuItem value={transferAll().type} primaryText="移転する(二次利用含む)" />
                </SelectField>
                <div style={Object.assign({}, {paddingLeft: '20px'}, props.displayLicense ? displayStyle : hideStyle)}>
                    <h4>ライセンス関連</h4>
                    <div style={{paddingLeft: '20px'}}>
                        <TextField
                            hintText="なにに使うか"
                            onChange={(e, v) => {
                                e.preventDefault();
                                props.onChangeLicensedContentsName(v);
                            }}
                        /><br />
                        <DatePicker
                            hintText="利用期限"
                            container="inline"
                            autoOk={true}
                            onChange={(e, v) => {
                                props.onChangeLicenseExpiry(new Date(v));
                            }}
                        />
                    </div>
                </div>
                <div style={props.displayMoral ? displayStyle : hideStyle}>
                    <SelectField
                        floatingLabelText={'著作者人格権'}
                        autoWidth={true}
                        value={props.selecetedExercise.type}
                        onChange={(e, v, p) => { props.onChangeMoral( { type: p }); }}
                    >
                        <MenuItem value={exercisable().type} primaryText="特約なし" />
                        <MenuItem value={abandon().type} primaryText="不行使特約をつける" />
                    </SelectField>
                </div>
            </div>
        </div>
     );
};

export default Rights;
