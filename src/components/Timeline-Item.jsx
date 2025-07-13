// src/components/TimelineItem.jsx
import React from 'react';

const TimelineItem = ({ data, isLeft }) => {
  return (
    <div className={`flex flex-col md:flex-row items-center ${isLeft ? 'md:flex-row-reverse' : ''} mb-10`}>
      <div className="w-full md:w-1/2 p-4">
        <div className="bg-white shadow-md p-6 rounded-lg">
          <p className="text-gray-600">{data.description}</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-10">
        <div className="bg-cyan-800 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mb-2">
          {data.id < 10 ? `0${data.id}` : data.id}
        </div>
        <div className="h-full w-1 bg-cyan-800"></div>
      </div>
      <div className="w-full md:w-1/2 p-4">
        <h3 className="text-lg font-semibold">{data.title}</h3>
        <p className="text-cyan-800">{data.company}</p>
        <p className="text-gray-500">{data.date}</p>
      </div>
    </div>
  );
};

export default TimelineItem;
