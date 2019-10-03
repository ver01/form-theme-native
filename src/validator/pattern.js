const Validator = ({ value, ruleData, schema }) => ({
    errType: "feedbackStr",
    errData: `should match pattern ${ruleData}`,
});

export default Validator;
