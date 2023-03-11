import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
const TableComponent = ({ data }) => {
  return (
    <>
      <TableContainer width={"full"}>
        <Table variant="simple">
          <TableCaption>This is Student Data</TableCaption>
          <Thead>
            <Tr fontSize={"md"} backgroundColor={"#1167b1"}>
              <Th color="white">PRN no</Th>
              <Th color="white">Name</Th>
              <Th color="white">Department</Th>
              <Th color="white">OverScore</Th>
              <Th color="white">Ranking</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item) => (
              <Tr>
                <Td>{item.prn}</Td>
                <Td>{item.student_name}</Td>
                <Td>{item.department}</Td>
                <Td>{item.score}</Td>
                <Td>{item.ranking}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TableComponent;
