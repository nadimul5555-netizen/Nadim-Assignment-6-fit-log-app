import { Dispatch, SetStateAction } from "react";

export interface LibraryType {
    
    "id": number;
    "name": string;
    "image": string;
    "muscleGroups":string[];
    "equipment": string;
    "difficulty": string;
    "duration": number;
    "caloriesBurned": number;
    "sets": number;
    "reps": string;
    "rating": number;
    "description": string;
    "instructions": string[];
  
}
export interface ParamsType {
    "id":string;
}

export interface StateTypes {
      plan:LibraryType[];
      setPlan:Dispatch<SetStateAction<LibraryType[]>>
     saved:LibraryType[];
     setSaved:Dispatch<SetStateAction<LibraryType[]>>
}