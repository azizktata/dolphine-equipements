import { Data } from "@/types";

let cachedData: Data | null = null;

export const getCachedData = (): Data | null => cachedData;

export const setCachedData = (data: Data): void => {
    cachedData = data;
}