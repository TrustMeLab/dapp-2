import { useEffect, useState } from 'react'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}
export function CountDown({ targetDate }: { targetDate: number }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>()
  const calculateTimeLeft = (): TimeLeft => {
    const difference = targetDate - Date.now()
    let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 }
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }
    return timeLeft
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearTimeout(timer)
  })

  return (
    <section id="count-down" className="container drop-shadow-2xl py-12 md:pb-12">
      <div className="days-container">
        <div className="days"></div>
        {timeLeft && <div className="days">{timeLeft.days}</div>}
        <div className="days-label">days</div>
      </div>

      <div className="hours-container">
        <div className="hours"></div>
        {timeLeft && <div className="hours">{timeLeft.hours}</div>}
        <div className="hours-label">hours</div>
      </div>

      <div className="minutes-container">
        <div className="minutes"></div>
        {timeLeft && <div className="minutes">{timeLeft.minutes}</div>}
        <div className="minutes-label">minutes</div>
      </div>

      <div className="seconds-container">
        <div className="seconds"></div>
        {timeLeft && <div className="seconds">{timeLeft.seconds}</div>}
        <div className="seconds-label">seconds</div>
      </div>
    </section>
  )
}
