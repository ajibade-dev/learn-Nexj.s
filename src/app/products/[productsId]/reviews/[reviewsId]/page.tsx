import { notFound } from "next/navigation";
export default function ReviewDetail({ params }: {
    params:{
        productsId: string;
        reviewsId: string;
    }
})

{
    if(parseInt(params.reviewsId) > 1000){
        notFound()
    }
    return <h1>
        Review {params.productsId} for product {params.reviewsId}
    </h1>
}