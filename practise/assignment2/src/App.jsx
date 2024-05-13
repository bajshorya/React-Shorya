import { useState } from "react";
import "./App.css";
import { useMemo } from "react";

const words = ["hi", "my", "name", "is", "messi"];
const TOTAL_LINES = 1000;
const ALL_WORDS = [];
for (let i = 0; i < TOTAL_LINES; i++) {
  let sentence = " ";
  for (let j = 0; j < words.length; j++) {
    sentence += words[Math.floor(words.length * Math.random())];
    sentence += " ";
  }
  ALL_WORDS.push(sentence);
}
function App() {
  const [sentences, setSentences] = useState(ALL_WORDS);
  const [filter, setFilter] = useState("");
  const filteredSentences = useMemo(() => {
    return sentences.filter((x) => x.includes(filter));
  }, [sentences, filter]);
  return (
    <>
      <div>
        <input
          type="text"
          onChange={(e) => {
            setFilter(e.target.value);
          }}
        />
      </div>

      {filteredSentences.map((word, index) => (
        <div key={index}>{word}</div>
      ))}
    </>
  );
}

export default App;
