import { Component } from "react";

class TOC extends Component{
    render(){
        const list = [];
        const data = this.props.data;
        for(let i=0;i<data.length;i++){
            const t = data[i];
            list.push(<li key={t.id}><a href={t.id}
            onClick={event=>{
                event.preventDefault();
                this.props.onChagePage(Number(t.id));
            }}
            >{t.title}</a></li>);
        }
        return(
            <div>
                <ol>
                    {list}
                </ol>
            </div>
        );
    }
}

export default TOC;