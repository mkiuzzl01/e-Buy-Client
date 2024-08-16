import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import ProductCard from "../../Share/ProductCard";
import Loading from "../../Share/Loading";

const Shop = () => {
  const axiosPublic = useAxiosPublic();

  const { data: Products = [], isLoading} = useQuery({
    queryKey: ["Products"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/Products");
      return data;
    },
  });

  if (isLoading) return <Loading></Loading>
  
  return (
    <div>
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-4">
        {Products.map((Product, idx) => (
          <ProductCard Product={Product} key={idx}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Shop;
