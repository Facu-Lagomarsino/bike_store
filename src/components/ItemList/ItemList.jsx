import Item from "../Item/Item";

function ItemList({ products, cart, setCart, category }) {

    return (

        <>

        { products.length > 0 && products.map((item) => (
            <Item 
            key={item.id.toString()} 
            id={item.id} 
            description={item.description} 
            image={item.image}
            stock={item.stock}
            category={item.category} 
            cart={cart}
            setCart={setCart} />
        ))}    
          
        </>

    );
}

export default ItemList;