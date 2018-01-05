import * as React from 'react';
import BasicsController from '../containers/BasicsController';
import RightsController from '../containers/RightsController';
import ContractPreview from '../containers/ContractPreview';
import { MuiThemeProvider } from 'material-ui/styles';
import Layout, * as Area from './Layout';
import Footer from './Footer';
import Header from './Header';

const contentsAreaStyle: React.CSSProperties = {
    overflowY: 'scroll',
    maxHeight: 'calc(100vh - 128px)'
};

const controllerStyle: React.CSSProperties = Object.assign(
    {},
    contentsAreaStyle,
    {
        fontFamily: 'Roboto, sans-serif',
        paddingLeft: '10px'
    });

const previewStyle = contentsAreaStyle;

const Controllers: React.SFC = () => (
    <div style={controllerStyle}>
        <BasicsController />
        <RightsController />
    </div>
);

const Preview: React.SFC = () => (
    <div style={previewStyle}>
        <ContractPreview />
    </div>
);

const App: React.SFC = () => {
    return (
        <MuiThemeProvider>
            <Layout className="grid-layout">
                <Area.header className="noprint">
                    <Header />
                </Area.header>
                <Area.controller className="noprint">
                    <Controllers />
                </Area.controller>
                <Area.preview className="print">
                    <Preview />
                </Area.preview>
                <Area.footer className="noprint">
                    <Footer />
                </Area.footer>
            </Layout>
        </MuiThemeProvider>
    );
};

export default App;
