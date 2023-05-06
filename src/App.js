import Subject from "./component/Subject";
import TOC from "./component/TOC";
import Article from "./component/Article";
import { useState } from "react";



export default function App(){
    const [mode,setMode] = useState('welcome');
    const [id,setId] = useState(null);
    const topics = [
        {id:1, title:'html', desc:'html is ...'},
        {id:2, title:'css', desc:'css is ...'}
    ];
    let content = null;
    if(mode === 'welcome'){
        content = <Article title="WELCOME" desc="HELLO WORLD"></Article>
    } else if(mode === 'read'){
        let title,desc = null;
        for(let i=0;i<topics.length;i++){
            if(topics[i].id === id){
                title = topics[i].title;
                desc = topics[i].desc;
            }
        }
        content = <Article title={title} desc={desc}></Article>
    }
    return (
        <div>
            <Subject title="WEB"></Subject>
            <TOC topics={topics} onChangeMode={id=>{
                setMode('read');
                setId(id);
            }}></TOC>
            {content}
        </div>
    );
}