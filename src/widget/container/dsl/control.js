import React from "react";

import Fragment from "../../../component/container/fragment";

export default {
    component: Fragment,
    children: [
        {
            component: props => {
                const { schemaList } = props;
                if (!schemaList) {
                    return null;
                }
                const activeInd = schemaList.findIndex(it => it.selected);
                return (
                    <select onchange={({ key }) => props.schemaSelect(key)}>
                        {schemaList.map((it, i) => (
                            <option value={i} selected={i === activeInd ? "selected" : ""}>{`${
                                it.schema && it.schema.title ? it.schema.title : `模式 ${i + 1}`
                            }`}</option>
                        ))}
                    </select>
                );
            },
            props: {
                $vf_schemaList: ({ schemaList }) => schemaList,
                $vf_schemaSelect: ({ handle }) => handle.schemaSelect,
            },
        },
        {
            mode: "editorHolder",
            component: Fragment,
        },
    ],
};
