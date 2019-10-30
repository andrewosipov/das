import React from 'react';
import './style.css';

function formatDate(date) {
    return `${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`
}

function Repository({ id, name, description, url, stars, license, created, updated }) {
    const createdDate = new Date(created);
    const updatedDate = new Date(updated);
    return (
        <div className="repository">
            <p><a href={url} target="_blank" rel="noopener noreferrer">{name}</a></p>
            {license && <p>License: {license.name}</p>}
            <p><b>Created:</b> {formatDate(createdDate)}</p>
            <p><b>Updated:</b> {formatDate(updatedDate)}</p>
            <p><b>Stars:</b> {stars}</p>
            <p><b>Description:</b></p>
            <p>{description}</p>
        </div>
    );
}

export default Repository;
