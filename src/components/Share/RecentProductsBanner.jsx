import React from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Loading from "./Loading";
import { useQuery } from "@tanstack/react-query";
import BuyNowBtn from "./buyNowBtn";
import ViewDetailsBtn from "./ViewDetailsBtn";

const RecentProductsBanner = () => {
  const axiosPublic = useAxiosPublic();

  const { data: recentProducts = [], isLoading } = useQuery({
    queryKey: ["RecentProducts"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/Recent-products");
      return data;
    },
  });

  if (isLoading) return <Loading />;
  return (
    <div className="flex flex-col">
      <div className="flex flex-col lg:flex-row items-center justify-around my-10">
        <div className="text-center lg:text-start">
          <h1 className="text-3xl">Latest Arrivals</h1>
          <p>
            Discover the newest additions to our collection, freshly added and
            ready for you!
          </p>
        </div>
        <div>
          <img
            src="https://i.postimg.cc/zBxyYK3m/360-F-386860502-B62j-MXd-N9g-Rcy-JVZf-Sspaw-SMljs6-MATO.jpg"
            alt=""
            className="w-80"
          />
        </div>
      </div>
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-4">
        {recentProducts.map((Product) => (
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
              <BuyNowBtn Product={Product}></BuyNowBtn>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProductsBanner;
