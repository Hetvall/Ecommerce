import usePaginate from "../../../hooks/usePaginate";

const Tables = ({ data, itemsPerPage, changeItemsPerPage }) => {
  const { currentData, currentPage, paginate, totalPages } = usePaginate(
    data,
    itemsPerPage
  );

  return (
    <div>
      {currentData.map((el) => (
        <div key={el.id}>
          <h3>{el.name}</h3>
        </div>
      ))}
      <select onChange={(e) => changeItemsPerPage(e.target.value)}>
        <option label="5"></option>
        <option label="10"></option>
        <option label="15"></option>
      </select>

      <button
        onClick={() => paginate(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Back
      </button>
      <span>
        This is the page {currentPage} from {totalPages}
      </span>
      <button
        onClick={() => paginate(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Tables;
