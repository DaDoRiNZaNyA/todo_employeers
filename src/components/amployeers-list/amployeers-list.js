import AmployeersListItem from '../amployeers-list-item/amployeers-list-item'

import './amployeers-list.css';

const AmployeersList = ({data}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return(
            <AmployeersListItem key={id} {...itemProps}/>
        )
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default AmployeersList;