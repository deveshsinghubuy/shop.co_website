"use client";
import { useState } from "react";
import { Range } from "react-range";

const STEP = 100;
const MIN = 0;
const MAX = 50000;

export default function PriceRange() {
  const [values, setValues] = useState([2000, 15000]);

  return (
    <div className="w-full max-w-60 ">

      <Range
        step={STEP}
        min={MIN}
        max={MAX}
        values={values}
        onChange={(vals) => setValues(vals)}

        renderTrack={({ props, children }) => (
          <div
            {...props}
            className="h-2 w-full bg-gray-300 rounded-full"
          >
            <div
              className="absolute h-2 bg-black rounded-full"
              style={{
                left: `${(values[0] / MAX) * 100}%`,
                width: `${((values[1] - values[0]) / MAX) * 100}%`
              }}
            />
            {children}
          </div>
        )}
        renderThumb={({ props, index }) => {
        const { key, ...rest } = props; 

        return (
            <div key={key} {...rest}
            className="h-5 w-5 bg-black rounded-full shadow-lg flex items-center justify-center"
            >
            <span className="absolute top-6 text-black text-[14px] px-2 py-1 rounded">
                ₹{values[index]}
            </span>
            </div>
        );
        }}

      />
    </div>
  );
}
