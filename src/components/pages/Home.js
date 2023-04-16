import React from 'react';
import background1 from '../images/pastel.jpg'

export default function aboutMe() { //about me
  return (
    <div> 
      <div className="relative">
        <div className='absolute text-center text-white text-2xl bg-purple-300/75  border-solid border-2 border-purple-300 rounded-lg mx-5 my-5 p-2'>
          <div className='text-justify indent-8'>
            As a newly minded web developer, I am thrilled to be embarking on a career in a field that I am passionate about. While I do not have prior experience as a web developer, I am excited to bring my skills to this new role and to learn as much as possible about the exciting world of web development.
          </div>
          <div className='text-justify indent-8'>
            My journey to becoming a web developer began with personal studying and taking various courses on Udemy. Since then, I have taken a full stack coding boot camp through the University of Utah to build my skills and knowledge and I am eager to put them to work in a professional setting.
            I am excited to explore how I can use my skills to create innovative and user-friendly web applications. I am also committed to continually learning to gain more knowledge and enhance my skills.
          </div>
          <div className='text-justify indent-8 first-uppercase'>
            As I embark on this new career path, I am eager to collaborate with other web developers and professionals to continue learning and growing in my role. Thank you for taking the time to visit my portfolio, and please feel free to contact me with any questions or opportunities!
          </div>
        </div>
        <div>
          <img className='bg-no-repeat bg-cover h-screen w-screen' src={background1} alt="background" />
        </div>
      </div>
    </div>
  );
}
