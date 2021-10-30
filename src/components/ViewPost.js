import { Grid, Table, TableCell, TableRow ,Typography,Paper} from '@material-ui/core';
import React,{Component} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { viewdata } from '../actions';
 class ViewPost extends Component {
     componentDidMount(){
         this.props.viewdata();
     }
    render(){
        const {view}=this.props.view;
        console.log('ee',view);
    return (
        <Paper style={{width:"100%" ,overflow:'auto' , backgroundColor:'#3f51b5' , color:'black'}}>
            <div style={{justifyContent:'center', display:'flex',backgroundColor:'#757de8'}}>
            <Typography style={{color:'azure'}} variant='h2'>Post Data View</Typography>
            </div>
            <Table >
                <TableRow >
                    <TableCell>User ID</TableCell>
                    <TableCell>Post ID</TableCell>
                    <TableCell>Post Title</TableCell>
                    <TableCell>Post Body</TableCell>
                </TableRow>
                {
                 view?view.map((item)=>{

                    return(
                        <TableRow key={item.id}>
                            <TableCell>
                               {item.userId}
                            </TableCell>
                            <TableCell>
                                {item._id}
                            </TableCell>
                            <TableCell>
                                {item.title}
                            </TableCell>
                            <TableCell>
                                {item.body}
                            </TableCell>
                        </TableRow>
);
                    }):<div>No Data</div>
                }
            </Table>
        </Paper>
    );}
}

function mapStateToProps(state){
    console.log('state',state);
    return{
        view:state.view
    };
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({viewdata},dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(ViewPost);