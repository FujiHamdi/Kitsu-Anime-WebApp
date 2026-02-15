import React from "react";
import { FadeWrapper, FullScreen, Spinner } from "../styles/layout";
import { Button } from "../styles/button";
import { Message } from "../styles/text";

const PageStatus = ({ loading, error, onRetry, children }) => {
  if (loading) {
    return (
      <FullScreen role="status" aria-busy="true">
        <Spinner />
      </FullScreen>
    );
  }

  if (error) {
    return (
      <FullScreen role="alert" aria-live="assertive">
        {error && <Message>{error}</Message>}
        {onRetry && <Button onClick={onRetry}>Retry</Button>}
      </FullScreen>
    );
  }

  return <FadeWrapper>{children}</FadeWrapper>;
};

export default React.memo(PageStatus);
