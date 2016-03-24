import React from 'react';
import {translate} from 'focus-core/translation';

function masterdataHome() {
    return (
        <div data-demo='footer'>
            <div>
                <div>{translate('footer.klee.powered')}</div>
            </div>
            <div>
                <ul>
                    <li><a href='http://getfocus.io' target='_blank'>GETFOCUS.IO</a></li>
                    <li><a href='http://focus-doc.dev.klee.lan.net' target='_blank'>BLOG</a></li>
                    <li><a href='http://kleegroup.github.io/focus-docs/' target='_blank'>DOCUMENTATION</a></li>
                </ul>
            </div>
        </div>
    );
}

masterdataHome.displayName = 'MasterdataHome';
export default masterdataHome;
