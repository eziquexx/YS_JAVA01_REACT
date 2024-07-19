import { useState } from "react";
import Timer from "./Timer";

function App() {

  const [showtimer, setShowtimer] = useState(false);

  return (
    <div>
      { showtimer && <Timer /> }
      <button onClick={ () => { setShowtimer(!showtimer) } }>click</button>
    </div>
  );
}

export default App;