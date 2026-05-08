import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const App = () => {

  const [data, setData] = useState([]);

//   const getData = async() => {
//     try{

//       const response = await fetch('https://api.freeapi.app/api/v1/public/randomproducts');

//       const data =await response.json();
//       console.log(data.data.data);
//     }catch(err){
//       console.log("Error", err)
//     }
//   }

//   // getData();

//   console.log(getData());

// const getData = async() =>{
//   try{
//     const response = await axios.get('https://api.freeapi.app/api/v1/public/randomproducts');

//     const data = await response;
//     console.log(data.data.data)
//   }catch(err){
//     console.log("Error" , err)
//   }
// }


//   console.log(getData());



const getImg = async () =>{

  const response = await axios.get('https://picsum.photos/v2/list');
  const data = await response ;
  setData(data.data)
  console.log(data.data)
}


  return (
    <div>
      <button onClick={getImg}>Click</button>
    <div>
      {data.map((item,idx) =>{
        return <img className='image' src={item.download_url} alt="" />
      })}
    </div>

    </div>
  )
}

export default App