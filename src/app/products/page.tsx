import Link from "next/link"
export default function Products(){
    const productId = 100
    return(
        <>
        <Link href="/">Home</Link>
        <h1>These are my products</h1>
        <h2><Link href="products/1">Products 1</Link></h2>
        <h2><Link href="products/2">products 2</Link></h2>
        <h3><Link href="products/3" replace>Products 3</Link></h3>
        <h3><Link href={`products/${productId}`}>Products {productId}</Link></h3>
        </>
        
    ) 
}  