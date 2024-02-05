const LoadingSpinner = () => {
  return (
    <div>
      <div className="text-center" style={{ marginTop: "10% " }}>
        <div
          className="spinner-border"
          role="status"
          style={{ width: "4rem", height: "4rem" }}
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
