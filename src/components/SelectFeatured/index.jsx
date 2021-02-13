import React, { useState } from "react";
import ButtonComponent from "../Button";
import GroupLessonCardWithCheck from "../GroupLessonCardWithCheck";
import GroupLessonCardSelectTrainer from "../GroupLessonCardSelectTrainer";
import "./style.css";
const SelectFeatured = ({ title, isMobileScreen }) => {
  const gruopLessons = [
    {
      id:1,
      groupFor: " Kids | 4-7",
      experience:"For Intermediate & Advanced Students",
      groupName: "Junior 8-12 fairland Recreational Park",
      description:
        "Get one on one private instruction. Improve faster working on specific skills.",
      price: "$20/hr",
      place: "Fairland Recreational Park ",
      howFar:"0 miles away",
      label: "Group",
      date: "23 Aug - 13 Sep",
      time: "4:00pm - 5:00pm",
    },
    {
      id:2,
      groupFor: "Kids | 4-7",
      experience:"For Intermediate & Advanced Students",
      groupName: "Junior 8-12 fairland Recreational Park",
      description:
        "Get one on one private instruction. Improve faster working on specific skills.",
      price: "$20/hr",
      place: "Fairland Recreational Park ",
      howFar:"0 miles away",
      label: "Group",
      date: "23 Aug - 13 Sep",
      time: "4:00pm - 5:00pm",
    },
  ];
  const selectGruopLessonsTrainee = [
    {
      id:1,
      groupFor: " Kids | 4-7",
      experience:"For Intermediate & Advanced Students",
      groupName: "Junior 8-12 fairland Recreational Park",
      description:
        "Get one on one private instruction. Improve faster working on specific skills.",
      price: "$20/hr",
      place: "Fairland Recreational Park ",
      howFar:"0 miles away",
      label: "Group",
      date: "23 Aug - 13 Sep",
      time: "4:00pm - 5:00pm",
    },
  ];
  return (
    <div className="form-group-container">
      <form className="form-group">
        <div className="row form-title">
          <div className="col-12 d-flex align-items-center justify-content-between">
            <label className="form-label">{title}</label>
            <ButtonComponent share={""} text={"Update"} theme={"light-green"} />
          </div>
        </div>
        <div className="form-body text-left py-2">
          <div className="row">
            {gruopLessons.map((lesson, index) => {
              return (
                <div key={index} className="w-100">
                  <GroupLessonCardWithCheck
                    lesson={lesson}
                    isMobileScreen={isMobileScreen}
                  />
                </div>
              );
            })}
            {selectGruopLessonsTrainee.map((lesson, index) => {
              return (
                <div key={index} className="w-100">
                  <GroupLessonCardSelectTrainer lesson={lesson} isMobileScreen={isMobileScreen}/>
                </div>
              );
            })}
          </div>
        </div>
      </form>
    </div>
  );
};

export default SelectFeatured;
