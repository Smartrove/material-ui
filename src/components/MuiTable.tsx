import React from "react";
import {
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  Table,
  TableCell,
  Paper,
  tableCellClasses,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const tableData = [
  {
    id: 1,
    first_name: "Colver",
    last_name: "Mc Coughan",
    email: "cmccoughan0@sourceforge.net",
    gender: "Male",
    ip_address: "203.252.116.8",
  },
  {
    id: 2,
    first_name: "Ramsey",
    last_name: "Masterton",
    email: "rmasterton1@networksolutions.com",
    gender: "Male",
    ip_address: "76.177.120.69",
  },
  {
    id: 3,
    first_name: "Seana",
    last_name: "Glen",
    email: "sglen2@furl.net",
    gender: "Female",
    ip_address: "175.0.42.94",
  },
  {
    id: 4,
    first_name: "Juan",
    last_name: "Brinkman",
    email: "jbrinkman3@eepurl.com",
    gender: "Male",
    ip_address: "21.108.136.214",
  },
  {
    id: 5,
    first_name: "Trixie",
    last_name: "Penniell",
    email: "tpenniell4@miibeian.gov.cn",
    gender: "Female",
    ip_address: "192.163.225.247",
  },
  {
    id: 6,
    first_name: "Matilde",
    last_name: "Sams",
    email: "msams5@mozilla.org",
    gender: "Female",
    ip_address: "169.226.78.111",
  },
  {
    id: 7,
    first_name: "Gleda",
    last_name: "Bowles",
    email: "gbowles6@google.com.br",
    gender: "Female",
    ip_address: "253.58.122.126",
  },
  {
    id: 8,
    first_name: "Thornie",
    last_name: "Harback",
    email: "tharback7@clickbank.net",
    gender: "Male",
    ip_address: "136.26.104.200",
  },
  {
    id: 9,
    first_name: "Joelly",
    last_name: "Guislin",
    email: "jguislin8@ycombinator.com",
    gender: "Female",
    ip_address: "221.75.25.247",
  },
  {
    id: 10,
    first_name: "Sela",
    last_name: "Guiton",
    email: "sguiton9@jigsy.com",
    gender: "Female",
    ip_address: "23.0.134.242",
  },
];

const MuiTable = () => {
  const StyledTableCell: any = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 15,
      fontWeight: "bold",
    },
  }));
  return (
    <TableContainer component={Paper} sx={{ maxHeight: "300px" }}>
      <Table aria-aria-label="simple table" stickyHeader>
        <TableHead style={{ backgroundColor: "blue" }}>
          <TableRow>
            <StyledTableCell>Id</StyledTableCell>
            <StyledTableCell>First name</StyledTableCell>
            <StyledTableCell>Last name</StyledTableCell>
            <StyledTableCell>Email</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &: last-child th": { border: 0 } }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell>{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MuiTable;
