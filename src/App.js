import React from "react";
import axios from "axios"; // Import Axios

const App = () => {
  const getMessage = async () => {
    try {
      const response = await axios.post("http://localhost:8000/completion", {
        message: "hello, how are you?",
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <section>
        <div>
          <input />
          <button onClick={getMessage}>Submit</button>
        </div>
      </section>
      <section></section>
    </div>
  );
};

export default App;
