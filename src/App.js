import React, { Component } from 'react';
import {Input,Button} from 'antd';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';

class App extends Component {
  state={
    datas:[1,2,3,4]
  }

  handleClick=(index)=>{
    this.state.datas.splice(index,1);
    this.setState({
      datas:this.state.datas
    })
  }

  handleadd=()=>{
    this.setState({
      datas:this.state.datas.concat('')
    })
  }

  handlesave=()=>{
    this.state.datas.forEach((i,index)=>{
      if(!i){
         let btn=this.refs[`btn${index}`]
         if(btn){
            btn.input.style.borderColor='red';
         }
      }
    })
    this.setState({datas:this.state.datas});
  }

  handleChange=(e,index)=>{
    this.state.datas[index]=e.target.value;
    this.setState({
      datas:this.state.datas
    })
  }

  render() {
    const datas=this.state.datas;
    return (
     <div style={{textAlign:'center'}}>
        {datas.map((i,index)=>{
           return <div >
              <Input ref={`btn${index}`} value={i} style={{width:'10%'}} onChange={e=>this.handleChange(e,index)}/>  
              <Button type='danger' onClick={(e)=>this.handleClick(index)}>delete</Button>
          </div>  
        })}
        <Button type='primary' onClick={this.handlesave} style={{marginRight:'24px'}}>save</Button>
        <Button type='primary' onClick={this.handleadd}>add</Button>
      </div>    
    );
  }
}

export default App;
