import './App.css';

function App() {
  return (
    <div className="">
      <div>
        <h1>Super Quiz</h1>
      </div>
      <div>
        <h3>First Question of 4</h3>
      </div>
      <div className='options-container'>
        <div className='option-item'>
          <input type="checkbox" id="1" name="answer-1" checked />
          <label for="answer-1">Answer 1</label>
        </div>

        <div className='option-item'>
          <input type="checkbox" id="2" name="answer-2" />
          <label for="answer-2">Answer 2</label>
        </div>

        <div className='option-item'>
          <input type="checkbox" id="3" name="answer-3" />
          <label for="answer-3">Answer 3</label>
        </div>

        <div className='option-item'>
          <input type="checkbox" id="4" name="answer-4" />
          <label for="answer-4">Answer 4</label>
        </div>
      </div>

      <div className='next-button'>
        <button>Next</button>
      </div>
    </div>
  );
}

export default App;
