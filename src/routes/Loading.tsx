import React from "react";

const Loading = () => {
  return (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        color: "#fff",
        background: "#000"
    }}>
      <h2>Loading...</h2>
    </div>
  );
};

export default Loading;