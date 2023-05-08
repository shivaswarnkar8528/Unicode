const isCanadaPostcode = (code) => {
  const pattern = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
  return pattern.test(code);
};
