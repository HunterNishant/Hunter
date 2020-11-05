/*
Author: chankruze (chankruze@geekofia.in)
Created: Fri Nov 06 2020 03:14:58 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from "react";

export const CheckBox = React.forwardRef(({ indeterminate, ...rest }, ref) => {
  const defaultRef = React.useRef();
  const resolvedRef = ref || defaultRef;

  React.useEffect(() => {
    resolvedRef.current.indeterminate = indeterminate;
  }, [resolvedRef, indeterminate]);

  return (
    <>
      <input
        type="checkbox"
        ref={resolvedRef}
        {...rest}
        style={{ border: 0, outline: 0 }}
      />
    </>
  );
});
