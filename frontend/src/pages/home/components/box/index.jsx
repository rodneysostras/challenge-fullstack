export default function Box({children, image, title}) {
    return (
        <div className="nav-actions">
            <img src={image} height="98px" width="98px"/>
            <h2>{ title }</h2>
            <div>
                { children }
            </div>
        </div>
    )
}
