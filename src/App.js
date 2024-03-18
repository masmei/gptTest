import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css'; // Make sure you have this CSS file

const App = () => {
  // const [prompt, setPrompt] = useState("");
  const [teams, setTeams] = useState([]);
  const getMessage = async () => {
    try {
      const res = await axios.post("http://localhost:8000/completion", {
        message: prompt,
      });
      setTeams(res.data.matches);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
  }, [teams]); 

  return (
    <div className="app-container">
      <section className="input-section">
        {/* <input 
          className="prompt-input"
          value={prompt} 
          onChange={(e) => setPrompt(e.target.value)} 
          placeholder="Enter your prompt"
        /> */}
        <button className="submit-button" onClick={getMessage}>SHOW MATCHES</button>
      </section>
      <section className="team-list">
        {Array.isArray(teams.matches) && teams.matches.map((team, index) => (
          <div key={index} className="team-item">
            <h3>Team {team.team}: {team.manager}</h3>
            <p><strong>Location:</strong> {team.location}</p>
            <p><strong>Operating Unit:</strong> {team.operatingUnit}</p>
            <p><strong>Remote:</strong> {team.remote}</p>
            <p><strong>Description:</strong> {team.description}</p>
            <p><strong>Tech Stack:</strong> {team.techStack}</p>
          </div>
        ))}
      </section> 
    </div>
  );
};

export default App;