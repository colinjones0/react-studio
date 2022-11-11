// TODO: create a component that displays a single bakery item

export default function BakeryItem({item, name, description, price, image, addItem}) {
    return (
        <div> 
        <h3>{name}</h3> 
        <p>{description}</p>
        <p>{price}</p>
        <img className="item-image" src={image} alt={"item image"}/>
        <button onClick={() => {addItem(item)}}> Add to Cart </button>
        </div>
    );
}
