import React from "react";

// update onChange
const Editor = props => {
    const { onChange, children, ...others } = props;
    return (
        <input
            {...others}
            // trigger onChange
            onChange={({ target }) => props.onChange(target.value)}
        >
            {props.children}
        </input>
    );
};

export default Editor;
