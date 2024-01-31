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
        <span className="fs-4 px-4">
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
            className={`nav-link   ${
              selectedTab === "Home" ? "bg-warning text-dark " : "text-white"
            }`}
            aria-current="page"
          >
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
            className={`nav-link   ${
              selectedTab === "Create Post"
                ? "bg-warning text-dark "
                : "text-white"
            }`}
          >
            Create Post
          </a>
        </li>
      </ul>
      {/* <hr className="mb-5" /> */}
    </div>
  );
};

export default SideBar;
