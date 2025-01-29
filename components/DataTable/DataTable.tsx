import React from 'react';
import styles from './DataTable.module.css';

type Item = {
  id: number;
  name: string;
  email: string;
};

type DataTableProps = {
  data: Item[];
  itemsPerPage?: number;
};

export function DataTable({ data, itemsPerPage = 5 }: DataTableProps) {
  const [currentPage, setCurrentPage] = React.useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Slice data for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = data.slice(startIndex, endIndex);


  const goToPage = (page: number) => {
    if (page < 1) page = 1;
    if (page > totalPages) page = totalPages;
    setCurrentPage(page);
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };


  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className={styles.tableContainer}>
      <h2>Users</h2>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className={styles.pageInfo}>
          Page {currentPage} of {totalPages}
      </p>
     
      <div className={styles.pagination}>
        <button
          className={styles.pageButton}
          onClick={goToPrevPage}
          disabled={currentPage === 1}
        >
          Prev
        </button>
    
          {pageNumbers.map((page) => (
            <button
              key={page}
              className={styles.pageButton}
              onClick={() => goToPage(page)}
              disabled={page === currentPage}
            >
              {page}
            </button>
          ))}
 
        <button
          className={styles.pageButton}
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}
