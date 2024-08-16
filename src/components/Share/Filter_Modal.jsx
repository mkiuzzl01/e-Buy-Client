import React from "react";

const Filter_Modal = ({ isOpen, setIsOpen, Products, setCategory }) => {
  const categories = new Set(Products.map((product) => product.Category));
  const brandNames = new Set(Products.map((product) => product.BrandName));

  const uniqueCategories = Array.from(categories);
  const uniqueBrandName = Array.from(brandNames);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const brand = form.Brand.value;
    const category = form.Category.value;
    const price = form.Price.value;

    const info = { brand, category, price };
    setCategory(info);
  };

  return (
    <div className="relative flex justify-center">
      <button
        onClick={() => setIsOpen(true)}
        className="btn rounded-none bg-[#CBE4DE]"
      >
        Categorization
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-sm p-6 overflow-hidden bg-white rounded-lg shadow-xl">
            <div className="flex justify-end mb-4">
              <button
                onClick={() => setIsOpen(false)}
                className="btn rounded-none text-red-400"
              >
                X
              </button>
            </div>
            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <select
                  name="Brand"
                  className="select select-bordered select-info w-full"
                >
                  <option disabled selected>
                    Select Brand
                  </option>
                  {uniqueBrandName.map((BrandName, idx) => (
                    <option key={idx}>{BrandName}</option>
                  ))}
                </select>
                <select
                  name="Category"
                  className="select select-bordered select-info w-full"
                >
                  <option disabled selected>
                    Select Category
                  </option>
                  {uniqueCategories.map((Category, idx) => (
                    <option key={idx}>{Category}</option>
                  ))}
                </select>
                <select
                  name="Price"
                  className="select select-bordered select-info w-full"
                >
                  <option disabled selected>
                    Select Price Range
                  </option>
                  <option value="1 to 100">1 to 100</option>
                  <option value="100 to 200">100 to 200</option>
                  <option value="200 to 500">200 to 500</option>
                  <option value="500 to 1000">500 to 1000</option>
                  <option value="1000 to 2000">1000 to 2000</option>
                  <option value="2000 to 5000">2000 to 5000</option>
                </select>
                <div className="mt-5 sm:flex sm:items-center sm:justify-between">
                  <div className="sm:flex sm:items-center">
                    <button className="btn rounded-none bg-[#CBE4DE]">
                      Find
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter_Modal;
