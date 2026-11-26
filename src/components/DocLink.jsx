const DocLink = ({ href, children }) => (
  <a className="doc-link" href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

export default DocLink;
