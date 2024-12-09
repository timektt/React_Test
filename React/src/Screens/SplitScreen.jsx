import React from 'react';
import './SplitScreen.css';
import Header from './Header';

const SplitScreen = () => {
  return (
    <div className="container">
      {/* ฝั่งซ้าย */}
      <div className="left-pane">
        <Header />
      </div>

      {/* ฝั่งขวา */}
      <div className="right-pane">
        {/* ตัวอย่างเนื้อหาเลื่อน */}
        {Array.from({ length: 50 }, (_, i) => (
          <p key={i}>This is scrollable content #{i + 1}.</p>
        ))}
      </div>
    </div>
  );
};

export default SplitScreen;
