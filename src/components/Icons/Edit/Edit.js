import React from 'react';

function Edit(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 25 25"
      {...props}>
      <path
        fill="#000"
        d="M20.97 12.01c-.55 0-1 .45-1 1v2.55c0 1.9-1.55 3.45-3.45 3.45H9.4c-1.9 0-3.45-1.55-3.45-3.45V8.44c0-1.9 1.55-3.45 3.45-3.45h4.54c.55 0 1-.45 1-1s-.45-1-1-1H9.4c-3.01 0-5.45 2.45-5.45 5.45v7.12c0 3.01 2.45 5.45 5.45 5.45h7.12c3.01 0 5.45-2.45 5.45-5.45v-2.55c0-.55-.45-1-1-1z"
      />
      <path
        fill="#000"
        d="M21.87 4.39l-.38-.38c-.61-.61-1.11-.92-1.61-1.02-.55-.1-1.05.07-1.48.5l-6.87 6.91c-.29.29-.46.68-.49 1.12l-.17 2.16c-.05.36.08.71.37 1 .25.25.55.38.85.38h.11l2.14-.18c.46-.04.87-.22 1.17-.52l6.89-6.9c.2-.2.65-.66.54-1.4-.08-.51-.4-1.01-1.07-1.68v.01zm-7.72 8.51l-1.22.1.1-1.26 6.64-6.68c.09.07.23.18.41.37l.38.38c.18.18.3.31.37.41l-6.68 6.69v-.01z"
      />
    </svg>
  );
}

export default Edit;
