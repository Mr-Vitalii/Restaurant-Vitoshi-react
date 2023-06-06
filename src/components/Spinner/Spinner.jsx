import React from 'react';
import './Spinner.scss';
import { RotatingLines } from "react-loader-spinner";


export const Spinner = () => {
  return (
    <div className="spinner-container">
      <RotatingLines
        strokeColor="#FF9846"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </div>
  );
}
