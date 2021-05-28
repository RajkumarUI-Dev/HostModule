import { mount } from 'userhome/UserDetailsHomeApp';
import React, { useRef, useEffect } from 'react';

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
   
  });

  return (
    <div>
      <div  ref={ref}></div>
    </div>
  );
};
