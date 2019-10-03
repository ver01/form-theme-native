// validators
import valiMinLength from "./validator/minLength";
import valiMinimum from "./validator/minimum";
import valiMaximum from "./validator/maximum";
import valiMinItems from "./validator/minItems";
import valiMaxItems from "./validator/maxItems";
import valiMultipleOf from "./validator/multipleOf";
import valiRequired from "./validator/required";
import valiFormat from "./validator/format";
import valiPattern from "./validator/pattern";
import valiTypeof from "./validator/typeof";
import valiUniqueItems from "./validator/uniqueItems";
import valiDependencies from "./validator/dependencies";

// container
import container from "./widget/container";

// editor
import editor from "./widget/editor";

export default {
    validators: {
        minLength: valiMinLength,
        minimum: valiMinimum,
        maximum: valiMaximum,
        minItems: valiMinItems,
        maxItems: valiMaxItems,
        multipleOf: valiMultipleOf,
        required: valiRequired,
        format: valiFormat,
        pattern: valiPattern,
        typeof: valiTypeof,
        uniqueItems: valiUniqueItems,
        dependencies: valiDependencies,
    },
    components: {
        // container
        root: {
            widgets: container.root,
        },
        control: {
            widgets: container.control,
        },
        array: {
            widgets: container.array,
        },
        object: {
            widgets: container.object,
        },
        // editor
        string: {
            widgets: editor.string,
        },
        number: {
            widgets: editor.number,
        },
        integer: {
            widgets: editor.integer,
        },
        boolean: {
            widgets: editor.boolean,
        },
        null: {
            widgets: editor.null,
        },
    },
};
