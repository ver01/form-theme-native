import Div from "../../../component/container/div";
import numericinput from "../../../component/editor/numericinput";

export default {
    component: Div,
    children: [
        {
            component: numericinput,
            props: {
                $vf_value: vf => vf.value, // mapping Value
                $vf_onChange: vf => vf.handle.onChange, // mapping onChange
            },
        },
    ],
};
