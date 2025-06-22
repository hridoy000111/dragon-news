import React, { useEffect, useState } from "react";
import moment from "moment";

const Clock = () => {
  const [time, setTime] = useState(moment());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(moment());
    }, 1000); // প্রতি ১ সেকেন্ডে আপডেট হবে

    return () => clearInterval(interval); // কম্পোনেন্ট আনমাউন্ট হলে স্টপ
  }, []);

  return (
    <div className="text-xl font-bold text-gray-400">
      {time.format("dddd, MMMM Do YYYY, h:mm:ss a")}
    </div>
  );
};

export default Clock;
