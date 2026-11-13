import React, {Component} from 'react';
import PropTypes from 'prop-types'
import Highlight from 'react-highlight.js'
import jsxToString from 'jsx-to-string'

export const propTypesCode = {
    code: PropTypes.object,
    language: PropTypes.string,
    jsxFunctionName: PropTypes.bool
}

export class Code extends Component {
    static propTypes = {
        ...propTypesCode
    }
    static defaultProps = {
        code: `<div>This is example code</div>`,
        isEditable: false,
        language: `html`,
        jsxFunctionName: true,
        shortBooleanSyntax: true,
        ignoreTags: [],
        ignoreProps: [],
        keyValueOverride: {
        }
    }
    state = {
        isOpen: false
    }
    componentDidMount() {
        const { code, language, ...rest } = this.props

        this.setState({
            codeString: ['jsx', 'html'].includes(language)
                ? jsxToString(code, {
                    ...rest
                })
                : code.string
                    ? code.string
                    : `ERROR: COULD NOT PROCESS CODE WITH LANG: ${language}`
        })
    }
    render() {
        const {isOpen, codeString} = this.state;
        const { code, language, isEditable } = this.props;
        return code
            ? <div
                contentEditable={ isEditable }
                suppressContentEditableWarning={true}
                style={{ outline: 'none' }}
            >
                <Highlight language={language}>
                    {
                        codeString
                            ? codeString
                            : ''
                    }
                </Highlight>
            </div>
            : null
    }
}

export default Code