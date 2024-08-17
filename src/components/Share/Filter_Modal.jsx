import React from "react";

const Filter_Modal = ({ isOpen, setIsOpen, setFilter }) => {
  const categories = [
    "Smartphone",
    "Laptop",
    "Gaming Console",
    "Drone",
    "Smart Home",
    "Headphones",
    "Television",
    "Tablet",
    "Desktop",
    "Streaming Device",
    "Smartwatch",
    "Camera",
    "Mouse",
    "Monitor",
    "Fitness Tracker",
    "Earbuds",
    "Accessories",
    "Speaker",
    "Smart Speaker",
  ];

  const brandNames = [
    "Apple",
    "Asus",
    "Sony",
    "DJI",
    "Google",
    "Samsung",
    "Roku",
    "HP",
    "Logitech",
    "LG",
    "GoPro",
    "Fitbit",
    "Canon",
    "NVIDIA",
    "Bose",
    "Dell",
    "Nikon",
    "Amazon",
    "Razer",
    "Microsoft",
  ];
  const priceRange = [
    "1 to 100",
    "100 to 200",
    "200 to 500",
    "500 to 1000",
    "1000 to 2000",
    "2000 to 5000",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const brand = form.Brand.value;
    const category = form.Category.value;
    const price = form.Price.value;
    setFilter({ brand, category, price });
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
                  name="Category"
                  className="select select-bordered select-info w-full"
                >
                  <option value="" disabled selected>
                    Select Category
                  </option>
                  {categories.map((Category, idx) => (
                    <option value={Category} key={idx}>
                      {Category}
                    </option>
                  ))}
                </select>
                <select
                  name="Brand"
                  className="select select-bordered select-info w-full"
                >
                  <option value="" disabled selected>
                    Select Brand
                  </option>
                  {brandNames.map((brandName, idx) => (
                    <option value={brandName} key={idx}>
                      {brandName}
                    </option>
                  ))}
                </select>
                <select
                  name="Price"
                  className="select select-bordered select-info w-full"
                >
                  <option value="" disabled selected>
                    Select Price Range
                  </option>
                  {priceRange.map((price, idx) => (
                    <option value={price} key={idx}>
                      {price}
                    </option>
                  ))}
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
