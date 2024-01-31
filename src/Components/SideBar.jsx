const SideBar = ({ selectedTab, setSelectedTab }) => {
  const handleSelectTab = (tabName) => {
    setSelectedTab(tabName);
  };

  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 sidebarDisplay">
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <svg
          className="bi pe-none me-2"
          style={{ height: "32px", width: "40px" }}
        >
          <use xlinkHref="#bootstrap"></use>
        </svg>
        <span className="fs-4">
          <h2>Virtuo</h2>
        </span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li
          className="nav-item"
          onClick={() => {
            handleSelectTab("Home");
          }}
        >
          <a
            href="#"
            className={`nav-link text-white  ${
              selectedTab === "Home" && "active"
            }`}
            aria-current="page"
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#home"></use>
            </svg>
            Home
          </a>
        </li>
        <li
          onClick={() => {
            handleSelectTab("Create Post");
          }}
        >
          <a
            href="#"
            className={`nav-link text-white  ${
              selectedTab === "Create Post" && "active"
            }`}
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#speedometer2"></use>
            </svg>
            Create Post
          </a>
        </li>
      </ul>
      {/* <hr className="mb-5" /> */}
    </div>
  );
};

export default SideBar;
