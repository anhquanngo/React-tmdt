/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useHistory } from "react-router-dom";
import queryString from "query-string";

function Pagination({ onClickPage, pages }) {
  const [paginate, updatePaginate] = React.useState([]);

  const history = useHistory();

  const _onClickPage = (e, page) => {
    e.preventDefault();

    const query = queryString.parse(history.location.search);
    query.page = page;

    history.push({
      search: queryString.stringify(query),
    });
  };

  const calPage = (delta = 2) => {
    const range = [],
      rangeWithDots = [],
      { currentPage, total, limit } = pages,
      left = currentPage - delta,
      right = currentPage + delta + 1,
      totalPage = total && Math.ceil(total / limit);

    let l;

    if (pages?.hasPrev) {
      rangeWithDots.push({
        title: "Prev",
        page: pages.prev,
      });
    }

    for (let i = 1; i <= totalPage; i++) {
      if (i === 1 || i === totalPage || (i >= left && i < right)) {
        range.push(i);
      }
    }

    for (let i of range) {
      if (l && i - l !== 1) {
        rangeWithDots.push({
          title: "...",
        });
      }
      rangeWithDots.push({
        title: `${i}`,
        page: i,
      });
      l = i;
    }

    if (pages?.hasNext) {
      rangeWithDots.push({
        title: "Next",
        page: pages.next,
      });
    }
    updatePaginate(rangeWithDots);
  };

  React.useEffect(() => {
    calPage();
  }, [pages]);

  return (
    <div id="pagination">
      <ul className="pagination">
        {paginate.map((item, key) => {
          return (
            <li
              key={key}
              className={`page-item ${item.page === pages.currentPage &&
                "active"}`}
            >
              <a
                className="page-link "
                onClick={(e) =>
                  item.page &&
                  item.page !== pages.currentPage &&
                  _onClickPage(e, item.page)
                }
              >
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

Pagination.defaultProps = {
  onClickPage: () => {},
};

export default Pagination;
