import React, { useEffect, useState } from "react";
import Cards from "./Card";
import axios from "axios";
import useScrollPosition from "./useSearchPosition";

const AllStores = ({ selectedCategory, searchQuery, sortBy }) => {
  const [stores, setStores] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const containerRef = useScrollPosition("allStoresScroll", 100);

  const fetchStores = (page, searchQuery, sortBy) => {
    setLoading(true);
    let url = `http://localhost:3001/stores?_page=${page}&_limit=20`;

    if (selectedCategory) url += `&cats=${selectedCategory}`;
    if (searchQuery) url += `&q=${searchQuery}`;
    if (sortBy) url += `&_sort=${sortBy}`;

    axios
      .get(url)
      .then((res) => {
        setStores((prev) => [...prev, ...res.data]);
        setLoading(false);
      })
      .catch(() => setLoading(false)); 
  };

  useEffect(() => {
    fetchStores(page, searchQuery, sortBy);
  }, [page, selectedCategory, searchQuery, sortBy]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 100
    ) {
      if (!loading) {
        setPage((prev) => prev + 1);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4" ref={containerRef}>
      {stores.map((store) => (
        <Cards key={store.id} store={store} />
      ))}
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default AllStores;
