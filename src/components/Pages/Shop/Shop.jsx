import React, { useEffect, useState } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import ProductCard from "../../Share/ProductCard";
import Loading from "../../Share/Loading";
import Filter_Modal from "../../Share/Filter_Modal";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import useAuth from "../../../Hooks/useAuth";
import { Helmet } from "react-helmet-async";

const Shop = () => {
  const { setLoading, loading } = useAuth();
  const axiosPublic = useAxiosPublic();
  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilter] = useState({});
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [totalDocuments, setTotalDocuments] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const queryString = new URLSearchParams({
        search,
        filter: JSON.stringify(filter),
        sort,
        page: currentPage,
        size: itemsPerPage,
      }).toString();

      try {
        const { data } = await axiosPublic.get(`/Products?${queryString}`);
        setProducts(data.data);
        setTotalDocuments(data.totalDocuments);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    getData();
  }, [itemsPerPage, currentPage, search, sort, filter]);

  const handleSort = (range) => {
    setSort(range);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const form = e.target;
    const searchValue = form.search.value;
    setSearch(searchValue);
  };

  const numberOfPages = Math.ceil(totalDocuments / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()].map((element) => element + 1);

  const handlePagination = (value) => {
    setCurrentPage(value);
  };

  if (loading) return <Loading></Loading>;

  return (
    <div className="my-10">
      <Helmet>
        <title>e-Buy | Shop </title>
      </Helmet>
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
              setFilter={setFilter}
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
        {products.map((Product, idx) => (
          <ProductCard Product={Product} key={idx}></ProductCard>
        ))}
      </div>

      {/* pagination */}
      <div className="text-center my-10 space-x-4">
        <button
          disabled={currentPage === 1}
          onClick={() => handlePagination(currentPage - 1)}
          className="btn rounded-none bg-[#CBE4DE] items-center"
        >
          <span>
            <FaArrowLeftLong className="text-blue-400 " />
          </span>
          <span>Prev</span>
        </button>
        {pages.map((page) => (
          <button
            className={currentPage === page ? " btn bg-green-500" : "btn"}
            onClick={() => handlePagination(page)}
            key={page}
          >
            {page}
          </button>
        ))}
        <button
          disabled={currentPage === numberOfPages}
          onClick={() => handlePagination(currentPage + 1)}
          className="btn rounded-none bg-[#CBE4DE] items-center"
        >
          <span>Next</span>
          <span>
            <FaArrowRightLong className="text-blue-400 " />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Shop;
