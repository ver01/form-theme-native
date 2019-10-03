const Validator = ({ value, ruleData, schema }) => ({
    errType: "feedbackStr",
    errData: `should have this property when "${ruleData}" property is present`,
});

export default Validator;
