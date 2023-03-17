import React, { FC } from "react";
import Button from "./Button";

const CardUlasan = (props: any) => {
  const {cardulasan} = props;

  return (
    <>
      <div className="card w-11/12 h-[32rem] bg-bgCard mt-10 overflow-hidden ">
        <div className="card-body items-center text-center p-2">
          <div className="flex flex-row justify-center w-full">
            {cardulasan.id}
            <div className="rating w-[30%] justify-end card-title text-color3 mr-5">{cardulasan.rating}
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            </div>
            <p className="w-[70%] justify-start card-title text-color3 capitalize font-bold font-poppins  text-black ml-5 text-xl">
              {cardulasan.feedback}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardUlasan;
