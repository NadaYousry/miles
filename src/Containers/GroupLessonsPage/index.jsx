import React from 'react';
import GroupLessonCardContainer from '../../components/GroupLessonCardContainer';
const GroupLessonsPage = ({isMobileScreen}) => {
  return (
    <>
      <div className="row">
            <div className="col-12  px-1 mb-2">
              <GroupLessonCardContainer isMobileScreen={isMobileScreen} />
            </div>
      </div>
    </>
  );
};

export default GroupLessonsPage;
