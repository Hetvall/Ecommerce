import { useState } from "react";

const usePaginate = (data, itemsPerPage) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const paginate = (numPage) => setCurrentPage(numPage);

  const currentData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return { currentPage, totalPages, paginate, currentData };
};

export default usePaginate;
