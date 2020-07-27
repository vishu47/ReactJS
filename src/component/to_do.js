import React, { Component } from 'react'
import Listwork from './Listwork'
import './to_do.css'

export default class TODO extends Component {
    constructor(){
        super()
        this.state = {
           item:[],
           text: {
                todowork : '',
                key : ' ',
           }
        }
        // this.setUpdate = this.setUpdate.bind(this)
    }
    
    todoInputHandler = (e) => {
        // console.log(this.state)
        this.setState({
            text:{
                todowork : e.target.value,
                // key should be unique
                key: Date.now()
            }
        })
    }

    data = (e) => {
        e.preventDefault()
        
        const newItem = this.state.text;
        // console.log(newItem)
        if (newItem !== ""){
            // destructuring of the array and add in new array
            const updatedItem = [...this.state.item,newItem]
            this.setState({
                item:updatedItem,
                text:{
                    todowork : '',
                    key : ' ',
                }
            })
            // console.log(updatedItem)
        } 
        
    }
    
    deleteItem = (key) =>{
        console.log(this.state.item)
        const listItem = this.state.item.filter(i => i.key!==key);
        console.log(listItem)
        this.setState({
            item : listItem
        })
    }
// comming as key value from listwork
    updateWork = (text1,key) => {
        const item1 = this.state.item;
        item1.map(i => {
            if(i.key === key){
            i.todowork = text1
            // console.log(i.todowork)
            }
        })
        this.setState({
            item : item1
        })
    }
 
    render() {
        return (
            <div className="todo">
                <form onSubmit={this.data}>
                    <h1>List Your Work</h1>
                    <input type="text" placeholder="add work" onChange={this.todoInputHandler} name="todowork" value={this.state.text.todowork}/>
                    <button>Add Me</button>
                    <p>{this.state.todowork}</p>
                </form>
                <Listwork 
                Item = {this.state.item} 
                deleteItem = {this.deleteItem} 
                updateWork = {this.updateWork}
                />
            </div>
        )
    }
}
