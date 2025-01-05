import React from "react";

const Categories = ({ className }) => {
  const categories = [
    { title: "11.11" },
    { title: "Accesories" },
    { title: "Accesories and Schmuck" },
    { title: "Activities" },
    { title: "Admitad Heroes Marathon 2021" },
    { title: "Admitad Heroes Marathon" },
    { title: "Adult" },
    { title: "Adult & Gambling" },
    { title: "Air" },
    { title: "Airport Parking" },
    { title: "An- & Verkauf / Re-commerce" },
    { title: "Android" },
    { title: "Apparel" },
    { title: "Art & Culture" },
    { title: "Art & Entertainment" },
    { title: "Art & Living" },
    { title: "Art/Music/Photography" },
    { title: "Art/Photo/Music" },
    { title: "Arts & Crafts" },
    { title: "Animals" },
    { title: "Animals and Plant life" },
  ]
  return (
    <section className="bg-gray-200">
      <div className="relative w-[100%] h-full rounded-2xl bg-white border-4">
        <h1 className="text-left p-6 pb-0 text-black font-semibold text-xl ">Store Categories</h1>
        <div className="absolute w-[90%] h-auto rounded-2xl m-5 bg-gray-200 p-4">
          {categories.map((item, index) => (
            <div key={index} className="text-xl font-normal">
              {item.title}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
