const Validator = ({ value, ruleData, schema }) => ({
    errType: "feedbackStr",
    errData: `value is greatter than ${ruleData}`,
});

export default Validator;
