import { useState } from 'react'

function useFlip() {
   const [state, setState] = useState(true)
   const toggleFlip = () => {
      setState(front => !front)
   }
   return [state, toggleFlip]
};

export default useFlip;