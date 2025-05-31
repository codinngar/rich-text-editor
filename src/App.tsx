import { useState } from "react";
import RichTextEditor from "./components/RichTextEditor";

const App = () => {
    const [content, setContent] = useState("");

    const onChange = (content: string) => {
        setContent(content);
    };

    return (
        <div className="max-w-[700px] my-12 mx-auto">
            <RichTextEditor content={content} onChange={onChange} />
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    );
};

export default App;
