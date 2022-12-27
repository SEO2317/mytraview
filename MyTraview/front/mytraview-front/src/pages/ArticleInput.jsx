import React, { useState } from 'react';
import EditorComponent from './EditorComponent';

const ArticleInput = () => {
    const [desc, setDesc] = useState('');
    
    function onEditorChange(value) {
        setDesc(value)
    }
    
    return (
        <div>
          <EditorComponent value={desc} onChange={onEditorChange} />
        </div>
    )
}

export default ArticleInput