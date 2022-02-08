import React, { useState } from "react";
import "./Search.css";
import "react-date-range/dist/styles.css";
//main style file
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import { Button } from "@material-ui/core";
import PeopleIcon from "@material-ui/icons/People";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

//date picker
function Search() {
  const history = useHistory();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const setionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  return (
    <div className="search">
      <DateRangePicker ranges={[setSelectionRange]} onChange={handleSelect} />
      <h2>
        Number of guests
        <PeopleIcon />
      </h2>
      <input min={0} defaultValue={2} type="number" />
      <Button onClick={() => history.push("/search")}>Search Airbnb</Button>
    </div>
  );
}

export default Search;
