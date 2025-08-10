import { useState } from "react";

const DiaryInputComponent = ({ addNewData, allDiaryData, setAllDiaryData }) => {
  const [inputValue, setInputValue] = useState({
    time: "",
    date: "",
    content: "",
    remark: "",
  });

  // * Handle Change

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // * Handle Submit

  const handleSubmit = (e) => {
    e.preventDefault();

    addNewData(inputValue);
    setInputValue({
      time: "",
      date: "",
      content: "",
      remark: "",
    });
  };

  // $ Render Function
  return (
    <div className="w-4/5 mx-auto">
      <h1 className="heading text-3xl text-center my-3">
        Please enter your diary entry
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col input-group mb-3">
          <label className="form-label text-xl mb-3" htmlFor="title">
            Time
          </label>
          <input
            type="time"
            name="time"
            id=""
            className="border border-white p-3 rounded-md w-full body"
            onChange={handleChange}
            value={inputValue.time}
          />
        </div>
        <div className="flex flex-col input-group mb-3">
          <label className="form-label text-xl mb-3" htmlFor="title">
            Date
          </label>
          <input
            type="date"
            name="date"
            id=""
            className="border border-white p-3 rounded-md w-full body"
            onChange={handleChange}
            value={inputValue.date}
          />
        </div>
        <div className="flex flex-col input-group mb-3">
          <label className="form-label text-xl mb-3" htmlFor="title">
            Content
          </label>
          <textarea
            name="content"
            id=""
            cols="30"
            rows="7"
            className="border border-white p-3 rounded-md w-full body"
            onChange={handleChange}
            value={inputValue.content}
          />
        </div>
        <div className="flex flex-col input-group mb-3">
          <label className="form-label text-xl mb-3" htmlFor="title">
            Remark
          </label>
          <input
            type="text"
            name="remark"
            id=""
            className="border border-white p-3 rounded-md w-full body"
            onChange={handleChange}
            value={inputValue.remark}
          />
        </div>
        <div className="text-center">
          <button
            className="bg-primary py-2 px-4 rounded-md text-primary hover:bg-accent hover:border hover:border-primary hover:text-secondary"
            type="submit"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default DiaryInputComponent;
