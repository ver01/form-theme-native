import React from "react";

const unfinishNum = str => Number.isNaN(Number(str));

export default class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tempStr: props.value === undefined ? "" : `${props.value}`,
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value === this.props.value) {
            return;
        }
        const tempStr = this.state.tempStr.trim();
        if (nextProps === undefined) {
            if (tempStr === "" || unfinishNum(tempStr)) {
                return;
            }
            this.setState({ value: "" });
        } else {
            this.setState({ value: `${nextProps.value}` });
        }
    }

    render() {
        const { onChange, children, ...others } = this.props;
        return (
            <input
                {...others}
                value={this.state.tempStr}
                // trigger onChange
                onChange={({ target }) => {
                    const value = target.value.trim();
                    const reg = /^-?([0-9]*)?$/;
                    if (reg.test(value)) {
                        this.setState({ tempStr: value }, () => {
                            if (value === "") {
                                onChange();
                            } else if (!Number.isNaN(Number(value))) {
                                onChange(Number(value));
                            }
                        });
                    }
                }}
            />
        );
    }
}
