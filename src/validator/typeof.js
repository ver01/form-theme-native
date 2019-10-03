const Validator = ({ value, ruleData, schema }) => ({
    errType: "feedbackStr",
    errData: `should be ${ruleData}`,
});

export default Validator;
