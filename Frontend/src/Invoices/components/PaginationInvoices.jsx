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
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        //   pageClassName="page-item"
        //   pageLinkClassName="page-link"
        //   previousClassName="page-item"
        //   previousLinkClassName="page-link"
        //   nextClassName="page-item"
        //   nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default PaginationInvoices;
