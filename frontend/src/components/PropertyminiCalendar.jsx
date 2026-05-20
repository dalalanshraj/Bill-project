import { useEffect, useState, useMemo } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import api from "../api/axios";

export default function PropertyminiCalendar() {

  const [blockedDates, setBlockedDates] = useState([]);

  // =====================================
  // FETCH DATES
  // =====================================

  useEffect(() => {
    fetchDates();
  }, []);

  const fetchDates = () => {

    api
      .get("/calendar/blocked")
      .then((res) =>
        setBlockedDates(res.data)
      )
      .catch(console.log);

  };

  // =====================================
  // FORMAT DATE
  // =====================================

  const formatLocalDate = (date) => {

    return new Intl.DateTimeFormat(
      "en-CA",
      {
        timeZone: "America/Chicago",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }
    ).format(new Date(date));

  };

  // =====================================
  // BLOCKED MAP
  // =====================================

  const blockedMap = useMemo(() => {

    const map = {};

    blockedDates.forEach((booking) => {

      const start = new Date(booking.start);

      const end = new Date(booking.end);

      start.setHours(0, 0, 0, 0);

      end.setHours(0, 0, 0, 0);

      // CHECK-IN
      const startKey =
        formatLocalDate(start);

      if (!map[startKey]) {
        map[startKey] = [];
      }

      map[startKey].push("CIN");

      // CHECK-OUT
      const endKey =
        formatLocalDate(end);

      if (!map[endKey]) {
        map[endKey] = [];
      }

      map[endKey].push("COUT");

      // BOOKED DAYS
      const temp =
        new Date(start);

      temp.setDate(
        temp.getDate() + 1
      );

      while (temp < end) {

        const bookedKey =
          formatLocalDate(temp);

        if (!map[bookedKey]) {
          map[bookedKey] = [];
        }

        map[bookedKey].push("R");

        temp.setDate(
          temp.getDate() + 1
        );

      }

    });

    return map;

  }, [blockedDates]);

  // =====================================
  // DATE TYPE
  // =====================================

  const getDateType = (date) => {

    const today = new Date();

    today.setHours(0, 0, 0, 0);

    const currentDate = new Date(date);

    currentDate.setHours(0, 0, 0, 0);

    // PAST
    if (currentDate < today) {
      return "past-day";
    }

    const currentKey =
      formatLocalDate(currentDate);

    const statuses =
      blockedMap[currentKey] || [];

    const hasCIN =
      statuses.includes("CIN");

    const hasCOUT =
      statuses.includes("COUT");

    const hasR =
      statuses.includes("R");

    // =====================================
    // PREVIOUS DAY
    // =====================================

    const prevDay =
      new Date(currentDate);

    prevDay.setDate(
      prevDay.getDate() - 1
    );

    const prevKey =
      formatLocalDate(prevDay);

    const prevStatuses =
      blockedMap[prevKey] || [];

    const prevHasBooking =
      prevStatuses.includes("R") ||
      prevStatuses.includes("COUT");

    // =====================================
    // TURNOVER
    // =====================================

    // SAME DAY
    if (hasCIN && hasCOUT) {
      return "turnover-day";
    }

    // PREVIOUS DAY BOOKED
    // + CURRENT DAY CHECKIN
    if (hasCIN && prevHasBooking) {
      return "turnover-day";
    }

    // CHECK-IN
    if (hasCIN) {
      return "checkin-day";
    }

    // CHECK-OUT
    if (hasCOUT) {
      return "checkout-day";
    }

    // BOOKED
    if (hasR) {
      return "blocked-day";
    }

    return "available-day";

  };

  // =====================================
  // BLOCK CHECK
  // =====================================

  const isBlocked = (date) => {

    const key =
      formatLocalDate(date);

    const statuses =
      blockedMap[key] || [];

    return (
      statuses.includes("R")
    );

  };

  return (

    <div className="w-full">

      {/* HEADING */}
      <h3 className="text-lg font-semibold text-center mb-4">
        Availability Calendar
      </h3>

      {/* CALENDAR */}
      <DatePicker
        inline
        selected={null}
        onChange={() => {}}
        minDate={new Date()}
        dayClassName={getDateType}
        showOtherMonths={false}
        fixedHeight
        filterDate={(date) => {

          const today = new Date();

          today.setHours(0, 0, 0, 0);

          const current =
            new Date(date);

          current.setHours(
            0,
            0,
            0,
            0
          );

          return (
            current >= today &&
            !isBlocked(date)
          );

        }}
      />

      {/* LEGEND */}
      <div className="flex justify-center gap-6 mt-6 text-sm flex-wrap">

        {/* AVAILABLE */}
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 bg-[#d1fae5] rounded"></span>
          Available
        </div>

        {/* BOOKED */}
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 bg-[#5C5CFF] rounded"></span>
          Booked
        </div>

        {/* CHECK-IN */}
        <div className="flex items-center gap-2">
          <span
            className="w-4 h-4 rounded border"
            style={{
              background:
                "linear-gradient(135deg, #d1fae5 50%, #5C5CFF 50%)",
            }}
          ></span>
          Check-In
        </div>

        {/* CHECK-OUT */}
        <div className="flex items-center gap-2">
          <span
            className="w-4 h-4 rounded border"
            style={{
              background:
                "linear-gradient(315deg, #d1fae5 50%, #5C5CFF 50%)",
            }}
          ></span>
          Check-Out
        </div>

        {/* TURNOVER */}
        <div className="flex items-center gap-2">

          <span className="relative w-4 h-4 rounded overflow-hidden border">

            <span
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom right, #5C5CFF 49%, #d1fae5 51%)",
              }}
            ></span>

            <span
              className="
              absolute
              w-[180%]
              h-[2px]
              bg-black
              top-1/2
              left-[-40%]
              rotate-[-45deg]
            "
            ></span>

          </span>

          Turnover

        </div>

      </div>

      {/* STYLES */}
      <style>{`

/* MAIN */
.react-datepicker {
  width: 100% !important;
  overflow: hidden;
  position: relative;
  max-width: 320px;
  margin: auto;
  border: none;
  font-family: inherit;
}

/* HEADER */
.react-datepicker__header {
  background: transparent;
  border-bottom: none;
}

/* MONTH */
.react-datepicker__current-month {
  font-weight: 600;
  margin-bottom: 10px;
}

/* WEEK */
.react-datepicker__week {
  display: flex;
  justify-content: space-between;
}

/* DAY */
.react-datepicker__day,
.react-datepicker__day-name {
  width: 36px;
  height: 36px;
  line-height: 36px;
  margin: 2px;
  border-radius: 8px;
  position: relative;
}

/* MOBILE */
@media (max-width: 400px) {

  .react-datepicker__day,
  .react-datepicker__day-name {

    width: 30px;
    height: 30px;
    line-height: 30px;
    font-size: 12px;

  }

}

/* DESKTOP */
@media (min-width: 768px) {

  .react-datepicker__day,
  .react-datepicker__day-name {

    width: 40px;
    height: 40px;
    line-height: 40px;

  }

}

/* PAST */
.react-datepicker__day.past-day {

  background: #f1f1f1 !important;

  color: #aaa !important;

  opacity: 0.7 !important;

}

/* AVAILABLE */
.react-datepicker__day.available-day {

  background: #d1fae5 !important;

  color: black !important;

}

/* BOOKED */
.react-datepicker__day.blocked-day {

  background: #5C5CFF !important;

  color: white !important;

}

/* CHECK-IN */
.react-datepicker__day.checkin-day {

  background: linear-gradient(
    135deg,
    #d1fae5 50%,
    #5C5CFF 50%
  ) !important;

  color: black !important;

}

/* CHECK-OUT */
.react-datepicker__day.checkout-day {

  background: linear-gradient(
    315deg,
    #d1fae5 50%,
    #5C5CFF 50%
  ) !important;

  color: black !important;

}

/* TURNOVER */
.react-datepicker__day.turnover-day {

  position: relative !important;

  isolation: isolate;

  overflow: hidden !important;

  color: black !important;

  z-index: 10 !important;
}

.react-datepicker__day.turnover-day::before {

  content: "";

  position: absolute;

  inset: 0;

  border-radius: 8px;

  background: linear-gradient(
    to bottom right,
    #5C5CFF 0%,
    #5C5CFF 49%,
    #5C5CFF 51%,
    #5C5CFF 100%
  );

  z-index: -1;
}

.react-datepicker__day.turnover-day::after {

  content: "";

  position: absolute;

  width: 180%;

  height: 3px;

  background: black;

  top: 50%;

  left: -40%;

  transform: rotate(-45deg);

  z-index: 20;
}

/* OUTSIDE DAYS */
.react-datepicker__day--outside-month {

  visibility: hidden !important;

  pointer-events: none !important;

}

      `}</style>

    </div>

  );

}