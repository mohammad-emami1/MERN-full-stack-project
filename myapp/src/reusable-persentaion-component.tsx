import "./reusable-persentaion-component.css";

import "./reusable-persentaion-component.css";

function Rpc({ img, invertColors, invertAlignment, bigText, smallText, buttonText }) {
    return (
        <div className={`rpc-body ${invertColors ? 'rpc-body-inv' : ''} ${invertAlignment ? 'invert-alignment' : ''}`}>
            <div className={`rpc-image`} style={{ backgroundImage: `url(${img})` }} />
            <div className={`rpc-text ${invertColors ? 'invert-colors' : ''}`}>
                <h1>{bigText}</h1>
                <h2>{smallText}</h2>
                <button className="rpc-button">{buttonText}</button>
            </div>
        </div>
    );
}

export default Rpc;

