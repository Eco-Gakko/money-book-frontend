import Menu from "../../common/container/Menu";
import CalendarStyle from "../scss/CalendarContainer.module.scss";
import Calendar from "react-calendar";
import Header from "../../common/container/Header";
import { useState } from "react";

const CalendarContainer = () => {
  const [value, onChange] = useState(new Date());

  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Header />
        <Menu />
        <div className={CalendarStyle.wrap}>
          <button>일별</button>
          <button>주별</button>
          <button>월별</button>
          <button>추가</button>
          <div className={CalendarStyle.calendarWrap}>
            <Calendar onChange={onChange} value={value} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CalendarContainer;
