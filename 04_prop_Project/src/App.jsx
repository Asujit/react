import React from 'react'
import Card from './components/Card'

const App = () => {

  const jobsData = [
  {
    company: "Google",
    logo: "https://logo.clearbit.com/google.com",
    title: "Frontend Engineer",
    price: "₹25 LPA",
    subtext: "Build scalable UI systems used by billions."
  },
  {
    company: "Amazon",
    logo: "https://logo.clearbit.com/amazon.com",
    title: "Software Development Engineer",
    price: "₹22 LPA",
    subtext: "Work on high-scale distributed systems."
  },
  {
    company: "Meta",
    logo: "https://logo.clearbit.com/meta.com",
    title: "React Native Developer",
    price: "₹24 LPA",
    subtext: "Develop next-gen mobile experiences."
  },
  {
    company: "Apple",
    logo: "https://logo.clearbit.com/apple.com",
    title: "iOS Developer",
    price: "₹26 LPA",
    subtext: "Create premium user-centric applications."
  },
  {
    company: "Netflix",
    logo: "https://logo.clearbit.com/netflix.com",
    title: "UI Engineer",
    price: "₹28 LPA",
    subtext: "Deliver seamless streaming experiences."
  },
  {
    company: "Microsoft",
    logo: "https://logo.clearbit.com/microsoft.com",
    title: "Full Stack Developer",
    price: "₹23 LPA",
    subtext: "Build enterprise-grade cloud solutions."
  },
  {
    company: "Adobe",
    logo: "https://logo.clearbit.com/adobe.com",
    title: "Frontend Developer",
    price: "₹20 LPA",
    subtext: "Design creative tools for professionals."
  },
  {
    company: "Uber",
    logo: "https://logo.clearbit.com/uber.com",
    title: "Mobile Engineer",
    price: "₹21 LPA",
    subtext: "Work on real-time ride-sharing systems."
  },
  {
    company: "Airbnb",
    logo: "https://logo.clearbit.com/airbnb.com",
    title: "JavaScript Engineer",
    price: "₹22 LPA",
    subtext: "Improve booking and travel experiences."
  },
  {
    company: "X (Twitter)",
    logo: "https://logo.clearbit.com/x.com",
    title: "Frontend Engineer",
    price: "₹19 LPA",
    subtext: "Build fast, real-time social platforms."
  }
];

  return (
    <div className="parent">
      
     {jobsData.map((item) =>{
      return <Card company={item.company} image={item.logo} title={item.title} price={item.price} subtext={item.subtext}/>
     })}
    </div>
  )
}

export default App