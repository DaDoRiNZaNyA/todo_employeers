import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../serarch-panel/search-panel'; 
import AppFilter from '../app-filter/app-filter';
import AmployeersList from '../amployeers-list/amployeers-list';
import AmployeersAddForm from '../amployeers-add-form/amployeers-add-form';

import './app.css'

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            data: [
                {name: 'John', salary: 800, increase: false,like: true, id: 1},
                {name: 'Ivan', salary: 1200, increase: true, like: false, id:2},
                {name: 'Iuda', salary: 8000, increase: false, like: false, id:3}
            ]
        }
        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            like: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
        
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }

    render() {
        const amployeers = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;

        return (
            <div className='app'>
                <AppInfo amployeers={amployeers} increased={increased}/>
    
                <div className='search-panel'> 
                    <SearchPanel></SearchPanel>
                    <AppFilter></AppFilter>
                </div>
    
                <AmployeersList data={this.state.data}
                onDelete={this.deleteItem}
                onToggleProp={this.onToggleProp}></AmployeersList>
                <AmployeersAddForm onAdd={this.addItem}></AmployeersAddForm>
            </div>
        )
    }
    
}

export default App;