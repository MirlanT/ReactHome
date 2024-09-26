import { Render } from "../render";

const state = {
    data:[
        {url:'https://cdn-icons-png.flaticon.com/512/219/219969.png', text:
            'a', like: 10
          },{url:'https://cdn-icons-png.flaticon.com/512/219/219969.png', text:
            'b', like: 10
          },{url:'https://cdn-icons-png.flaticon.com/512/219/219969.png', text:
            'c', like: 10
          },{url:'https://cdn-icons-png.flaticon.com/512/219/219969.png', text:
            'd', like: 10
          },{url:'https://cdn-icons-png.flaticon.com/512/219/219969.png', text:
            'f', like: 10
          }
    ],
    messages: {
        names : [
            {id:'1', name:'Vladimir'},
            {id:'1', name:'Zakir'},
            {id:'1', name:'Mirlan'},
            {id:'1', name:'Asanbek'},
            {id:'1', name:'Elo'}
        ],
        messages : [
            {id:'1', message:'hello'},
            {id:'1', message:'My name'},
            {id:'1', message:'Mirlan'},
            {id:'1', message:'Are'},
            {id:'1', message:'you?'}
        ]
    }
}

export const addPost = (test) =>{
  const add = {url:'https://cdn-icons-png.flaticon.com/512/219/219969.png', text:
    test, like: 10}
  state.data.unshift(add);
  Render(state);
}

 export const del = (id) =>{
  console.log(state.data[id] + '' + id)
  state.data.splice(id, 1);
  Render(state);
}


export default state