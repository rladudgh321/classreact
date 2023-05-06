export default function TOC(props){
    const list = [];
    for(let i=0;i<props.topics.length;i++){
        const t = props.topics[i];
        list.push(<li key={t.id}><a href={'/content/'+t.id}
        onClick={e=>{
            e.preventDefault();
            props.onChangeMode(t.id);
        }}
        >{t.title}</a></li>);
    }
    return (
        <div>
            <ol>
                {list}
            </ol>
        </div>
    );
}