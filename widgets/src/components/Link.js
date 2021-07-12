import React from 'react';

const Link = ({ className, href, children }) => {
  const onClick = event => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }

    event.preventDefault();

    // change the URL, but don't do a full page refresh
    window.history.pushState({}, '', href);

    // each route could detect the URL has changed
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  };

  return (
    <a onClick={onClick} className={className} href={href}>
      {children}
    </a>
  );
};

export default Link;
