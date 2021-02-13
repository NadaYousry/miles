import React from 'react';
import PrivateLessonCardContainer from '../../components/PrivateLessonCardContainer';
const PrivateLessonsPage = ({isMobileScreen}) => {
  return (
    <>
      <div className="row">
            <div className="col-12  px-1 mb-2">
              <PrivateLessonCardContainer find={true} isMobileScreen={isMobileScreen} />
            </div>
      </div>
    </>
  );
};

export default PrivateLessonsPage;
