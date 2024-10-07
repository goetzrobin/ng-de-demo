import { defineEventHandler } from 'h3';
import {queryTalksFromDatabase} from "../../../talk";

export default defineEventHandler(() => {
  return { talks: queryTalksFromDatabase() };
});
