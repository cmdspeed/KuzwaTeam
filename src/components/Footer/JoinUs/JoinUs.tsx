import icons from "../../../assets/icon/icon.svg";

export const JoinUs = () => {
  return (
    <div>
      <h2>Join Us</h2>
      <div>
        <div>
          <a
            href="http://intagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="20px" height="20px">
              <use href={`${icons}#instagram`} />
            </svg>
          </a>
          <a
            href="http://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="20px" height="20px">
              <use href={`${icons}#twitter`} />
            </svg>
          </a>
          <a
            href="http://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="20px" height="20px">
              <use href={`${icons}#facebook`} />
            </svg>
          </a>
          <a
            href="http://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="20px" height="20px">
              <use href={`${icons}#linkedin`} />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};
