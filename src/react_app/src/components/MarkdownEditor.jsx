import React, {Component} from "react";
import {Editor} from "@toast-ui/editor";
import PropTypes from "prop-types";


class MarkdownEditor extends Component {
    constructor(props) {
        super(props);
        this.editorRef = React.createRef();
    }

    componentDidMount() {
        const {onContentChange} = this.props;

        const editor = new Editor({
            el: this.editorRef.current,
            hideModeSwitch: true,
        });

        editor.addHook('change', () => {
            const content = editor.getMarkdown();
            onContentChange(content);
        });
    }

    render() {

        return(
            <>
                <div ref={this.editorRef}/>
            </>
        );
    }
}


MarkdownEditor.propTypes = {
    onContentChange: PropTypes.func.isRequired,
}

export default MarkdownEditor;