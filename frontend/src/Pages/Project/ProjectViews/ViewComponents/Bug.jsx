import React from 'react';

const Bug = ({ bug }) => {
    return (
        <div className="bug">
            <div className="user">
                <img src={bug.pfp} alt={bug.pfp} />
                <h4>{bug.user}</h4>
            </div>
            <div className="top">
                <span className="version">{bug.version}</span>
                <h4>{bug.title}</h4>
                <span>{bug.date_created}</span>
            </div>
            <p>{bug.summary}</p>
            <details>
                <summary>View Screenshots</summary>
                {JSON.parse(bug.screenshots).map((screenshot, i) => 
                    <img src={screenshot} alt={`Screenshot ${i + 1}`} onClick={() => {
                        const imagePage = window.open();
                        imagePage.document.body.innerHTML = `<img src="${screenshot}" style="border-radius: 10px" />`;

                        Object.assign(imagePage.document.body.style, {
                            background: "#333",
                            margin: 0,
                            display: "grid",
                            placeItems: "center",
                            height: "100vh",
                        });
                    }} />)}
            </details>
        </div>
    );
}

export default Bug;