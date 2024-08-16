import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import ProductCard from "../../Share/ProductCard";
import Loading from "../../Share/Loading";
import Filter_Modal from "../../Share/Filter_Modal";

const Shop = () => {
  const axiosPublic = useAxiosPublic();
  const [isOpen, setIsOpen] = useState(false);
  const [category, setCategory] = useState({});
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");

  console.log(category);
  console.log(sort);
  console.log(search);

  const { data: Products = [], isLoading } = useQuery({
    queryKey: ["Products"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/Products");
      return data;
    },
  });

  if (isLoading) return <Loading></Loading>;

  const handleSort = (range) => {
    setSort(range);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    const form = e.target;
    const search = form.search.value;
    setSearch(search);
  };

  return (
    <div>
      <div className="m-4">
        <form onSubmit={handleSearch}>
          <div className="flex items-center ">
            <input
              name="search"
              type="text"
              placeholder="Type here"
              className="input input-bordered input-info w-full rounded-none"
            />
            <button
              title="Search The Product"
              className="btn rounded-none bg-[#CBE4DE]"
            >
              Search
            </button>
          </div>
        </form>
        <div className="flex items-center gap-4 justify-center my-4">
          <div>
            <Filter_Modal
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              Products={Products}
              setCategory={setCategory}
            ></Filter_Modal>
          </div>
          <div className="dropdown dropdown-hover">
            <div
              tabIndex={0}
              role="button"
              className="btn rounded-none bg-[#CBE4DE]"
            >
              Sort
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              <li>
                <button onClick={() => handleSort("Low to High")}>
                  Low to High
                </button>
              </li>
              <li>
                <button onClick={() => handleSort("High to Low")}>
                  High to Low
                </button>
              </li>
              <li>
                <button onClick={() => handleSort("Newest first")}>
                  Newest first
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-4">
        {Products.map((Product, idx) => (
          <ProductCard Product={Product} key={idx}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Shop;
