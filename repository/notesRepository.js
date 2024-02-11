import { openDatabase } from "../db/db";

const db = openDatabase();

export const createNote = (note) => {
  db.transaction((tx) => {
    tx.executeSql(
      "insert into notes (image, title, content) values (?, ?, ?)",
      [note.image, note.title, note.content]
    );
  });
};

export const readNotes = () => {
  db.transaction((tx) => {
    tx.executeSql("select * from notes", [], (_, { rows: { _array } }) => {
      return _array;
    });
  });
};

export const updateNote = (note) => {
  db.transaction((tx) => {
    tx.executeSql(
      "update notes set image = ?, title = ?, content = ? where id = ?",
      [note.image, note.title, note.content, note.id]
    );
  });
};

export const deleteNote = (id) => {
  db.transaction((tx) => {
    tx.executeSql("delete from notes where id = ?", [id]);
  });
};
