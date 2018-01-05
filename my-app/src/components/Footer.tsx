import * as React from 'react';
import * as FontAwesome from 'react-fontawesome';

const style: React.CSSProperties = {
    display: 'flex',
    direction: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white',
    backgroundColor: 'black',
    height: '64px',
    fontFamily: 'Roboto, sans-serif',
    boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px'
};

const itemStyle: React.CSSProperties = {
    paddingLeft: '30px',
    paddingRight: '30px'
};

const Footer: React.SFC = () => (
    <div style={style}>
        <div style={itemStyle}>
            <span>Created by IgnorantCoder.</span>
        </div>
        <div style={itemStyle}>
            <a
                href="https://twitter.com/IgnorantCoder"
                style={{textDecoration: 'none', color: 'white'}}
            >
                <FontAwesome name="twitter" size="2x" />
            </a>
        </div>
        <div style={itemStyle}>
            <span>MIT License.</span>
        </div>
    </div>
);

export default Footer;