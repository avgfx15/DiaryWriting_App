const DiaryDataKey = "DiaryData";

export const setAllDiaryDataToStorage = (data) => {
  localStorage.setItem(DiaryDataKey, JSON.stringify(data));
};

export const getAllDiaryDataFromStorage = () => {
  const data = localStorage.getItem(DiaryDataKey);
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};
