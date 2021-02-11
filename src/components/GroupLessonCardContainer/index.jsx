import React from "react";
import GroupLessonCard from "../GroupLessonCard";
import DontFoundYouNeedCard from "../DontFoundYouNeedCard";
import TraineeImage from "./../../assets/images/private-lessons/Bitmap.png";
import "./style.css";
const GroupLessonCardContainer = ({ isMobileScreen }) => {
  const privateLessons = [
    {
      groupFor: "Beginner - Kids | 4-7",
      groupName: "Footwork Patterns",
      description:
        "Improve with other players in a similar skill set and a fun environment.",
      price: "$20/hr",
      place: "Fairland Recreational Park ",
      label: "Group",
      date: "23 Aug - 13 Sep",
      time: "4:00pm - 5:00pm",
    },
    {
      groupFor: "Beginner - Kids | 4-7",
      groupName: "Footwork Patterns",
      description:
        "Improve with other players in a similar skill set and a fun environment.",
      price: "$20/hr",
      place: "Fairland Recreational Park ",
      label: "Group",
      date: "23 Aug - 13 Sep",
      time: "4:00pm - 5:00pm",
    },
    {
      groupFor: "Beginner - Kids | 4-7",
      groupName: "Footwork Patterns",
      description:
        "Improve with other players in a similar skill set and a fun environment.",
      price: "$20/hr",
      place: "Fairland Recreational Park ",
      label: "Group",
      date: "23 Aug - 13 Sep",
      time: "4:00pm - 5:00pm",
    },
    {
      groupFor: "Beginner - Kids | 4-7",
      groupName: "Footwork Patterns",
      description:
        "Improve with other players in a similar skill set and a fun environment.",
      price: "$20/hr",
      place: "Fairland Recreational Park ",
      label: "Group",
      date: "23 Aug - 13 Sep",
      time: "4:00pm - 5:00pm",
    },
    {
      groupFor: "Beginner - Kids | 4-7",
      groupName: "Footwork Patterns",
      description:
        "Improve with other players in a similar skill set and a fun environment.",
      price: "$20/hr",
      place: "Fairland Recreational Park ",
      label: "Group",
      date: "23 Aug - 13 Sep",
      time: "4:00pm - 5:00pm",
    },
    {
      groupFor: "Beginner - Kids | 4-7",
      groupName: "Footwork Patterns",
      description:
        "Improve with other players in a similar skill set and a fun environment.",
      price: "$20/hr",
      place: "Fairland Recreational Park ",
      label: "Group",
      date: "23 Aug - 13 Sep",
      time: "4:00pm - 5:00pm",
    },
    {
      groupFor: "Beginner - Kids | 4-7",
      groupName: "Footwork Patterns",
      description:
        "Improve with other players in a similar skill set and a fun environment.",
      price: "$20/hr",
      place: "Fairland Recreational Park ",
      label: "Group",
      date: "23 Aug - 13 Sep",
      time: "4:00pm - 5:00pm",
    },
  ];
  return (
    <div className={"private-lessons-container"}>
      {privateLessons.map((lesson, index) => {
        return (
          <div key={index}>
            <GroupLessonCard lesson={lesson} isMobileScreen={isMobileScreen} />
          </div>
        );
      })}

      <DontFoundYouNeedCard isMobileScreen={isMobileScreen} />
    </div>
  );
};

export default GroupLessonCardContainer;
