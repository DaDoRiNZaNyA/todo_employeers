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
            ],
            term: '',
            filter: 'all'
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

    serchEmp = (items, term) => {
        if (term.length === 0){
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case 'like':
                return items.filter(item => item.like);
            case 'moreThen1000':
                return items.filter(item => item.salary > 1000);
            default:
                return items;
        } 
    }

    onFilterSelect = (filter) => {
        this.setState({filter})
    }

    render() {
        const {data, term, filter} = this.state;
        const amployeers = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        const visibleData = this.filterPost(this.serchEmp(data, term), filter);

        return (
            <div className='app'>
                <AppInfo amployeers={amployeers} increased={increased}/>
    
                <div className='search-panel'> 
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}></SearchPanel>
                    <AppFilter filter={filter}
                    onFilterSelect={this.onFilterSelect}></AppFilter>
                </div>
    
                <AmployeersList data={visibleData}
                onDelete={this.deleteItem}
                onToggleProp={this.onToggleProp}></AmployeersList>
                <AmployeersAddForm onAdd={this.addItem}></AmployeersAddForm>
            </div>
        )
    }
    
}

export default App;