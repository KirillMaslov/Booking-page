import React from "react";
import Review from "../../types/review";
import { ReviewCard } from "../ReviewCard";

type Props = {
    reviewsArr: Review[]
}


export const ReviewsList: React.FC<Props> = ({
    reviewsArr
}) => {
    return (
        <div className="reviews__list">
            {reviewsArr.map((review, index) => (
                <ReviewCard
                    key={index}
                    avatar={review.avatar}
                    reviewerName={review.reviewerName}
                    hotelName={review.hotelName}
                    daysAgoNum={review.daysAgoNum}
                    text={review.text}
                />)
            )}
        </div>
    )
}