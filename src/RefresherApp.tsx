import ItemCounter from "./shopping-cart/ItemCounter";


interface ItemInCart {
    productName: string;
    quantity: number;
}


const itemsInCart: ItemInCart[] = [
    {productName: "Nintendo Switch 2", quantity: 1},
    {productName: "Controller" , quantity: 2},
    {productName: "SSB Ultimate", quantity: 1},
];


const RefresherApp = () => {
  return (
    <>
      <h1>Shopping Cart</h1>

      {itemsInCart.map(({productName, quantity}) => (
        <ItemCounter key={productName} name={productName} quantity={quantity} />
      ))}
    </>
  )
}

export default RefresherApp