const Validator = ({ value, ruleData, schema }) => ({
    errType: "feedbackStr",
    errData: `value is less then ${ruleData}`,
});

export default Validator;
