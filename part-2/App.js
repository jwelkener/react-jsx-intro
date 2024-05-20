import React from 'react';
import Tweet from './Tweet';

function App() {
  return (
    <div>
      <Tweet username="johndoe" name="John Doe" date="May 19, 2024" message="This is my first tweet!" />
      <Tweet username="janedoe" name="Jane Doe" date="May 18, 2024" message="Hello world!" />
      <Tweet username="foobar" name="Foo Bar" date="May 17, 2024" message="React is awesome!" />
    </div>
  );
}

export default App;
