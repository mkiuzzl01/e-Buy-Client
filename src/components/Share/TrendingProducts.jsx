import React from "react";
import ViewDetailsBtn from "./ViewDetailsBtn";
import BuyNowBtn from "./buyNowBtn";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Loading from "./Loading";
import { useQuery } from "@tanstack/react-query";

const TrendingProducts = () => {
    const axiosPublic = useAxiosPublic();

  const { data: TrendingProducts = [], isLoading } = useQuery({
    queryKey: ["TrendingProducts"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/Trending-products");
      return data;
    },
  });

  if (isLoading) return <Loading />;
  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center justify-around my-10">
        <div className="text-center lg:text-start">
          <h1 className="text-3xl">Trending Now</h1>
          <p>
          Explore the hottest products that everyone is talking about. Don’t miss out on the best-selling items!
          </p>
        </div>
        <div>
          <img
            src="https://i.postimg.cc/526PDW9p/image.png"
            alt=""
            className="w-52"
          />
        </div>
      </div>
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-4">
        {TrendingProducts.map((Product) => (
          <div
            key={Product.Id}
            className="product-card p-4 bg-white rounded shadow"
          >
            <img
              src={Product.ProductImage}
              alt={Product.ProductName}
              className="w-full h-48 object-cover"
            />
            <h3 className="mt-2 text-xl font-semibold">
              {Product.ProductName}
            </h3>
            <p className="text-orange-600 font-bold">Price: ${Product.Price}</p>
            <p className="text-gray-400">
              Published on:{" "}
              {new Date(Product.CreationDate).toLocaleDateString()}
            </p>
            <div className="flex items-center justify-around">
              <ViewDetailsBtn Product={Product}></ViewDetailsBtn>
              <BuyNowBtn></BuyNowBtn>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingProducts;
