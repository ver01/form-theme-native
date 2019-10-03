import React from "react";

// update onChange & value
const Editor = props => {
    const { value, onChange, children, ...others } = props;
    return (
        <input
            {...others}
            type="checkbox"
            // recieve value
            checked={value ? "checked" : ""}
            // trigger onChange
            onChange={({ target }) => onChange(target.checked)}
        >
            {children}
        </input>
    );
};

export default Editor;
