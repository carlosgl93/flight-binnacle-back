import diaryData from "../../data/diaryData";
import { NonSensitiveDiaryEntry, DiaryEntry } from "../../types";

const diaries: DiaryEntry[] = diaryData;

const getEntries = (): DiaryEntry[] => {
  return diaries;
};

const addData = () => {
  return null;
};

const getNonSensitiveEntries = (): NonSensitiveDiaryEntry[] => {
  return diaries.map(({ id, date, weather, visibility }) => ({
    id,
    date,
    weather,
    visibility,
  }));
};

const findById = (id: string): DiaryEntry | undefined =>
  diaries.find((d) => String(d.id) === id);

export default {
  getEntries,
  addData,
  getNonSensitiveEntries,
  findById,
};
