import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import FullTableInvoices from "./FullTableInvoices";

const PaginationInvoices = ({ saveTable }) => {
  const [itemsPerPage] = useState(10);
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  //console.log(endOffset);
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = saveTable.slice(itemOffset, endOffset);
  //console.log(currentItems);
  const pageCount = Math.ceil(saveTable.length / itemsPerPage);
  //console.log(pageCount);

  const handlePageClick = (event) => {
    const newOffset = Math.min(
      event.selected * itemsPerPage,
      saveTable.length - itemsPerPage
    );
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  return (
    <div>
      <FullTableInvoices currentItems={currentItems} />
      <ReactPaginate
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="<"
        containerClassName="pagination"
        pageClassName="pagination__item"
        pageLinkClassName="pagination__link"
        previousClassName="pagination__item"
        previousLinkClassName="pagination__link pagination__link--previous"
        nextClassName="pagination__item"
        nextLinkClassName="pagination__link pagination__link--next"
        breakLabel="..."
        breakClassName="pagination__item"
        breakLinkClassName="pagination__link"
        activeLinkClassName="pagination--active"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default PaginationInvoices;
