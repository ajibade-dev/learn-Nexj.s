export default function Products({ params }: {params: {productsId: string}}){
    return(
        <>
        <h1>These are my products {params.productsId} </h1>
        <h2> Products 1</h2>
        <h2>products 2</h2>
        <h3>Products 3</h3>
        <p>Let's get it done sha</p>
        </>
        
    ) 
}