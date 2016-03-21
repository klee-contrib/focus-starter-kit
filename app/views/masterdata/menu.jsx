import React from 'react';
import {translate} from 'focus-core/translation';

const links = [
    { reference:'countries', href: '#admin/masterdata/countries', title: 'view.admin.masterdata.countries'},
    { reference:'movietype', href: '#admin/masterdata/movietype', title: 'view.admin.masterdata.movietype'},
    { reference:'gender', href: '#admin/masterdata/gender', title: 'view.admin.masterdata.gender'}
];

function masterdataMenu({reference}) {
    return (
        <ul>
            {
                links.map(link => {
                    const otherProps = link.reference === reference ? { 'data-active':true } : {};
                    return (<li {...otherProps}><a href={link.href}>{translate(link.title)}</a></li>);
                })
            }
        </ul>
    );
}

masterdataMenu.displayName = 'MasterdataMenu';
export default masterdataMenu;
