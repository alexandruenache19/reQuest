import React from "react";

const Preloader = () => {
  return (
    <div
      style={{ marginTop: 200, color: '#FF007B' }}
      className="preloader-wrapper big active">
      <div className="spinner-layer spinner-teal-only" style={{color: '#FF007B'}}>
        <div className="circle-clipper left" style={{color: '#FF007B'}}>
          <div className="circle" />
        </div>
        <div className="gap-patch" style={{color: '#FF007B'}}>
          <div className="circle" />
        </div>
        <div className="circle-clipper right" style={{color: '#FF007B'}}>
          <div className="circle" />
        </div>
      </div>
    </div>
  );
};

export default Preloader;
