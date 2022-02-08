import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";

function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="home__section">
        <Card
          src="https://news.airbnb.com/wp-content/uploads/sites/4/2019/06/judy-3-1600px.jpg?w=1600"
          title="Unique stays"
          description="comfortable private
places, with room for friend 
and family"
        />

        <Card
          src="https://www.mashvisor.com/blog/wp-content/uploads/2020/01/bigstock-Small-Family-House-With-Curved-317475139.jpg"
          title="Kiwi homes"
          description="A perfect place for holidays"
        />
        <Card
          src="https://www.mashvisor.com/blog/wp-content/uploads/2019/12/House-Hacking-with-Airbnb-How-to-Live-for-Free.jpg"
          title="green way"
          description="Spaces that are more than 
just a place to sleep"
        />
      </div>
      <div className="home__section">
        <Card
          src="https://images.pexels.com/photos/1428348/pexels-photo-1428348.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          title="Ring House"
          description="Superhost with a stunning 
view of beachside."
        />
        <Card
          src="https://images.pexels.com/photos/584399/living-room-couch-interior-room-584399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          title="Rekha house"
          description="Enjoy the amazing sights of marina with this stunning house"
        />
        <Card
          src="https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          title="spring house"
          description="one of the fablous house in ooty"
        />
      </div>
    </div>
  );
}

export default Home;
