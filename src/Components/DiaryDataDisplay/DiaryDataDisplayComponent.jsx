import React from "react";

const DiaryDataDisplayComponent = ({ allDiaryData }) => {
  console.log(allDiaryData);
  return (
    <div>
      <h1 className="heading text-3xl text-center my-3">Diary Data Display</h1>
      <table className="w-4/5 mx-auto my-3 p-2">
        <thead className="">
          <tr className="bg-primary text-primary">
            <th className="p-3">No</th>
            <th>Time</th>
            <th>Date</th>
            <th>Content</th>
            <th>Remark</th>
          </tr>
        </thead>

        <tbody className="text-center">
          {allDiaryData.map((data) => (
            <tr key={data.id}>
              <td className="p-3">{data.id}</td>
              <td>{data.time}</td>
              <td>{data.date}</td>
              <td className="text-left px-2">{data.content}</td>
              <td className="text-left px-2">{data.remark}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DiaryDataDisplayComponent;
