import { useState, useEffect } from 'react';
import './App.css';
import debounce from 'lodash.debounce'

function App() {
  // the text entered by the user
  const [text, setText] = useState('');

  // word count
  const [wordCount, setWordCount] = useState(0);

  // character count
  // const [charCount, setCharCount] = useState(0);

  //500ms

  const changeHandler = (event) => {
    setText(event.target.value);
  };

  useEffect(() => {
    // array of words
    const words = text.split(' ');

    // update word count
    let wordCount = 0;
    words.forEach((word) => {
      if (word.trim() !== '') {
        wordCount++;
      }
    });
    setWordCount(wordCount);

    // update char count 
    // setCharCount(text.length);
  }, [text]);

  return (
    <div className='container'>
      <div>
        <input type={text}
          value={text}
          onChange={changeHandler}
          placeholder='Enter text...'
        ></input>

        <div>
          <p className='word-count'>Số chữ: {wordCount}</p>
          {/* <p className='char-count'>
            số kí tự: {charCount}
          </p> */}
        </div>
      </div>
    </div>
  );
}

export default App;