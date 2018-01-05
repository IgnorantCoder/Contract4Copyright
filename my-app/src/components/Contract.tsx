import * as React from 'react';
import MaybeBlank from './MaybeBlank';
import Provision, { ProvisionProps } from './Provision';

const toString = (date: Date): string => {
    if (date) {
        if (!isNaN(date.getFullYear())
            && !isNaN(date.getMonth())
            && !isNaN(date.getDate())) {
            return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
        }
    }
    return '(　　　　　　)';
};

type ProvisionCreatorType = ((index: number) => ProvisionProps);

const withCommas = (num: number) => (
    num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
);

const consign = (materialDescription: string): ProvisionCreatorType => (
    (index: number) => (
        {
            index: index,
            title: '委託',
            details: [
                {
                    text: '乙は、甲に対し、以下のイラスト（以下「本著作物」という。）の作成を委託し、甲はこれを受託した。',
                    items: [
                        materialDescription
                    ]
                }
            ]
        }
    )
);

const delivery = (date: Date, way: string): ProvisionCreatorType => (
    (index: number) => (
        {
            index: index,
            title: '納入',
            details: [
                {
                    text: `甲は乙に対し、本著作物を以下の形式により、${toString(date)}までに、乙に対して納入する。`,
                    items: [
                        way
                    ]
                },
                {
                    text:
                        '乙は、前項の納入を受けた後速やかに納入物を検査し、納入物に瑕疵がある場合や、' +
                        '乙の企画意図に合致しない場合は、その旨甲に通知し、' +
                        '当該通知を受けた甲は、速やかに乙の指示に従った対応をする。',
                    items: []
                },
                {
                    text: '納入物の所有権は、対価の完済により乙に移転する。',
                    items: []
                }
            ]
        }
    )
);

const transferCopyRights = (withDerivativeRights: boolean): ProvisionCreatorType => (
    (index: number) => (
        {
            index: index,
            title: '権利の帰属',
            details: [
                {
                    text: `本著作物の著作権（著作権法第27条及び第28条に規定する権利を${ withDerivativeRights ? '含む' : '除く' }。）は、対価の完済により乙に移転する。`,
                    items: []
                }
            ]
        }
    )
);

const notTransferCopyRights = (): ProvisionCreatorType => (
    (index: number) => (
        {
            index: index,
            title: '権利の帰属',
            details: [
                {
                    text: '本著作物の著作権は甲に帰属する。',
                    items: []
                }
            ]
        }
    )
);

const moralrights = (isAbandonExercise: boolean): ProvisionCreatorType => (
    (index: number) => (
        {
            index: index,
            title: '著作者人格権',
            details: [
                {
                    text: isAbandonExercise
                        ? '乙は甲または甲が指定する第三者に対し著作者人格権を行使しないものとする。'
                        : '乙が本著作物の内容・表現又はその題号に変更を加える場合（拡大、縮小、色調の変更等も含む。）には、あらかじめ甲の承諾を必要とする。',
                    items: []
                }
            ]
        }
    )
);

const license = (expiry: Date, homepage: string): ProvisionCreatorType => (
    (index: number) => (
        {
            index: index,
            title: '利用許諾',
            details: [
                {
                    text: '甲は乙に対し、本著作物を下記で利用することを許諾する。',
                    items: [
                        homepage,
                        `期限:${toString(expiry)}まで`
                    ]
                }
            ]
        }
    )
);

const security = (): ProvisionCreatorType => (
    (index: number) => (
        {
            index: index,
            title: '保証',
            details: [
                {
                    text: '甲は、乙に対し、本著作物が第三者の著作権その他第三者の権利を侵害しないものであることを保証する。',
                    items: []
                }
            ]
        }
    )
);

const payment = (date: Date, price: number): ProvisionCreatorType => (
    (index: number) => (
        {
            index: index,
            title: '対価',
            details: [
                {
                    text: '乙は、甲に対し、イラスト作成業務及び本著作物の利用許諾の対価、その他本契約に基づく一切の対価として、'
                        + '金'
                        + ((price === -1) ? '(　　　　　)' : withCommas(price))
                        + `円（消費税込み）を、${toString(date)}までに支払う。`,
                    items: []
                }
            ]
        }
    )
);

const others = (): ProvisionCreatorType => (
    (index: number) => (
        {
            index: index,
            title: 'その他',
            details: [
                {
                    text: '本契約に定めのない利用態様については、甲乙別途協議の上、利用の可否、対価等につき決するものとする。',
                    items: []
                }
            ]
        }
    )
);

export interface SignatureProps {
    variable: string;
}

const Signature: React.SFC<SignatureProps> = (props: SignatureProps) => (
    <div style={{display: 'flex', alignItems: 'center'}}>
        <div>
            <span>{props.variable}</span>
        </div>
        <div>
            <ul style={{listStyleType: 'none'}}>
                <li style={{paddingTop: '10px', paddingBottom: '10px', paddingRight: '250px'}}>住所</li>
                <li>氏名</li>
            </ul>
        </div>
        <div>
            <span>印</span>
        </div>
    </div>
);

export interface ContractProps {
    creatorName: string;
    clientName: string;
    materialDescription: string;
    delivery: {
        way: string;
        date: Date;
    };
    copyrights: {
        transfer: boolean;
        withDerivativeRights: boolean;
    };
    moralrights: {
        abandon: boolean;
    };
    license: {
        homepage: string;
        expiry: Date;
    };
    payment: {
        price: number;
        date: Date;
    };
}

const Contract: React.SFC<ContractProps> = (props: ContractProps) => {
    const provisions
        = props.copyrights.transfer
        ? [
            consign(props.materialDescription),
            delivery(
                props.delivery.date,
                props.delivery.way),
            transferCopyRights(props.copyrights.withDerivativeRights),
            moralrights(props.moralrights.abandon),
            security(),
            payment(
                props.payment.date,
                props.payment.price),
            others()
        ]
        : [
            consign(props.materialDescription),
            delivery(
                props.delivery.date,
                props.delivery.way),
            notTransferCopyRights(),
            license(
                props.license.expiry,
                props.license.homepage),
            moralrights(false),
            security(),
            payment(
                props.payment.date,
                props.payment.price),
            others()
        ];

    return (
        <div style={{paddingLeft: '50px', paddingRight: '50px', paddingTop: '30px', paddingBottom: '30px'}}>
            <h1 style={{textAlign: 'center', paddingTop: '50px', paddingBottom: '50px'}}>契約書</h1>
            <div>
                <div style={{paddingBottom: '30px'}}>
                    <MaybeBlank text={props.creatorName}/>
                    （以下「甲」という。）と
                    <MaybeBlank text={props.clientName}/>
                    （以下「乙」という。）とは、イラスト作成業務の委託に関し、以下のとおり契約を締結する。
                </div>
                {provisions.map( (e, index) => {
                    const provisionProps = e(index + 1);
                    return <Provision key={index} {...provisionProps}/>;
                })}
                <div style={{paddingBottom: '50px'}}>
                    本契約締結の証として、本契約書2通を作成し、甲乙記名捺印の上、各自1通を保持する。
                </div>
            </div>
            <div>
                <span style={{textDecoration: 'underline'}}>{'　　　　'}</span>年
                <span style={{textDecoration: 'underline'}}>{'　　'}</span>月
                <span style={{textDecoration: 'underline'}}>{'　　'}</span>日
            </div>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end'}}>
                <Signature variable={'甲'}/>
                <Signature variable={'乙'}/>
            </div>
        </div>
    );

};

export default Contract;
