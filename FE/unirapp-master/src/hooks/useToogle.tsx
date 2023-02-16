import { useState } from 'react'

export const useToggle = (initialValue = false) => {
    const [isActive, setActive] = useState(initialValue);

    const toggleMenu = () => {
      setActive(!isActive);
    };
  
    return {
      isActive,
      toggleMenu
    };
  };
  