import React, {useState, useRef, useEffect} from "react";
import {Editor} from "@toast-ui/editor";
import PropTypes from "prop-types";


const MarkdownEditor = ({onContentChange}) => {
    const editorRef = useRef(null);
    const [markDownContent, setMarkDownContent] = useState('# happiness');

    useEffect(() => {
        const editor = new Editor({
            el: editorRef.current,
            hideModeSwitch: true,
        });

        editor.addHook('change', () => {
            const content = editor.getMarkdown();
            setMarkDownContent(content);
            onContentChange(content);
        });
    }, [onContentChange]);

    return (
        <>
            <div ref={editorRef}/>
        </>
    )
}


MarkdownEditor.proptypes = {
    markDownContent: PropTypes.string,
    setMarkDownContent: PropTypes.func.isRequired,
    onContentChange: PropTypes.func.isRequired,
}

export default MarkdownEditor;