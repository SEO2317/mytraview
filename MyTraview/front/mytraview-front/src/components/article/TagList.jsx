import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import Map from '../map/Map';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}



const TagList = () => {

    
  const [size, setSize] = useState(null);
  const [rows, setRows] = useState([]);
  const handleOpen = (value) => setSize(value);

  function handleTagAdd() {
    setRows(...rows, createData('Eclair', 262, 16.0, 24, 6.0))
    }

  return (
    <>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>주소</TableCell>
            <TableCell align="right">업체명</TableCell>
            <TableCell align="right">별점</TableCell>
            <TableCell align="right">카테고리</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Fragment>
      <div className="flex gap-3 justify-center">
        <Button onClick={() => handleOpen("xl")} variant="gradient">
          태그 추가하기
        </Button>
      </div>
      <Dialog style={{height:"97vh", width:"100vw"}}
        open={
          size === "xs" ||
          size === "sm" ||
          size === "md" ||
          size === "lg" ||
          size === "xl" ||
          size === "xxl"
        }
        size={size || "md"}
        handler={handleOpen}
      >
        <DialogHeader>장소 찾기?</DialogHeader>
        <div>검색</div>
        <DialogBody divider>
          <div style={{margin:"0 auto"}}>
          <Map/>
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={() => handleOpen(null)}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button
            variant="gradient"
            color="green"
            onClick={() => handleTagAdd()}
          >
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </Fragment>
    </>
  );
}

export default TagList