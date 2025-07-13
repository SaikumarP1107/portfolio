import React from 'react';

const TimelineItem = ({ data, isLeft }) => {
  return (
    <div
      className={`flex flex-col md:flex-row items-center justify-between mb-10 max-sm:mb-3 relative ${
        isLeft ? 'md:flex-row-reverse' : ''
      }`}
    >
      {/* Content Box */}
      <div className="w-full md:w-1/2 p-4">
        <div className="bg-white shadow-md p-6 rounded-lg">
          <p className="text-gray-600 text-base md:text-lg">{data.description}</p>
        </div>
      </div>

      {/* Timeline Dot & Line */}
      <div className="flex flex-col items-center justify-start relative z-10">
        <div className="bg-cyan-800 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mb-2">
          {data.id < 10 ? `0${data.id}` : data.id}
        </div>
        {/* Vertical line only on medium+ screens */}
        <div className="hidden md:block h-full w-1 bg-cyan-800"></div>
      </div>

      {/* Info Box */}
      <div className="w-full md:w-1/2 p-4 text-center md:text-left">
        <h3 className="text-lg md:text-xl font-semibold">{data.title}</h3>
        <p className="text-cyan-800 font-medium">{data.company}</p>
        <p className="text-gray-500 text-sm">{data.date}</p>
      </div>
    </div>
  );
};

export default TimelineItem;
