import * as React from 'react';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { AppBar } from 'material-ui';

const tooltip = (
    <Tooltip placement="left">
        このツールはイラストとかを発注する時用の契約書ジェネレータです。<br />
        左側の入力項目を全部入力すると、いい感じで契約書が出来上がるはずです。<br />
        印刷ボタンを押すとプレビューエリアだけが印刷されます。<br />
        印刷オプションからヘッダとフッタの印刷をしないようにして、両面印刷すると契約書が出来ます。
    </Tooltip>
);

const Header: React.SFC = () => (
    <AppBar title={'Contract4Copyright'} showMenuIconButton={false}>
        <OverlayTrigger placement="bottom" overlay={tooltip}>
            <Button bsStyle="text">HELP</Button>
        </OverlayTrigger>
    </AppBar>
);

export default Header;