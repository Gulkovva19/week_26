import '../styles/styles.css'

function Marvel(props) {
    return (
        <div className="marvel-card">
            <div className="marvel-name">{props.name}</div>
            <div className="marvel-universe">{props.universe}</div>
            <img src={props.image} alt="hero"></img>
            <div className="marvel-energy">{props.energy}</div>
            <div className="marvel-detail">{props.detail}</div>
        </div>
    );
}

export default Marvel;