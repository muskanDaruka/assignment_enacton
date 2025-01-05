import React from "react";
import Cards from "./Cards";

const AllStores = ({ className = "" }) => {
  const stores = [
    {
      id: 1,
      name: "Teamo - Revshare",
      logo: "https://laraback.enactweb.com/img/teamo-revshare.gif",
      homepage: "https://teamo.ru",
      cashback_percent: 80,
    },
    {
      id: 2,
      name: "Aviasales WW",
      logo: "https://laraback.enactweb.com/img/aviasales-ww.png",
      homepage: "http://aviasales.ru",
      cashback_percent: 80,
    },
    {
      id: 3,
      name: "Лабиринт",
      logo: "https://laraback.enactweb.com/img/labirint.png",
      homepage: "http://labirint.ru",
      cashback_percent: 80,
    },
    {
      id: 4,
      name: "City.Travel Many GEOs",
      logo: "https://laraback.enactweb.com/img/citytravel-many-geos.png",
      homepage: "https://new.city.travel/avia",
      cashback_percent: 80,
    },
    {
      id: 5,
      name: "Lightinthebox WW",
      logo: "https://laraback.enactweb.com/img/lightinthebox-ww.png",
      homepage: "https://lightinthebox.com",
      cashback_percent: 80,
    },
    {
      id: 6,
      name: "Aliexpress WW",
      logo: "https://laraback.enactweb.com/img/aliexpress-ww.png",
      homepage: "https://aliexpress.com",
      cashback_percent: 80,
    },
    {
      id: 7,
      name: "Puzzle English",
      logo: "https://laraback.enactweb.com/img/puzzle-english.svg",
      homepage: "https://puzzle-english.com",
      cashback_percent: 80,
    },
    {
      id: 8,
      name: "Banggood WW",
      logo: "https://laraback.enactweb.com/img/banggood-ww.png",
      homepage: "https://www.banggood.com",
      cashback_percent: 80,
    },
  ];

  return (
    <div className={`my-[50px] ${className}`}>
      <hr className="text-brown w-full" />
      <div className="grid grid-cols-4 gap-2">
        {stores.map((store) => (
          <Cards key={store.id} store={store} />
        ))}
      </div>
    </div>
  );
};

export default AllStores;
