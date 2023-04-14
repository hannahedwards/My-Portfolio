import React from 'react';
import { useForm } from 'react-hook-form';

export default function Contact() { //contact me
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = (values) => alert(JSON.stringify(values, null, 2));

  return (
    <div className="">
      <form className='form' onSubmit={handleSubmit(onSubmit)}>
        <div>
        <label htmlFor='name'>Full Name:</label>
        <input type='text' placeholder='First Name'></input>
        </div>
        <div>
        <label>Email:</label>
        <input type="text" placeholder="Email" {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })}/>
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
  );
}
