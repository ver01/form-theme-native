import checkbox from "./dsl/checkbox";
import input from "./dsl/input";
import empty from "./dsl/empty";
import numericinput from "./dsl/numericinput";
import integerinput from "./dsl/integerinput";

export default {
    boolean: { default: checkbox },
    integer: { default: integerinput },
    null: { default: empty },
    string: { default: input },
    number: { default: numericinput },
};
