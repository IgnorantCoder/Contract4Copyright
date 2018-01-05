import * as React from 'react';

export interface MaybeBlankProps {
    text: string;
}

const MaybeBlank: React.SFC<MaybeBlankProps> = (props: MaybeBlankProps) => {
    if (props.text === '') {
        return (
            <span style={{ textDecoration: 'underline' }}>{'　　　　　　　　　　　'}</span>
        );
    }
    return <span>{props.text}</span>;
};

export default MaybeBlank;