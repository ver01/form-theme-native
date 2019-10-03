const Validator = ({ value, ruleData, schema }) => ({
    errType: "feedbackStr",
    errData: `${schema.title || "this"} is required`,
});

export default Validator;
