import React from "react";
import Section1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section2";

const App = () => {
  const users = [
    {
      id:1,
      img:'https://plus.unsplash.com/premium_photo-1661630621969-6d9faac03f9f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHN8ZW58MHx8MHx8fDA%3D',
      intro:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quasi cum assumenda aperiam reiciendis voluptate asperiores facere cupiditate at dicta.',
      tag:'Satisfied',
    }, 
    {
      id:2,
      img:'https://plus.unsplash.com/premium_photo-1661641353075-f0eaf2d82aae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHN8ZW58MHx8MHx8fDA%3D',
      intro:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quasi cum assumenda aperiam reiciendis voluptate asperiores facere cupiditate at dicta.',
      tag:'Underserved',
    }, 
    {
      id:3,
      img:'https://plus.unsplash.com/premium_photo-1658506656752-4f1b1c1d5916?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWxzfGVufDB8fDB8fHww',
      intro:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quasi cum assumenda aperiam reiciendis voluptate asperiores facere cupiditate at dicta.',
      tag:'Underbanked',
    },
    {
      id:4,
      img:'https://plus.unsplash.com/premium_photo-1664474644341-300d8ec704a3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8',
      intro:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quasi cum assumenda aperiam reiciendis voluptate asperiores facere cupiditate at dicta.',
      tag:'Settled',
    },
  ];
  return (
    <div>
      <Section1 users={users}/>
      <Section2 />
    </div>
  );
};

export default App;
