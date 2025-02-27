const Tweet = ({ date, msg, name, username }) => {
    return (
      <div className="card" style={{ width: '18rem' }}>
        <div className="card-body">
          <h5 className="card-title">Name: {name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">Username: {username}</h6>
          <p className="card-text">{msg}</p>
          <p className="card-text"><b>date: {date}</b></p>
        </div>
      </div>
    );
  };
  