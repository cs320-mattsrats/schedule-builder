import React from 'react';

// Define prop types for ClassBox component
interface ClassBoxProps {
  className: string;
  startTime: number;
  endTime: number;
}

// Component for a single class box
const ClassBox: React.FC<ClassBoxProps> = ({ className, startTime, endTime }) => {
  return (
    <div className={`class-box ${className}`} style={{ gridRow: `${startTime} / ${endTime}` }}>
      {/* You can add more details like class name, instructor, etc. */}
    </div>
  );
};

export default ClassBox;
