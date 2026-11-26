const ResultList = ({ items = [] }) => {
  const visibleItems = items.filter(
    ({ value }) => value !== null && value !== undefined && value !== ""
  );

  if (visibleItems.length === 0) return null;

  return (
    <dl className="result-list">
      {visibleItems.map(({ id, label, value, tone }) => (
        <div className="result-list__row" key={id ?? label}>
          <dt className="result-list__label">{label}</dt>
          <dd className={`result-list__value${tone ? ` result-list__value--${tone}` : ""}`}>
            {value}
          </dd>
        </div>
      ))}
    </dl>
  );
};

export default ResultList;
