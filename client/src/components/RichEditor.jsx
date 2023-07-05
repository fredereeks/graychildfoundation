import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export default function RichEditor(){
    return (<Editor
    editorState={editorState}
    toolbarClassName="toolbarClassName"
    wrapperClassName="wrapperClassName"
    editorClassName="editorClassName"
    onEditorStateChange={this.onEditorStateChange}
    />);
}