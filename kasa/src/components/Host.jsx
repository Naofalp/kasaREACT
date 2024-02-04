export default function Host(props) {
    return (
        <aside className="host_comp">
            <p className="host_name redFont">{props.hostName}</p>
            <img className="host_Picture" src={props.hostPic} alt={props.id} />
        </aside>
    );
}