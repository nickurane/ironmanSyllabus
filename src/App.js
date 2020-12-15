import React, { useState } from "react";
import "./styles.css";
let list = [
  {
    subject: "Engineering Maths-3",
    sem: "third"
  },
  {
    subject: "Electronic Circuits",
    sem: "third"
  },
  {
    subject: "Logic Design",
    sem: "third"
  },
  {
    subject: "Discreate mathmatical structure",
    sem: "third"
  },
  {
    subject: "Data structure using c",
    sem: "third"
  },
  {
    subject: "oop with c++",
    sem: "third"
  },
  {
    subject: "DS with c/c++ lab",
    sem: "third"
  },
  {
    subject: "Electronic Circuits &logic design lab",
    sem: "third"
  },
  {
    subject: "Engineering Maths-4",
    sem: "fourth"
  },
  {
    subject: "Graph Theory and Combinators",
    sem: "fourth"
  },
  {
    subject: "Design and Analysis of Algorithms",
    sem: "fourth"
  },
  {
    subject: "Unix Shell Programming",
    sem: "fourth"
  },
  {
    subject: "Microprocessors",
    sem: "fourth"
  },
  {
    subject: "Computer Organisation",
    sem: "fourth"
  },
  {
    subject: "DAA Lab",
    sem: "fourth"
  },
  {
    subject: "Microprocessors lab",
    sem: "fourth"
  },
  {
    subject: "Software Engineering",
    sem: "fifth"
  },
  {
    subject: "System Software",
    sem: "fifth"
  },
  {
    subject: "Operating System",
    sem: "fifth"
  },
  {
    subject: "Database Management Systems",
    sem: "fifth"
  },
  {
    subject: "Computer Networks-1",
    sem: "fifth"
  },
  {
    subject: "Formal Language and Automata Theory",
    sem: "fifth"
  },
  {
    subject: "Database Application lab",
    sem: "fifth"
  },
  {
    subject: "s/m software & Operating S/M lab",
    sem: "fifth"
  },
  {
    subject: "Managemet and Enterpreneurship",
    sem: "sixth"
  },
  {
    subject: "Unix System Programming",
    sem: "sixth"
  },
  {
    subject: "Compiler Design",
    sem: "sixth"
  },
  {
    subject: "Computer Networks-2",
    sem: "sixth"
  },
  {
    subject: "Computer Graphics and Visualization",
    sem: "sixth"
  },
  {
    subject: "Elective 1 [Group-A]",
    sem: "sixth"
  },
  {
    subject: "Computer Graphics and Visualization lab",
    sem: "sixth"
  },
  {
    subject: "Unix System Programming & Compiler Design lab",
    sem: "sixth"
  }
];

export default function App() {
  let [userinput, output] = useState("");
  let input;
  function handler(input) {
    let key = Object.values(list);

    userinput = key.map((item) => {
      if (item.sem === input) {
        return <li>{item.subject}</li>;
      }
    });

    output(userinput);
  }

  return (
    <div className="App">
      <div>
        <h1>🎓 Syllabus[cs]</h1>
        <ol className="row">
          <li className="col-sm-2 col-lg-3">
            <button onClick={() => handler("third")} className="a">
              third
            </button>
          </li>
          <li className="col-sm-2 col-lg-3">
            <button onClick={() => handler("fourth")} className="a">
              fourth
            </button>
          </li>
          <li className="col-sm-2 col-lg-3">
            <button onClick={() => handler("fifth")} className="a">
              fifth
            </button>
          </li>
          <li className="col-sm-2 col-lg-3">
            <button onClick={() => handler("sixth")} className="a">
              sixth
            </button>
          </li>
        </ol>
      </div>
      <div>
        <ul id="list">{userinput}</ul>
      </div>
    </div>
  );
}

/**
 *
 * VISER --. View -> Interact -> State in Event handler  -> Render
 */
