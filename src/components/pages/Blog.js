import React from 'react';
import resume from '../resume/Resume.pdf'

export default function Blog() {
  return (
    <div>
    <a href={resume} download>Click to download PDF</a>
</div>
  )
}
