import * as SQLite from "expo-sqlite";

const createNote = (db, note) => {
  db.transaction((tx) => {
    tx.executeSql(
      "insert into notes (image, title, content) values (?, ?, ?)",
      [note.image, note.title, note.content]
    );
  });
};

const readNotes = (db, setNotes) => {
  db.transaction((tx) => {
    tx.executeSql("select * from notes", [], (_, { rows: { _array } }) => {
      setNotes(_array);
    });
  });
};

const updateNote = (db, note) => {
  db.transaction((tx) => {
    tx.executeSql(
      "update notes set image = ?, title = ?, content = ? where id = ?",
      [note.image, note.title, note.content, note.id]
    );
  });
};

const deleteNote = (db, id) => {
  db.transaction((tx) => {
    tx.executeSql("delete from notes where id = ?", [id]);
  });
};
