import Button from "@/components/Button/Button";
import Card from "@/components/Card/Card";
import FilterMenu from "@/components/FilterMenu/Filtermenu";
import React from "react";
import "@/app/internships/internship.css";

function Internship() {
  return (
    <div className="internshipSection">
      <FilterMenu />

      <main className="cardContainer">
        <Card
          role="Front-end Developer"
          company="ABC Pvt Ltd."
          desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione quos quas, esse optio maiores voluptatum reprehenderit id odit temporibus dolor!"
          link="/#link"
        />
        <Card
          role="Front-end Developer"
          company="ABC Pvt Ltd."
          desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione quos quas, esse optio maiores voluptatum reprehenderit id odit temporibus dolor!"
          link="/#link"
        />
        <Card
          role="Front-end Developer"
          company="ABC Pvt Ltd."
          desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione quos quas, esse optio maiores voluptatum reprehenderit id odit temporibus dolor!"
          link="/#link"
        />
        {/* <Card /> */}
      </main>
    </div>
  );
}

export default Internship;
