import React from 'react';
import PropTypes from 'prop-types';
Pagination.propTypes = {
    pagination: PropTypes.object.isRequired,
    onPageChange: PropTypes.func
}
Pagination.defaultProps = {
    onPageChange: null
}
function Pagination(props) {
    const { pagination, onChangePage } = props;

    const { _page, _limit, _totalRows } = pagination;
    const totalPages = Math.ceil(_totalRows / _limit);

    function handleClick(newPage) {
        if (!onChangePage) return;
        onChangePage(newPage)


    }
    return (
        <div>
            <button disabled={_page <= 1} onClick={() => handleClick(_page - 1)}>Pre</button>
            <button disabled={_page >= totalPages} onClick={() => handleClick(_page + 1)}>Pre</button>
        </div>
    );
}

export default Pagination;