import Div from "../../../component/container/div";
import CheckBox from "../../../component/editor/checkbox";

export default {
    component: Div,
    children: [
        {
            component: CheckBox,
            props: {
                $vf_value: vf => vf.value, // mapping Value
                $vf_onChange: vf => vf.handle.onChange, // mapping onChange
            },
        },
    ],
};
