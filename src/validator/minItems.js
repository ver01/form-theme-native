const Validator = ({ value, ruleData, schema }) => ({
    errType: "feedbackStr",
    errData: `should NOT have less than ${ruleData}`,
});

export default Validator;
