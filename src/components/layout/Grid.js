import React from 'react';
import GridRow from './GridRow';
import GridColumn from './GridColumn';
import '../../css/styles.css';
const Grid = ({ children }) => (
  <div className='grid'>
    {children}
  </div>
);

Grid.Row = GridRow;
Grid.Column = GridColumn;

export default Grid;