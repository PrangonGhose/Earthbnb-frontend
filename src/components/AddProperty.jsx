import './stylesheets/AddProperty.css';

function AddProperty() {
  return (
    <div className="main-add-container">
      <div className="add-form-container">
        <h1 className="add-form-title">Add A New House</h1>
        <form className="inputs-container">
          <div className="add-input-container">
            <label htmlFor="nameInput" className="add-label">
              Name
              <br />
              <input id="nameInput" className="add-input" type="name" />
            </label>
          </div>
          <div className="add-input-container">
            <label htmlFor="addressInput" className="add-label">
              Address
              <br />
              <input id="addressInput" className="add-input" type="text" />
            </label>
          </div>
          <div className="add-input-container">
            <label htmlFor="roomsInput" className="add-label">
              Rooms
              <br />
              <input id="roomsInput" className="add-input" type="number" />
            </label>
          </div>
          <div className="add-input-container">
            <label htmlFor="bedsInput" className="add-label">
              Beds
              <br />
              <input id="bedsInput" className="add-input" type="number" />
            </label>
          </div>
          <div className="add-input-container">
            <label htmlFor="picturesInput" className="add-label">
              Picture
              <br />
              <input id="picturesInput" className="add-input" type="text" />
            </label>
          </div>
          <div className="add-input-container">
            <label htmlFor="priceInput" className="add-label">
              Price by night
              <br />
              <input id="priceInput" className="add-input" type="number" />
            </label>
          </div>
          <div className="add-input-container">
            <label htmlFor="descriptionInput" className="add-label">
              Description
              <br />
              <input id="descriptionInput" className="add-input" type="text" />
            </label>
          </div>
          <button type="submit" className="add-submit-btn">Add House</button>
        </form>
      </div>
    </div>
  );
}

export default AddProperty;
