import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAuth from "../../../Hooks/useAuth";
import Loading from "../../Share/Loading";
import PaymentBtn from "../../Share/PaymentBtn";
import { Helmet } from "react-helmet-async";

const Cart = () => {
  const { user, setLoading, loading } = useAuth();
  const axiosPublic = useAxiosPublic();
  const [cartProducts, setCartProducts] = useState([]);

  const getData = async () => {
    setLoading(true);
    const { data } = await axiosPublic.get(`/Cart-product/${user?.email}`);
    return setCartProducts(data);
  };
  useEffect(() => {
    getData();
    setLoading(false);
  }, [user]);

  if (loading) return <Loading></Loading>;

  return (
    <div>
      <Helmet>
        <title>e-Buy | Cart </title>
      </Helmet>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>SL</th>
              <th>Image</th>
              <th>Product Name</th>
              <th>Product Price</th>
              <th>Brand Name</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cartProducts.map((product, idx) => (
              <tr key={idx}>
                <th>{idx + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="h-12 w-12">
                      <img
                        src={product?.Product?.ProductImage}
                        alt={product?.Product?.ProductName}
                      />
                    </div>
                  </div>
                </td>
                <td>{product?.Product?.ProductName}</td>
                <td>{product?.Product?.Price}</td>
                <td>{product?.Product?.BrandName}</td>
                <td>{product?.Product?.Category}</td>
                <td>
                  <PaymentBtn></PaymentBtn>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
