import Div from "../../../component/container/div";
import Fragment from "../../../component/container/fragment";

export default {
    component: Div,
    children: [
        {
            mode: "repeaterHolder",
            component: Fragment,
            repeater: {
                component: Fragment,
                mode: "editorHolder",
            },
        },
    ],
};
