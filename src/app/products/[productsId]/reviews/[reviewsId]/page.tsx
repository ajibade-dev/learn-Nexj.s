export default function ReviewDetail({ params }: {
    params:{
        productsId: string;
        reviewsId: string;
    }
}){
    return <h1>
        Review {params.productsId} for product {params.reviewsId}
    </h1>
}