import AmployeersListItem from '../amployeers-list-item/amployeers-list-item'

import './amployeers-list.css';

const AmployeersList = () => {
    return (
        <ul className="app-list list-group">
            <AmployeersListItem></AmployeersListItem>
            <AmployeersListItem></AmployeersListItem>
            <AmployeersListItem></AmployeersListItem>
        </ul>
    )
}

export default AmployeersList;