import React from "react";
import { Button } from "../../share/Button";
import { Wrapper } from "./Styles";
import { IoIosArrowDroprightCircle,IoIosArrowDropleftCircle } from 'react-icons/io'

const Paginate = ({
  currentPage,
  setCurrentPage,
  totalProjects,
  projectsPerPage,
}) => {
  const totalPages = Math.ceil(totalProjects / projectsPerPage);

  let pages = [];

  for (let p = 1; p <= totalPages; p++) {
    pages.push(p);
  }

  return (
    <Wrapper>
      <ul className="pagination">
        <li className={`page-item ${currentPage === 1 && `disabled`}`}>
          <Button
            variant="tertiary"
            onClick={() => setCurrentPage(currentPage - 1)}
          >
           <IoIosArrowDropleftCircle color="var(--grey-color-50)" fontSize={32} />
          </Button>
        </li>
        <div>
        {pages.map((page) => (
          <li
            key={page}
            className={`page-item ${page === currentPage && `active`}`}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </li>
        ))}
        </div>
        <li className={`page-item ${currentPage === totalPages && `disabled`}`}>
          <Button
            variant="tertiary"
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            <IoIosArrowDroprightCircle color="var(--grey-color-50)" fontSize={32} />
          </Button>
        </li>
      </ul>
    </Wrapper>
  );
};

export default Paginate;
