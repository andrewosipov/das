import React, { useContext } from 'react';
import { AppContext } from '../../context';
import './style.css';

const licenses = [
    { name: 'Academic Free License v3.0', code: 'afl-3.0' },
    { name: 'Apache license 2.0', code: 'apache-2.0' },
    { name: 'Artistic license 2.0', code: 'artistic-2.' },
    { name: 'Boost Software License 1.0', code: 'bsl-1.0' },
    { name: 'BSD 2-clause "Simplified" license', code: 'bsd-2-clause' },
    { name: 'BSD 3-clause "New" or "Revised" license', code: 'bsd-3-clause' },
    { name: 'BSD 3-clause Clear license	', code: 'bsd-3-clause-clear' },
    { name: 'Creative Commons license family	', code: 'cc' },
    { name: 'Creative Commons Zero v1.0 Universal	', code: 'cc0-1.0' },
    { name: 'Creative Commons Attribution 4.0	', code: 'cc-by-4.0' },
    { name: 'Creative Commons Attribution Share Alike 4.0	', code: 'cc-by-sa-4.0' },
    { name: 'Do What The F*ck You Want To Public License	', code: 'wtfpl' },
    { name: 'Educational Community License v2.0	', code: 'ecl-2.0' },
    { name: 'Eclipse Public License 1.0	', code: 'epl-1.0' },
    { name: 'European Union Public License 1.1	', code: 'eupl-1.1' },
    { name: 'GNU Affero General Public License v3.0	', code: 'agpl-3.0' },
    { name: 'GNU General Public License family	', code: 'gpl' },
    { name: 'GNU General Public License v2.0	', code: 'gpl-2.0' },
    { name: 'GNU General Public License v3.0	', code: 'gpl-3.0' },
    { name: 'GNU Lesser General Public License family	', code: 'lgpl' },
    { name: 'GNU Lesser General Public License v2.1	', code: 'lgpl-2.1' },
    { name: 'GNU Lesser General Public License v3.0	', code: 'lgpl-3.0' },
    { name: 'ISC	', code: 'isc' },
    { name: 'LaTeX Project Public License v1.3c	', code: 'lppl-1.3c' },
    { name: 'Microsoft Public License	', code: 'ms-pl' },
    { name: 'MIT	', code: 'mit' },
    { name: 'Mozilla Public License 2.0	', code: 'mpl-2.0' },
    { name: 'Open Software License 3.0	', code: 'osl-3.0' },
    { name: 'PostgreSQL License	', code: 'postgresql' },
    { name: 'SIL Open Font License 1.1	', code: 'ofl-1.1' },
    { name: 'University of Illinois/NCSA Open Source License	', code: 'ncsa' },
    { name: 'The Unlicense	', code: 'unlicense' },
    { name: 'zLib License	', code: 'zlib' },
];

function Filter() {
    const { state, dispatch } = useContext(AppContext);

    return (
        <div className="filter">
            <div className="container">
                <p>
                    <span>License:</span>
                    <select defaultValue={state.license} onChange={(ev) => dispatch({ type: 'setLicense', license: ev.target.value })}>
                        <option value="*" />
                        {licenses.map(item => (
                            <option
                                key={item.code}
                                value={item.code}
                            >
                                {item.name}
                            </option>
                        ))}
                    </select>
                </p>
                <p>
                    <span>Name:</span>
                    <input
                        type="text"
                        value={state.name}
                        onChange={(ev) => dispatch({ type: 'setName', name: ev.target.value })}
                    />
                </p>
            </div>
        </div>
    );
}

export default () => (
    <AppContext.Consumer>
        {(props) => <Filter {...props} />}
    </AppContext.Consumer>
);
