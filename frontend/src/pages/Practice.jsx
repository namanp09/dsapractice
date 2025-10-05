// src/pages/Practice.jsx
import { useState } from "react";
import axios from "axios";
import { useAuth, SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react";
import "../styles/practice.css";


export default function Practice() {
  const [topic, setTopic] = useState("");
  const [company, setCompany] = useState("");
  const [language, setLanguage] = useState("C++");
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const { getToken } = useAuth();
  const API = import.meta.env.VITE_API_BASE || "http://localhost:5000";

  const fetchQuestions = async () => {
    if (!topic || !company || !language) {
      alert("Select a topic and enter company");
      return;
    }
    setLoading(true);
    try {
      const token = await getToken(); // Clerk getToken
      const res = await axios.post(
        `${API}/api/ai/dsa`,
        { topic, company, language },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (res.data.questions) setQuestions(res.data.questions);
      else if (res.data.raw) setQuestions([{ question: "Raw AI Response", solution: res.data.raw }]);
    } catch (err) {
      console.error(err);
      alert("Failed to fetch AI questions. Check backend logs.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="page-container">
      <SignedOut>
        <div className="signed-out">
          <p>Click to Sign In </p>
          <SignInButton />
        </div>
      </SignedOut>

      <SignedIn>
        <div className="control-card">
          <h2 >DSA Practice powered by Gemini</h2>
          <div className="controls">
            <select onChange={(e) => setTopic(e.target.value)}>
              <option value="">Select Topic</option>
              <option value="Arrays">Arrays</option>
              <option value="Graphs">Graphs</option>
              <option value="Dynamic Programming">Dynamic Programming</option>
              <option value="Trees">Trees</option>
              <option value="Strings">Strings</option>
              <option value="Stack">Stack</option>
              <option value="Queue">Queue</option>
              <option value="Binary Search">Binary Search</option>
              <option value="Link List">Link List</option>
              <option value="Sorting">Sorting</option>
              <option value="Sliding Window">Sliding Window</option>
            </select>

          
            
            <select onChange={(e) => setLanguage(e.target.value)}>
              <option value="C++">C++</option>
              <option value="Java">Java</option>
              <option value="Python">Python</option>
            </select>

            <input
              type="text"
              placeholder="Company (Google, Amazon...)"
              onChange={(e) => setCompany(e.target.value)}
            />

            <button onClick={fetchQuestions} disabled={loading}>
              {loading ? "Loading..." : "Get Top 5 Questions"}
            </button>

          </div>
        </div>

        <div className="results">
          {questions.length > 0 && <h3>Recommended Questions</h3>}
          {questions.map((q, i) => (
            <div className="card" key={i}>
              <div className="card-head">
                <h4>{q.question || `Question ${i + 1}`}</h4>
                <span className="tag">{q.difficulty || "n/a"}</span>
              </div>
              <pre className="solution">{q.solution || "Solution not included."}</pre>
              <div className="tags">
                {(q.tags || []).map((t, idx) => (
                  <span key={idx} className="pill">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SignedIn>
    </div>
  );
}
