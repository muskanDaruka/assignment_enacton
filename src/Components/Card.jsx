import React from 'react';

function Cards({ store }) {
    const [isFavorited, setIsFavorited] = React.useState(false);

    const toggleFavorite = () => {
      setIsFavorited(!isFavorited);
    };
  
    const cashbackText = store.cashback_enabled
      ? `${store.rate_type === "flat" ? "Flat" : "Upto"} ${
          store.amount_type === "fixed"
            ? `$${store.cashback_amount.toFixed(2)}`
            : `${store.cashback_amount.toFixed(2)}%`
        } cashback`
      : "No cashback available";
  
    return (
      <div className="border rounded-lg p-4 relative">
        <img
          src={store.logo}
          alt={store.name}
          className="w-16 h-16 mx-auto mb-4"
        />
        <h3 className="text-center text-lg font-bold">{store.name}</h3>
        <p className="text-center text-sm text-gray-600">{cashbackText}</p>
        <button
          className={`absolute top-2 right-2 ${
            isFavorited ? "text-red-500" : "text-gray-500"
          }`}
          onClick={toggleFavorite}
        >
          ♥
        </button>
      </div>
    );
  };
  

export default Cards;