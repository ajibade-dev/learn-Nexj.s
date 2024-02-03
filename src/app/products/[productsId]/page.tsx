import { Metadata } from "next"
import { resolve } from "path";

type Props = {
    params:{
        productsId: string
    }
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const title = await new Promise( resolve => {setTimeout(() =>{
        resolve ( `iPhone ${params.productsId}`)
    }, 1000)})
    return {
        title: `Product ${title}`
    }
};

export default function Products({ params }: Props){
    return(
        <>
        <h1>These are my products {params.productsId} </h1>
        <h2> Products 1</h2>
        <h2>products 2</h2>
        <h3>Products 3</h3>
        <p>Let&apos;s get it done sha</p>
        </>
        
    ) 
}