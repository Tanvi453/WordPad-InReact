import React, { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState(''); // State to store the input text
  const [decoration, setDecoration] = useState(''); // State to store the current decoration type
  const [alignment, setAlignment] = useState('left'); // State to store the current text alignment

  const handleChange = (e) => {
    setText(e.target.value); // Update the text state
  };

  const decorateFunction = (decorationType) => {
    setDecoration(decorationType); // Update the decoration state
  };

  const alignFunction = (alignmentType) => {
    setAlignment(alignmentType); // Update the alignment state
  };

  return (
    <div style={{ backgroundImage: "url(https://img.freepik.com/premium-photo/flat-lay-top-view-office-table-desk-feminine-desk-workspace-with-twine-pencils-floral-bouquet-craft-diary-clips-white-background_408798-6579.jpg)", backgroundSize: "cover", height: "100vh" }}>

      <div className='main'>
        <button onClick={() => decorateFunction('bold')}>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-type-bold" viewBox="0 0 16 16">
            <path d="M8.21 13c2.106 0 3.412-1.087 3.412-2.823 0-1.306-.984-2.283-2.324-2.386v-.055a2.176 2.176 0 0 0 1.852-2.14c0-1.51-1.162-2.46-3.014-2.46H3.843V13zM5.908 4.674h1.696c.963 0 1.517.451 1.517 1.244 0 .834-.629 1.32-1.73 1.32H5.908V4.673zm0 6.788V8.598h1.73c1.217 0 1.88.492 1.88 1.415 0 .943-.643 1.449-1.832 1.449H5.907z" />
          </svg>
        </button>

        <button onClick={() => decorateFunction('italic')}>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-type-italic" viewBox="0 0 16 16">
            <path d="M7.991 11.674 9.53 4.455c.123-.595.246-.71 1.347-.807l.11-.52H7.211l-.11.52c1.06.096 1.128.212 1.005.807L6.57 11.674c-.123.595-.246.71-1.346.806l-.11.52h3.774l.11-.52c-1.06-.095-1.129-.211-1.006-.806z" />
          </svg>
        </button>

        <button onClick={() => decorateFunction('underline')}>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-type-underline" viewBox="0 0 16 16">
            <path d="M5.313 3.136h-1.23V9.54c0 2.105 1.47 3.623 3.917 3.623s3.917-1.518 3.917-3.623V3.136h-1.23v6.323c0 1.49-.978 2.57-2.687 2.57s-2.687-1.08-2.687-2.57zM12.5 15h-9v-1h9z" />
          </svg>
        </button>

        <button onClick={() => alignFunction('left')}>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-text-left" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5" />
          </svg>
        </button>

        <button onClick={() => alignFunction('center')}>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-text-center" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M4 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5" />
          </svg>
        </button>

        <button onClick={() => alignFunction('right')}>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-text-right" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M6 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-4-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m4-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-4-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5" />
          </svg>
        </button>

        <button onClick={() => alignFunction('justify')}>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-justify" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5" />
          </svg>
        </button>
      </div>

      <div className='main'>
        <textarea
          type="text"
          value={text}
          onChange={handleChange}
          style={{
            fontWeight: decoration === 'bold' ? 'bold' : 'normal',
            fontStyle: decoration === 'italic' ? 'italic' : 'normal',
            textDecoration: decoration === 'underline' ? 'underline' : 'none',
            textAlign: alignment, // Apply the alignment style
          }}
        />
      </div>

    </div>
  );
}

export default App;





// Second Method:-

// import React, { useState } from 'react';
// import './App.css'; // Assuming your styles are defined in this CSS file


// const App = () => {
//   const [isBold, setIsBold] = useState(false);
//   const [isItalic, setIsItalic] = useState(false);
//   const [isUnderline, setIsUnderline] = useState(false);

//   const toggleBold = () => setIsBold(!isBold);
//   const toggleItalic = () => setIsItalic(!isItalic);
//   const toggleUnderline = () => setIsUnderline(!isUnderline);

//   const getContainerClass = () => {
//     let className = 'container';
//     if (isBold) className += ' bold';
//     if (isItalic) className += ' italic';
//     if (isUnderline) className += ' underline';
//     return className;
//   }

//   return (
//     <>
//       <div className={getContainerClass()} contentEditable></div><br />
//       <div className='d-flex justify-content-center'>
//         <input type="button" className="boldText" value="Bold" onClick={toggleBold} />
//         <input type="button" className="italicText" value="Italic" onClick={toggleItalic} />
//         <input type="button" className="underlineText" value="Underline" onClick={toggleUnderline} />
//       </div>
//     </>
//   );
// }

// export default App;