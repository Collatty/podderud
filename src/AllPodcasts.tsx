import React from "react";

const AllPodcasts: React.FC = () => {
  return (
    <div
      className="shadow-lg p-3 mb-5 bg-white rounded"
      style={{
        width: "80%",
        margin: "10px auto"
      }}
    >
      <iframe
        title="p52"
        width="100%"
        height="300"
        scrolling="no"
        frameBorder="yes"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/691851190&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
      ></iframe>
    </div>
  );
};
export default AllPodcasts;
