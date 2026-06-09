import { useState, useEffect } from "react";
import { TARGET_DATE } from "../data";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isCompleted: boolean;
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isCompleted: false,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(TARGET_DATE) - +new Date();
      let timeLeftData: TimeLeft;

      if (difference <= 0) {
        timeLeftData = { days: 0, hours: 0, minutes: 0, seconds: 0, isCompleted: true };
      } else {
        timeLeftData = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
          isCompleted: false,
        };
      }
      setTimeLeft(timeLeftData);
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, []);

  const items = [
    { label: "Días", value: timeLeft.days },
    { label: "Hrs", value: timeLeft.hours },
    { label: "Min", value: timeLeft.minutes },
    { label: "Seg", value: timeLeft.seconds },
  ];

  if (timeLeft.isCompleted) {
    return (
      <div id="countdown-completed" className="text-center font-serif text-lg tracking-widest text-[#D4AF37] italic py-4">
        ¡Llegó el gran día!
      </div>
    );
  }

  return (
    <div id="countdown-timer" className="flex justify-center items-center gap-3 py-3 px-4 bg-white/40 backdrop-blur-md rounded-2xl border border-rosegold/10 w-fit mx-auto shadow-[0_4px_16px_rgba(183,110,121,0.02)]">
      {items.map((item, index) => (
        <div key={item.label} className="flex items-center">
          <div className="flex flex-col items-center px-1 sm:px-1.5">
            <span className="font-serif text-xl sm:text-2xl font-light text-rosegold-dark leading-none mb-1">
              {String(item.value).padStart(2, "0")}
            </span>
            <span className="font-sans text-[8px] uppercase tracking-[0.15em] font-bold text-rosegold-dark/60">
              {item.label}
            </span>
          </div>
          {index < items.length - 1 && (
            <span className="text-lg font-thin text-[#B76E79]/20 self-center mx-1 sm:mx-1.5 select-none">|</span>
          )}
        </div>
      ))}
    </div>
  );
}
