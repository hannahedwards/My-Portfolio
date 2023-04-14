import React from 'react';
import { useForm } from 'react-hook-form';
import background1 from '../images/pastel.jpg'

export default function Contact() { //contact me
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = (values) => alert(JSON.stringify(values, null, 2));

  return (
    <div>
      <div className="relative">
        <div className="absolute flex top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white text-2xl bg-purple-300/50  border-solid border-2 border-purple-300 rounded-lg">
          <form className='form' onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor='name'>Full Name:</label>
              <input type='text' placeholder='First Name'></input>
            </div>
            <div>
              <label>Email:</label>
              <input type="text" placeholder="Email" {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })} />
            </div>
            <div>
              <label htmlFor='message'>Message:</label>
              <textarea className='border-solid border-2 border-purple-300 rounded-lg' type='text' placeholder='Whats your message?' rows='5' cols='30'></textarea>
            </div>
            <div>
              {errors.email && <span>Invalid email</span>}
              <input type="submit" />
            </div>
          </form>
        </div>
        <div>
          <img className='bg-no-repeat bg-cover h-screen w-screen' src={background1} alt="background" />
        </div>
      </div>
    </div>
  );
}
