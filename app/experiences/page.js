import React from 'react'
import Navbarothers from '@/components/navbarOthers';
import { expeData } from './expedata';

const ExperiencesPage = () => {

    const details = [
        {
          dh1: "Troy Experiences",
          dp: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis architecto saepe ipsa quibusdam consequuntur eveniet voluptatibus obcaecati modi veritatis nostrum animi quaerat facilis aspernatur,dolor sit amet consectetur adipisicing elit. Perferendis architecto saepe ",
    
        },
      ];
      
  return (
    <div className='w-full flex justify-center items-center font-montserrat 
    overflow-hidden bg-gradient-to-l from-bgcolor to-white'>

<div className='mx-auto w-full'>
 
<Navbarothers details={details} data={expeData} />
</div>

    </div>
  )
}

export default ExperiencesPage