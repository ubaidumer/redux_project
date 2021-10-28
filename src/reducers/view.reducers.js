import  axios  from 'axios';

async function getData(){
     let data = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
     console.log(data);
     return data.data;
}

function view(state=getData(),action){
    switch(action.type){
        default:
            return state;
    }
}


export default view;