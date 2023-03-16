import AppInfo from '../app-info/app-info';
import SearchPanel from '../serarch-panel/search-panel'; 
import AppFilter from '../app-filter/app-filter';
import AmployeersList from '../amployeers-list/amployeers-list';
import AmployeersAddForm from '../amployeers-add-form/amployeers-add-form';

import './app.css'

function App() {

    const data = [
        {name: 'John', salary: 800, increase: false, id: 1},
        {name: 'Ivan', salary: 1200, increase: true, id:2},
        {name: 'Iuda', salary: 8000, increase: false, id:3}
    ];

    return (
        <div className='app'>
            <AppInfo/>

            <div className='search-panel'> 
                <SearchPanel></SearchPanel>
                <AppFilter></AppFilter>
            </div>

            <AmployeersList data={data}></AmployeersList>
            <AmployeersAddForm></AmployeersAddForm>
        </div>
    )
}

export default App;