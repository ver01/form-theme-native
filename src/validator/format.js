const Validator = ({ value, ruleData, schema }) => {
    switch (ruleData) {
        case "email":
            return {
                errType: "feedbackStr",
                errData: `value should match format "email"`,
            };
        case "uri":
            return {
                errType: "feedbackStr",
                errData: `value should match format "uri"`,
            };
        default:
            return;
    }
};

export default Validator;
