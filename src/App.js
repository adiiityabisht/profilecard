import React from 'react'
import Avatar from './components/Avatar'
import SkillList from './components/SkillList'
import Intro from './components/Intro'

const App = () => {
  return (
    <div>
      <div className="card">
        <Avatar />
        <div className="data">
          <Intro />
          <SkillList />
        </div>
      </div>
    </div>
  );
}

export default App