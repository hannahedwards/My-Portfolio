import React from 'react';
import myImage from '../images/me.png';
export default function aboutMe() { //about me
  return (
    <div>
      <section>
        <div className=' mx-auto px-1 flex bg-red-300'>
        <img src={myImage} alt="me" width="200" height="220"  />
        <h1 className='text-3xl font-bold '>Hannah Edwards</h1>
        </div>
      <p className='container'>
      As a newly minded web developer, I am thrilled to be embarking on a career in a field that I am passionate about. While I do not have prior experience as a web developer, I am excited to bring my skills to this new role and to learn as much as possible about the exciting world of web development.
My journey to becoming a web developer began with personal studying via courses on Udemy.Since then, I have taken a full stack coding boot camp through the University of Utah to build my skills and knowledge and I am eager to put them to work in a professional setting.
I am excited to explore how I can use my skills to create innovative and user-friendly web applications. I am also committed to continually learning to gain more knowledge and enhance my skills.
As I embark on this new career path, I am eager to collaborate with other web developers and professionals to continue learning and growing in my role. Thank you for taking the time to visit my portfolio, and please feel free to contact me with any questions or opportunities!

      </p>
      </section>
    </div>
    
  );
}

