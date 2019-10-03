const Validator = ({ value, ruleData, schema }) => ({
    errType: "feedbackStr",
    errData: `this item is duplicate with item ${ruleData}`,
});

export default Validator;
