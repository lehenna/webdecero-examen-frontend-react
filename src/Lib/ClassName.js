const cn = (...inputs) => {
  return [...new Set(inputs.filter(Boolean))].join(" ");
};

export default cn;
