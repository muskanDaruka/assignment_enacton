import React from 'react';

function Cards({ stores }) {
    const { name, logo, homepage, cashback_percent } = stores;

    return (
        <div className='flex flex-wrap w-4/16'>
            <div className='w-auto h-auto bg-white rounded-xl p-4 shadow-md'>
                <img
                    src={logo}
                    alt={name}
                    className="w-full h-40 object-contain rounded-lg"
                />
                <h2 className="text-lg font-bold mt-2">{name}</h2>
                <p className="text-sm text-gray-500">
                    Cashback up to {cashback_percent}%!
                </p>
                <div className="w-full h-8 bg-black mt-2 rounded-md flex items-center justify-center">
                    <a
                        href={homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white text-base"
                    >
                        Shop Now
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Cards;