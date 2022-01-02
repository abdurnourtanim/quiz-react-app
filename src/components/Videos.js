import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import useVideos from "../hooks/useVideos";
import Video from "./Video";

const Videos = () => {
  const [page, setPage] = useState(1);

  const { loading, error, videos, hasMore } = useVideos(page);

  return (
    <div>
      {videos.length > 0 && (
        <InfiniteScroll
          dataLength={videos.length}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          next={() => setPage(page + 6)}
        >
          {videos.map(({ title, youtubeID, noq }) =>
            noq > 0 ? (
              <Link to={`/quiz/${youtubeID}`} key={youtubeID}>
                <Video title={title} id={youtubeID} noq={noq} />
              </Link>
            ) : (
              <Video title={title} id={youtubeID} noq={noq} key={youtubeID} />
            )
          )}
        </InfiniteScroll>
      )}

      {!loading && videos.length === 0 && <div>No data found!</div>}
      {error && <div>There was a problem!</div>}
      {loading && <div>Loading...</div>}
    </div>
  );
};

export default Videos;
