import AppInfo from '../app-info/app-info';
import SearchPanel from '../serarch-panel/search-panel'; 
import AppFilter from '../app-filter/app-filter';
import AmployeersList from '../amployeers-list/amployeers-list';
import AmployeersAddForm from '../amployeers-add-form/amployeers-add-form';

import './app.css'

function App() {
    return (
        <div className='app'>
            <AppInfo/>

            <div className='search-panel'> 
                <SearchPanel></SearchPanel>
                <AppFilter></AppFilter>
            </div>

            <AmployeersList></AmployeersList>
            <AmployeersAddForm></AmployeersAddForm>
        </div>
    )
}

export default App;