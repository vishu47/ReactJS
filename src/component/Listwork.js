import './Listwork.css'


import React from 'react'

function Listwork(props) {
    const items = props.Item;
    const listItem = items.map(i => {
        return(
            <div className="list_item" key = {i.key}>
                <p>
                    <input type="text" id={i.key} value={i.todowork} 
                        onChange = {(e) => props.updateWork(e.target.value,i.key)}
                    />
                 
                    <button onClick={()=>props.deleteItem(i.key)}>x</button>
                </p>
            </div>
        )
    })
    return (
        <div>
            {listItem}
        </div>
    )
}

export default Listwork
