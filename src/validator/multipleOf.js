const Validator = ({ value, ruleData, schema }) => ({
    errType: "feedbackStr",
    errData: `value is not multiple of ${ruleData}`,
});

export default Validator;
