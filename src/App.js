import "./App.css";
import UserSearchbox from "./Components/UserSearchbox";
import { useState } from "react";


const data = [
  {
    id: 1,
    img: "http://t0.gstatic.com/images?q=tbn:ANd9GcSvYa4WjOF8EaXbkNViX1aJcysRpIf5q0ob2AeofdjT7j3G5yEQBAedD3TveAq-G1ES0LkD9A",
    name: "Salman Khan",
    email: "salma@gmail.com"
  },
  {
    id: 1,
    img: "https://www.hindustantimes.com/ht-img/img/2023/02/24/1600x900/akshay_kumar_1677233885589_1677233885844_1677233885844.jpg",
    name: "Akshay Kumar",
    email: "akshay@gmail.com"
  },
  {
    id: 1,
    img: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Virat_Kohli_during_the_India_vs_Aus_4th_Test_match_at_Narendra_Modi_Stadium_on_09_March_2023.jpg",
    name: "Virat Kohli",
    email: "virat@gmail.com"
  },
  {
    id: 1,
    img: "https://cdn.britannica.com/25/222725-050-170F622A/Indian-cricketer-Mahendra-Singh-Dhoni-2011.jpg",
    name: "MS Dhoni",
    email: "mahi@gmail.com"
  },
  {
    id: 1,
    img: "http://t3.gstatic.com/images?q=tbn:ANd9GcQkofJWDQ3_3UjPyP3ZnZ2QKbwoGRJUTPKj7N9YnrImSULFPwxXpoS85H1cOXcvoFbN4icT",
    name: "Sachin Sah",
    email: "sachin@gmail.com"
  },
  {
    id: 1,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGPpUycWOLS08exCisX_qWI1H91qZWg_V2QJ549PI7hw&s",
    name: "Maniph Shah",
    email: "sah@gmail.com"
  },
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww",
    name: "Sami Akhtar",
    email: "sami@gmail.com"
  },
  {
    id: 1,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDGj8e4fpqLnxqzatKqYW2ehsK1b3h-cYC0ahgDMbUYg&s",
    name: "Prithvi Verma",
    email: "prithvi@gmail.com"
  },
  {
    id: 1,
    img: "https://img.freepik.com/free-photo/positive-emotions-concept-bearded-handsome-man-with-broad-shining-smile-being-good-mood-as-found-good-well-paid-job_273609-17291.jpg",
    name: "Sahil Khan",
    email: "sahil@gmail.com"
  },
  {
    id: 1,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLQ1CALDUuBxb4MFXswvfGtIn8miiNV_OG1vBWpf5iKQ&s",
    name: "Aryan Dutta",
    email: "aryan@gmail.com"
  },
];



const App = () => {

  const [datas, setDatas] = useState(data)
  console.log("re4r4rt4", datas)
  


  return (
    <div className="container">
      <UserSearchbox data={data} datas={datas} setDatas={setDatas} />
    </div>
  );
};

export default App;


















