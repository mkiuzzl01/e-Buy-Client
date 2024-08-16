import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Loading from "../../Share/Loading";

const View_Details = () => {
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();

  const { data: Product = [], isLoading } = useQuery({
    queryKey: ["Product Details"],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/Product/${id}`);
      return data;
    },
  });

  if (isLoading) return <Loading></Loading>;

  console.log(Product);
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center my-4">
      <div className="w-1/2">
        <img
          src={Product?.ProductImage}
          alt={Product?.ProductName}
          className="w-full"
        />
      </div>
      <div className="w-1/2">
        <h1 className="text-2xl font-semibold">{Product?.ProductName}</h1>
        <p>{Product?.Description}</p>
        <div className="divider"></div>
        <p>
          Price: <span>${Product?.Price}</span>
        </p>
        <p>
          <span className="text-orange-600">Rating:</span>{" "}
          <span className="text-orange-300">{Product?.Ratings}</span>
        </p>
        <p>Category: <span>{Product?.Category}</span></p>
        <p className="my-4">
          Creating time: <span>{Product?.CreationDate}</span>
        </p>
        <div className="my-4">
          <button
            title="Buy the Product"
            className="btn rounded-none bg-[#CBE4DE]"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default View_Details;
