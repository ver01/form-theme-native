import Div from "../../../component/container/div";
import Input from "../../../component/editor/input";

export default {
    component: Div,
    children: [
        {
            component: Input,
            props: {
                $vf_value: vf => vf.value, // mapping Value
                $vf_onChange: vf => vf.handle.onChange, // mapping onChange
            },
        },
    ],
};
