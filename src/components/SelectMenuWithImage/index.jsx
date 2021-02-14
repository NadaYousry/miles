import React, { useState } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import Coach1 from "../../assets/images/coachs/1.png";
import Coach2 from "../../assets/images/coachs/2.png";
import Coach5 from "../../assets/images/coachs/5.png";
import Coach3 from "../../assets/images/coachs/3.png";
import CircleedImageContainer from "../CircleedIconContainer copy";
import "./style.css";
const SelectMenuWithImage = () => {
  
  const coachs = [
    {
      coachName: "Peter Andrews",
      id: 1,
      image: Coach1,
    },
    {
      coachName: "Jeff Bridges",
      id: 2,
      image: Coach2,
    },
    {
      coachName: "Miles Blackman",
      id: 3,
      image: Coach3,
    },
    {
      coachName: "Miles Blackman",
      id: 4,
      image: Coach3,
    },
    {
      coachName: "Jeff Bridges",
      id: 5,
      image: Coach5,
    },
    {
      coachName: "Peter Andrews",
      id: 6,
      image: Coach2,
    },
    {
      coachName: "Jeff Bridges",
      id: 7,
      image: Coach2,
    },
    {
      coachName: "Jeff Bridges",
      id: 8,
      image: Coach1,
    },
  ];

  return (
    <>
      <DropdownButton title="Select Coach">
        {coachs.map((coach, index) => {
          return (
            <div key={index}>
              <Dropdown.Item
              >
                {coach.coachName}
              </Dropdown.Item>
            </div>
          );
        })}
      </DropdownButton>
      <div className="assign-coach">
        <div className="row flex-column p-3">
          <p className="address-label d-inline-block">Assign a coach</p>
          <div className="assign-coach-card p-3  d-flex align-items-center  flex-wrap">
            {coachs.map((coach, index) => {
              return (
                <div key={index}>
                  <CircleedImageContainer
                    image={coach.image}
                    name={coach.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectMenuWithImage;
