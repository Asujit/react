import React, { useState, useEffect } from "react";
import axios from "axios";
import Cardd from "./components/Cardd";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getdata = async () => {
      const response = await axios.get(
        `https://picsum.photos/v2/list?page=${page}&limit=10`,
      );

      setUserData(response.data);
    };

    getdata();
  }, [page]);

  let printData = (
    <h3 className="font-bold text-gray-500 text-4xl absolute top-1/2 bottom-1/2 left-[45%] right-[45%]">
      Loading...
    </h3>
  );

  if (userData.length > 0) {
    printData = userData.map((item) => {
      return <Cardd item={item} />;
    });
  }

  return (
    <div className="bg-black overflow-auto h-screen w-full text-white p-5">
      {/* <button
        onClick={getdata}
        className="bg-green-600 text-white px-5 py-2 rounded-2xl active:scale-95"
      >
        GetData
      </button> */}

      <h1 className="fixed bg-amber-800 text-5xl p-2 rounded-3xl">{page}</h1>

      <div className="flex flex-wrap gap-5">{printData}</div>

      <div className="flex justify-center items-end p-4 gap-10">
        <button
          onClick={() => {
            // if(page === 1){
            //   setPage(1)
            // }else{
            //   setPage(page-1)
            // }

            if (page > 1) {
              setUserData([]);
              setPage(page - 1);
            }
          }}
          className="bg-amber-400 text-black rounded-2xl px-4 py-2 font-bold text-sm  cursor-pointer active:scale-95"
        >
          Prev
        </button>

        <h3>Page {page}</h3>
        <button
          onClick={() => {
            setPage(page + 1);
            setUserData([]);
          }}
          className="bg-amber-400 text-black rounded-2xl px-4 py-2 font-bold text-sm cursor-pointer active:scale-95"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
