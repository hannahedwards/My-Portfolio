import React from 'react';
import myImage from '../images/me.jpg';
export default function aboutMe() { //about me
  return (
    <div>
      <section>
        <div className=' mx-auto px-1 flex bg-red-100'>
        <img src={myImage} alt="me" width="200" height="220"  />
        <h1 className='text-3xl font-bold underline'>Hannah Edwards</h1>
        </div>
      <p className='container'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque
        velit, lobortis ut magna varius, blandit rhoncus sem. Morbi lacinia nisi
        ac dui fermentum, sed luctus urna tincidunt. Etiam ut feugiat ex. Cras
        non risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna imperdiet
        ac. Sed nec nulla aliquam, bibendum odio eget, vestibulum tortor. Cras
        rutrum ligula in tincidunt commodo. Morbi sit amet mollis orci, in
        tristique ex. Donec nec ornare elit. Donec blandit est sed risus feugiat
        porttitor. Vestibulum molestie hendrerit massa non consequat. Vestibulum
        vitae lorem tortor. In elementum ultricies tempus. Interdum et malesuada
        fames ac ante ipsum primis in faucibus.
      </p>
      </section>
    </div>
    
  );
}

