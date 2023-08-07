import { useRouteError } from 'react-router-dom'
import React from 'react';

const Error = () => {
    const err = useRouteError();
    console.log(err);
  return (
    <div>
        <h1>{err.status}</h1>
        Error</div>
  )
}

export default Error;