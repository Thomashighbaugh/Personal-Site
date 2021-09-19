import { FunctionComponent } from 'react';

const ContentWrapper: FunctionComponent = ({ children }) => {
  return <section className="m-0 p-0">{children}</section>;
};

export default ContentWrapper;
