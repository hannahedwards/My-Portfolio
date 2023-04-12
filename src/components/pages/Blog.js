import React from 'react';
import resume from '../resume/Resume.pdf'

export default function Blog() {//resume
  return (
    <div>
    <a className='bg-indigo-500' href={resume} download>Click to download PDF</a>
</div>
  )
}
