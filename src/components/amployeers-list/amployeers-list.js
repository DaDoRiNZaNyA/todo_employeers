import AmployeersListItem from '../amployeers-list-item/amployeers-list-item'

import './amployeers-list.css';

const AmployeersList = ({data, onDelete, onToggleProp}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return(
            <AmployeersListItem 
            key={id} 
            {...itemProps}
            onDelete={() => onDelete(id)}
            onToggleProp={(e) => {onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}}/>
        )
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default AmployeersList;