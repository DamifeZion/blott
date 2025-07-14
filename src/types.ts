import type React from "react";

export type StateAction<T> = React.Dispatch<React.SetStateAction<T>>;
export type FieldT<T> = keyof T;

export type NewsT = {
   id: number;
   datetime: number;
   category: string;
   headline: string;
   image: string;
   related: string;
   source: string;
   summary: string;
   url: string;
};

export type NewsCardT = Omit<NewsT, "id" | "related" | "category" | "summary">

export type ErrorT = {
   message?: string;
}