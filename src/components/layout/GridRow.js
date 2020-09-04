import cx from 'classnames';
import React from 'react';

const GridRow = ({ children, columns = 4 }) => {
  const cls = cx('grid__row', {
    [`grid__row--columns-${columns}`]: columns,
  });

  return (
    <div className={cls}>
      {children}
    </div>
  );
};
export default GridRow;