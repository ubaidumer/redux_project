import { Grid, Table, TableCell, TableRow ,Typography} from '@material-ui/core';
import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
const useStyles = makeStyles({
    typo:{
        marginLeft:'75px',
        marginBottom:'20px'
    }
})

 function ViewPost(props) {
    const classes=useStyles();
    const view =  useSelector(state =>state.view);
    const dispatch = useDispatch();
    return (
        <Grid>
            <Typography  className={classes.typo} variant='h2'>Post Data View</Typography>
            <Table>
                <TableRow >
                    <TableCell>User ID</TableCell>
                    <TableCell>Post ID</TableCell>
                    <TableCell>Post Title</TableCell>
                    <TableCell>Post Body</TableCell>
                </TableRow>

             {
                 view?console.log("hehe",view)
                 :<div>NO DATA</div>
             }
            </Table>
        </Grid>
    );
}
export default ViewPost;