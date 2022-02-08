import React from "react";
import "./SearchPage.css";
import { Button } from "@material-ui/core";
import SearchResult from "./SearchResult";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>62 stays - 26 august to 30 august - 2 guest</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <SearchResult
        img="https://images.pexels.com/photos/1428348/pexels-photo-1428348.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        location="Private rooms in center 
            of chennai"
        title="stays at the spacious house"
        description="1 guest - 1 bed room - wifi - kitchen
            -free parking - washing machine"
        star={4.73}
        price="₹1000 / night"
        total="₹3000 total"
      />
      <SearchResult
        img="https://images.pexels.com/photos/584399/living-room-couch-interior-room-584399.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        location="Tambaram - chennai"
        title="popins resort"
        description="2 guest - 2 bed room - wifi - kitchen
            -free parking - washing machine"
        star={4.8}
        price="₹1500 / night"
        total="₹3500 total"
      />
      <SearchResult
        img="https://images.pexels.com/photos/10812974/pexels-photo-10812974.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        location="Avadi - chennai"
        title="rooms at low cost"
        description="1 guest - 1 bed room - wifi - kitchen
            -free parking - washing machine"
        star={4.3}
        price="₹1000 / night"
        total="₹2000 total"
      />
      <SearchResult
        img="https://images.pexels.com/photos/10171454/pexels-photo-10171454.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        location="Bangalore"
        title="special stays"
        description="2 guest - 2 bed room - wifi - kitchen
            -free parking - washing machine"
        star={4.9}
        price="₹1700 / night"
        total="₹3500 total"
      />
      <SearchResult
        img="https://images.pexels.com/photos/10855157/pexels-photo-10855157.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        location="Delhi"
        title="Architect favorite"
        description="1 guest - 1 bed room - wifi - kitchen
            -free parking - washing machine"
        star={4.88}
        price="₹1200 / night"
        total="₹2700 total"
      />
      <SearchResult
        img="https://images.pexels.com/photos/10511472/pexels-photo-10511472.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        location="chennai"
        title="Verdure stays"
        description="1 guest - 1 bed room - wifi - kitchen
            -free parking - washing machine"
        star={4.75}
        price="₹1800 / night"
        total="₹3400 total"
      />
    </div>
  );
}

export default SearchPage;
