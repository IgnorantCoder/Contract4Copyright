import * as React from 'react';
import { DatePicker, TextField } from 'material-ui';
import NumberInput from 'material-ui-number-input';

export interface BasicsProps {
    onChangeCreatorName: (changed: string) => void;
    onChangeClientName: (changed: string) => void;
    onChangeMaterialDescription: (changed: string) => void;
    onChangePrice: (changed: number) => void;
    onChangeDeliveryDate: (changed: Date) => void;
    onChangeDeliveryWay: (changed: string) => void;
    onChangePaymentDate: (changed: Date) => void;
}

const basics: React.SFC<BasicsProps> = (props: BasicsProps) => {
    return (
        <div>
            <h3>基本的な入力項目</h3>
            <div style={{paddingLeft: '20px'}}>
                <TextField
                    hintText="作る人の名前"
                    onChange={(e, v) => {
                        e.preventDefault();
                        props.onChangeCreatorName(v);
                    }}
                /><br />
                <TextField
                    hintText="作ってもらう人の名前"
                    onChange={(e, v) => {
                        e.preventDefault();
                        props.onChangeClientName(v);
                    }}
                /><br />
                <TextField
                    hintText="何を作ってもらうのか"
                    multiLine={true}
                    onChange={(e, v) => {
                        e.preventDefault();
                        props.onChangeMaterialDescription(v);
                    }}
                /><br />
                <h4>納品関連</h4>
                <div style={{paddingLeft: '20px'}}>
                    <TextField
                        hintText="どうやって納品するか"
                        onChange={(e, v) => {
                            e.preventDefault();
                            props.onChangeDeliveryWay(v);
                        }}
                    /><br />
                    <DatePicker
                        hintText="納期"
                        container="inline"
                        autoOk={true}
                        onChange={(e, v) => {
                            props.onChangeDeliveryDate(new Date(v));
                        }}
                    />
                </div>
                <h4>支払い関連</h4>
                <div style={{paddingLeft: '20px'}}>
                    <NumberInput
                        hintText="金額(税込み)"
                        strategy="ignore"
                        onChange={(e, v) => {
                            e.preventDefault();
                            props.onChangePrice(Number(v));
                        }}
                    /><br />
                    <DatePicker
                        hintText="支払期限"
                        container="inline"
                        autoOk={true}
                        onChange={(e, v) => {
                            props.onChangePaymentDate(new Date(v));
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default basics;
