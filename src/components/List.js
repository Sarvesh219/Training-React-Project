const List = (props) => {
  const { listItems, deleteListItem } = props;
  return (
    <div className="container mt-3 mb-3">
      <div className="row align-items-center justify-content-center">
        {listItems.length > 0 && listItems.map((item) => {
          return (
            <div className="col-12 mb-2 p-2 border" key={item.id}>
              <div className="row justify-content-center align-items-center">
                <div className="col-4">
                  <span>Name: {item.name}</span>
                </div>
                <div className="col-4">
                  <span>Phone: {item.phone}</span>
                </div>
                <div className="col-3">
                  <span>Email: {item.email}</span>
                </div>
                <div className="col-1">
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteListItem(item.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        {listItems.length === 0 && (
          <div className="col-12 mb-2 p-2 border text-center">
            Loading...
          </div>
        )}
      </div>
    </div>
  );
};

export default List;
