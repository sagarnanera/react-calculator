import React from "react";
import "./Key.css";

const Key = props => {

    return (
        // <div className="key-wrapper" id={props.id} ref={divRef}>
        //     <h2 className="my-2" onClick={handleClick}>
        //         {props.symbol}
        //     </h2>
        // </div>

        <button className="key-wrapper" id={props.id}>{props.symbol}</button>
    );
};

export default Key;
