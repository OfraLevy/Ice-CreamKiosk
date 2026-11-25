export default function FlavorList(props) {
    return props.flavors.map(flavor => (
        <div className = {flavor.isSoldOut ? "sold-out" : "available"} >
            <h1>{flavor.name}</h1>
            <p>{flavor.scoopsSelected}</p>
            <button>+</button>
            <button>-</button>
        </div>
    ))
}
