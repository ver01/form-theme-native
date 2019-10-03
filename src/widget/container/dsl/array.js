import Div from "../../../component/container/div";
import Button from "../../../component/editor/button";

export default {
    component: Div,
    children: [
        {
            mode: "repeaterHolder",
            component: Div,
            repeater: {
                component: Div,
                children: [
                    {
                        mode: "editorHolder",
                        component: Div,
                    },
                    {
                        component: Div,
                        children: [
                            {
                                // move down btn
                                component: Button,
                                props: {
                                    $vf_onClick: ({ handle }) => handle.moveDown,
                                },
                                children: ["下移"],
                            },
                            {
                                component: Button,
                                props: {
                                    $vf_onClick: ({ handle }) => handle.moveUp,
                                },
                                children: ["上移"],
                            },
                            {
                                component: Button,
                                props: {
                                    $vf_onClick: ({ handle }) => handle.remove,
                                },
                                children: ["删除"],
                            },
                        ],
                    },
                ],
            },
        },
        {
            component: Div,
            children: [
                {
                    component: Button,
                    children: ["添加"],
                },
            ],
        },
    ],
};
