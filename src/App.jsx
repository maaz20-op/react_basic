import React from 'react'
import './index.css'
import Card from './components/card'

const App = () => {
 const jobOpenings = [
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay: "$65/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    companyName: "Meta",
    datePosted: "2 weeks ago",
    post: "Backend Engineer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$90/hr",
    location: "Menlo Park, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    datePosted: "10 days ago",
    post: "Data Analyst",
    tag1: "Part-time",
    tag2: "Mid Level",
    pay: "$50/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    companyName: "Apple",
    datePosted: "3 weeks ago",
    post: "iOS Developer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$85/hr",
    location: "Cupertino, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    datePosted: "1 week ago",
    post: "Machine Learning Engineer",
    tag1: "Full-time",
    tag2: "Mid Level",
    pay: "$95/hr",
    location: "Los Gatos, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    datePosted: "4 days ago",
    post: "Cloud Solutions Architect",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$100/hr",
    location: "Redmond, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/tesla.com",
    companyName: "Tesla",
    datePosted: "6 days ago",
    post: "Software Engineer",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay: "$70/hr",
    location: "Austin, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/nvidia.com",
    companyName: "NVIDIA",
    datePosted: "10 weeks ago",
    post: "AI Research Scientist",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$120/hr",
    location: "Santa Clara, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/adobe.com",
    companyName: "Adobe",
    datePosted: "8 days ago",
    post: "UX/UI Designer",
    tag1: "Part-time",
    tag2: "Mid Level",
    pay: "$60/hr",
    location: "San Jose, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/openai.com",
    companyName: "OpenAI",
    datePosted: "2 days ago",
    post: "Full Stack Engineer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$110/hr",
    location: "Remote"
  }
];

  return  (
    <>
    <div className="parent">
   {jobOpenings.map(function(obj,index){
    return <Card  obj={obj}/>;
   })}
    </div>

    </>
  )
}

export default App;