import { useState } from "react";
import Show from "./Components/Show";
import Create from "./Components/Create";

function App() {
  const [gallery, setgallery] = useState([])
  
  return (
    <>
    <Create gallery={gallery} setgallery={setgallery} />

    <hr className="m-auto w-50 mt-3" />
    
    <Show gallery={gallery} setgallery={setgallery}/>
    </>
  )
}

export default App;