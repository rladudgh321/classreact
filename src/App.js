import './App.css';
import { Component } from 'react';
import Subject from './components/Subject';
import TOC from './components/TOC';
import Content from './components/Content';






class App extends Component {
    constructor(props){
        super(props);
        this.state ={
            mode: 'welcome',
            select_id: null,
            welcome:{title:'welcome', desc:'hello, world'},
            read:{title:'readt', desc:'readd'},
            subject:{title:'WEB'},
            contents: [
                {id:1, title:'html', desc:'html is ...'},
                {id:2, title:'css', desc:'css is ...'},
                {id:3, title:'javascript', desc:'javascript is ...'}
            ]
        }
    }



  render(){
    let title,desc = null;
    if(this.state.mode === 'welcome'){
        title= this.state.welcome.title;
        desc = this.state.welcome.desc;
    } else if(this.state.mode === 'read'){
        for(let i=0;i<this.state.contents.length;i++){
            const t = this.state.contents[i];
            if(t.id === this.state.select_id){
                title = t.title;
                desc = t.desc;
            }
        }
    }
    return (
    <div className="App">
        <Subject title={this.state.subject.title} onChagePage={function(){

            this.setState({mode:'welcome'});
        }.bind(this)}/>
        <TOC data = {this.state.contents} onChagePage={function(id){
            this.setState({mode:'read', select_id:id});
        }.bind(this)} />
        <Content title={title} desc={desc} />
    </div>
    );
  }
}
export default App;
