const Validator = ({ value, ruleData, schema }) => ({
    errType: "feedbackStr",
    errData: `should NOT have more than ${ruleData}`,
});

export default Validator;
