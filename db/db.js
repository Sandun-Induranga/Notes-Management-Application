import * as SQLite from "expo-sqlite";

export const openDatabase = () => {
  const db = SQLite.openDatabase("notes_db.db");
  db.transaction((tx) => {
    tx.executeSql(
      "create table if not exists notes (title text primary key not null, image text, content text);"
    );
  });
  return db;
};
