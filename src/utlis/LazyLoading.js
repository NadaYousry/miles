import React from "react";

export const BodyContainer = React.lazy(() =>
  import("./../Containers/BodyContainer")
);
export const AboutPage = React.lazy(() =>
  import("./../Containers/AboutPage")
);
export const Home = React.lazy(() =>
  import("./../Containers/HomePage")
);
export const ReviewsPage = React.lazy(() =>
  import("./../Containers/ReviewsPage")
);
export const GalleryPage = React.lazy(() =>
  import("./../Containers/GalleryPage")
);
export const Loader = React.lazy(() =>
  import("./../components/Loader")
);