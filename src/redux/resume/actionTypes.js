const actionTypes = ['GET'].reduce((acc, requestType) => {
  const result = {...acc};
  ['', '_SUCCESS', '_FAIL'].forEach(suffix => {
    result[`${requestType}${suffix}`] = `${requestType}_RESUME${suffix}`;
  });
  return result;
}, {});

export default actionTypes;
