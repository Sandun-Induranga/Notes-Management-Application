import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("db.db");

db.transaction((tx) => {
  tx.executeSql(
    "create table if not exists notes (id integer primary key not null, image text, title text, content text);"
  );
});

export default db;
