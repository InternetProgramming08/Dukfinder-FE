import React from 'react';
import styled from 'styled-components';

const TableColumn = styled.td`
  padding: 10px 5px;
`;

const CommonTableColumn = ({ children }) => {
  return <TableColumn>{children}</TableColumn>;
};

export default CommonTableColumn;