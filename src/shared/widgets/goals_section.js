import React from 'react'
import'../styles/goals_section.css'
import { Goalitem } from './Goalitem'

export function Goals() {
  return (
    <div className='goals_container'>
      {/* <img className='goals_background' src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/5652f585642773.5d8204beba2a7.jpg" alt=''/> */}
     <h2 className='goals_header'>Shop By Goal</h2>
     <h4 className='goals_description'>Supplements based on your fitness goals.</h4>
     {/* <Goalitem goal_name="Weight Training"/> */}
     {/* <Goalitem /> */}
     {/* <a href = "#" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBbz6AuB0sV5DIqIZoE0XiDSmFVP8WhIio4XbKDD5SjA&s"></a> */}
    <div className = " image" > 
    <img className="img" src="data:image/png;base64,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" alt=""/>
      <img className ="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYrFFaLmEdYeeiF1JipctdIHyGTkqb2ymkCw&usqp=CAU" alt=""/>
      <img className ="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiWwpYAp9eT0ta32tOZ-HBk3W_zsuaG65Y_Q&usqp=CAU" alt=""/>
      <img className ="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYMfLFNWLjucsLKb4Yz34usLMDgftdR5gloQ&usqp=CAU" alt=""/>
     </div>
    </div>
  )
}

