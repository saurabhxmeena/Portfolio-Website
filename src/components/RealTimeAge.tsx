"use client";

import { useEffect, useState } from "react";

interface RealTimeAgeProps {
  birthDate: Date;
}

export function RealTimeAge({ birthDate }: RealTimeAgeProps) {
  const [age, setAge] = useState<string>("0.000000000");

  useEffect(() => {
    const updateAge = () => {
      const now = new Date().getTime();
      const birth = birthDate.getTime();
      const diffInMilliseconds = now - birth;
      
      // Calculate milliseconds in a year (accounting for leap years on average)
      const millisecondsInYear = 365.25 * 24 * 60 * 60 * 1000;
      const exactAge = diffInMilliseconds / millisecondsInYear;
      
      setAge(exactAge.toFixed(9));
    };

    updateAge();
    const interval = setInterval(updateAge, 50);

    return () => clearInterval(interval);
  }, [birthDate]);

  return <span className="tabular-nums">{age}</span>;
}
