"use client";

import { notFound } from "next/navigation";

function getRandomInt(count : number) {
    return Math.floor(Math.random() * count)
}


export default function ReviewDetail({ params }: {
    params:{
        productsId: string;
        reviewsId: string;
    }
})

{
   const random =  getRandomInt(2)
   if(random == 1){
    throw new Error("error loading review since it's 1.")
   }
    if(parseInt(params.reviewsId) > 1000){
        notFound()
    }
    return <h1>
        Review {params.productsId} for product {params.reviewsId}
    </h1>
}