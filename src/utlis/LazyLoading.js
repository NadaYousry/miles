import React from "react";

export const AdminPanel = React.lazy(() =>
  import("./../Containers/AdminPanel")
);
export const Home = React.lazy(() =>
  import("./../Containers/HomePage")
);
export const HomePageBodyContainer = React.lazy(() =>
  import("./../Containers/HomePageBodyContainer")
);
export const AboutPage = React.lazy(() =>
  import("./../Containers/AboutPage")
);
export const PrivateLessonsPage = React.lazy(() =>
  import("./../Containers/PrivateLessonsPage")
);
export const GroupLessonsPage = React.lazy(() =>
  import("./../Containers/GroupLessonsPage")
);
export const ReviewsPage = React.lazy(() =>
  import("./../Containers/ReviewsPage")
);
export const GalleryPage = React.lazy(() =>
  import("./../Containers/GalleryPage")
);
export const FAQsPage = React.lazy(() =>
  import("./../Containers/FAQsPage")
);
export const Loader = React.lazy(() =>
  import("./../components/Loader")
);