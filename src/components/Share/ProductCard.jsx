import React from "react";

const ProductCard = ({Product}) => {
    console.log(Product);
  return (
    <div>
      <div className="card rounded-none bg-base-100 w-full h-96 shadow-xl">
        <figure>
          <img
            className="w-52 m-auto"
            src={Product?.ProductImage}
            alt={Product?.ProductName}
          />
        </figure>
        <div className="card-body justify-evenly">
          <h2 className="card-title">{Product?.ProductName}</h2>
          <div className="flex justify-center">
            <p>${Product?.Price}</p>
            <p><span className="text-orange-600">Rating</span> <span className="text-orange-300">{Product?.Ratings}</span></p>
          </div>
          <div className="card-actions justify-between items-center">
            <button title="View Details" className="hover:btn">View Details</button>
            <button title="Buy the Product" className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
