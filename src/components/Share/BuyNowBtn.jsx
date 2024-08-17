import React from "react";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const BuyNowBtn = ({ Product }) => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();

  const handleBuy = async (Product) => {
    const userEmail = user?.email;
    const info = { userEmail, Product };

    try {
      const { data } = await axiosPublic.post("/add-cart", info);
      if(data.insertedId){
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Product Add to Cart Successful",
          showConfirmButton: false,
          timer: 1500,
        });
      };
    } catch (error) {
      Swal.fire({
        position: "center",
        icon: "error",
        title:error?.message,
        showConfirmButton: false,
        timer: 1500,
      });
      // console.log(error.message);
    }
  };
  return (
    <div>
      <button
        onClick={() => handleBuy(Product)}
        title="Buy the Product"
        className="btn rounded-none bg-[#CBE4DE]"
      >
        Buy Now
      </button>
    </div>
  );
};

export default BuyNowBtn;
