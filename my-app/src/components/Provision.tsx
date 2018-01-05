import * as React from 'react';
import MaybeBlank from './MaybeBlank';

interface DetailProps {
    text: string;
    items: string[];
}

const Detail: React.SFC<DetailProps> = (props: DetailProps) => {
    if (props.items.length === 0) {
        return (
            <div>
                <span>{props.text}</span>
            </div>
        );
    }

    return (
        <div>
            <span>{props.text}</span>
            <ul style={{listStyleType: 'none'}}>
                {props.items.map((e) => (<li><MaybeBlank text={e}/></li>))}
            </ul>
        </div>
    );
};

const DetailOfDetails: React.SFC<DetailProps> = (props: DetailProps) => {
    if (props.items.length === 0) {
        return (
            <li style={{paddingBottom: '0.5em'}}>
                <span>{props.text}</span>
            </li>
        );
    }

    return (
        <li style={{paddingBottom: '0.5em'}}>
            <span>{props.text}</span>
            <ul style={{listStyleType: 'none'}}>
                {props.items.map((e) => (<li><MaybeBlank text={e}/></li>))}
            </ul>
        </li>
    );
};

export interface IndexProps {
    index: number;
    title: string;
}

const Index: React.SFC<IndexProps> = (props: IndexProps) => {
    return (
        <div style={{ display: 'flex'}}>
            <div>第{props.index.toString()}条</div>
            <div>（{props.title}）</div>
        </div>
    );
};

export interface ProvisionProps {
    index: number;
    title: string;
    details: DetailProps[];
}

const Provision: React.SFC<ProvisionProps> = (props: ProvisionProps) => {
    if (props.details.length === 1) {
        return (
            <div>
                <Index title={props.title} index={props.index} />
                <div style={{paddingBottom: '30px'}}>
                    <Detail {...props.details[0]} />
                </div>
            </div>
        );
    }

    return (
        <div>
            <Index title={props.title} index={props.index} />
            <div style={{paddingBottom: '30px'}}>
                <ol style={{marginTop: 0, paddingLeft: '20px'}}>
                    {props.details.map((e) => (<DetailOfDetails {...e} />))}
                </ol>
            </div>
        </div>
    );
};

export default Provision;