import React, { useEffect, useState } from "react";
import { Button, DatePicker } from "antd";
import moment from "moment";
import get from "lodash/get";
import "antd/dist/antd.css";

const { RangePicker } = DatePicker;
export default function datepicker() {
  const [dateDay, setDateDay] = useState(moment().format("YYYY-MM-DD"));
  const [betweenDate, setBetweenDate] = useState({
    startDate: moment().set("date", 1).format("YYYY-MM-DD"),
    endDate: moment().format("YYYY-MM-DD"),
  });
  console.log("dateDay: ", dateDay);
  console.log("betweenDate: ", betweenDate);

  useEffect(() => {
    const start = betweenDate.startDate;
    const end = betweenDate.endDate;
    if (start == end) {
      const newEnd = moment(end).add(1, "days").format("YYYY-MM-DD");
      console.log("newEnd: ", newEnd);
    }
  }, [betweenDate.startDate, betweenDate.endDate]);
  return (
    <div>
      <h1>bird</h1>
      <Button type="primary">PRESS ME</Button>
      <RangePicker
        format="DD/MM/YYYY"
        onChange={(value) =>
          setBetweenDate({
            startDate: get(value, "[0]").format("YYYY-MM-DD"),
            endDate: get(value, "[1]").format("YYYY-MM-DD"),
          })
        }
      />
      <h2>ผลลัพธ์</h2>
      <h1> startDate:{""}xx/xx/xx</h1>
      <h1> endDate:{""}xx/xx/xx</h1>
      <DatePicker
        format="DD/MM/YYYY"
        onChange={(value) => setDateDay(value.format("YYYY-MM-DD"))}
      />
    </div>
  );
}
