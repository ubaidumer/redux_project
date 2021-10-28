import axios from "axios";

export async function getAllPost() {
    return await axios.get(`https://jsonplaceholder.typicode.com/posts`)
    .then(res => {
        console.log(res.data);
        return res;
    })
}