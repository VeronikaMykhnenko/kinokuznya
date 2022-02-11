import { makeStyles } from "@material-ui/styles";
import { Button, Typography } from "@material-ui/core";
import { TableContainer } from "@material-ui/core";
import { Table } from "@material-ui/core";
import { TableBody } from "@material-ui/core";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { TableCell } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';

export default function TableProject() {
  const rows = [
    {
      title: "Oscar",
      category: "новини",
    },
    {
      title: "Новий серіал шукає актора",
      category: "кастинги",
    },
    {
      title: "Розкажіть про свій проект на нашому сайті",
      category: "проекти",
    },
  ];
  return (
    <div>
      <TableContainer>
        <Table aria-label="simple table">
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.title}
                </TableCell>
                <TableCell align="left">{row.category}</TableCell>
                <TableCell>
                    <Fab color="primary" aria-label="add" size="small" style={{marginRight: "10px"}}>
                        <EditIcon />
                    </Fab>
                  
                   <Fab size="small" aria-label="delete" style={{backgroundColor: "red", color: "white"}}> 
                   <DeleteIcon />
                   </Fab>
                      
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button
        variant="contained"
        color="primary"
        size="medium"
        style={{ marginTop: "30px" }}
      >
        Створити публікацію
      </Button>
    </div>
  );
}
