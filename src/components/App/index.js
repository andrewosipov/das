import React from 'react';
import Repository from '../Repository';
import Preloader from '../Preloader';
import './style.css';

function renderRepositories(props) {
    return props.data.search.edges.map(data =>
        <Repository
            key={data.node.id}
            url={data.node.url}
            name={data.node.name}
            license={data.node.licenseInfo}
            description={data.node.description}
            stars={data.node.stargazers.totalCount}
            created={data.node.createdAt}
            updated={data.node.pushedAt}
        />
    )
}

function App(props) {
    return (
        <div className="container">
            <div className="content">
              {(props.data.loading === true) ? <Preloader show /> : renderRepositories(props)}
            </div>
        </div>
    );
}

export default App;
