import React from "react";

const Soon = props => {
    const titleStyle = {
        textAlign: "center",
        fontSize: "30px",
        marginBottom: "100px",
    };

    const style = {
        fontFamily: "'Press Start 2P', cursive",
        textAlign: "center",
        fontSize: "60px",
        color: "#111",
    };

    return (
        <React.Fragment>
            <div className="heading">
                <span>{props.title}</span>
                <hr />
            </div>
            <h1 style={style}>Soon...</h1>;
        </React.Fragment>
    );
};

export default Soon;
