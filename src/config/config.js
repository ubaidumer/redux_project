import * as dotenv from 'dotenv';
dotenv.config();
const CONFIG = {
 POST_URL   : `${process.env.REACT_APP_POST_URL}`,
 GET_URL    : `${process.env.REACT_APP_GET_URL}`,
 DELETE_URL : `${process.env.REACT_APP_DELETE_URL}`,
 UPDATE_URL : `${process.env.REACT_APP_UPDATE_URL}`,
 }
export default CONFIG;
