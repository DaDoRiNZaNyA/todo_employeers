import './app-info.css'

const AppInfo = ({increased, amployeers}) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников о компании N</h1>
            <h2>Общее чисто сотрудников: {amployeers}</h2>
            <h2>Премию получат: {increased}</h2>
        </div>
    )
}

export default AppInfo;