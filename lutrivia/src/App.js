import React from 'react';
import data from 'data.js';

function App() {
  return (
    <div>
      <Header/>
      <QuizList questions={data}/>
      <Footer/>

    </div>
  );
}

export default App;
