const db = require("./dbInit");


exports.toAddToFavourite = (currency, chatId) => {
  return db.execute(
    `INSERT INTO favorite (currency, chatid) VALUES ('${currency}', '${chatId}');`
  );
};


exports.toDeleteFromFavourites = (currency, chatId) => {
  return db.execute(
    `DELETE FROM favorite WHERE currency='${currency}' AND chatid='${chatId}';`
  );
};


exports.toShowAllFavourite = (chatId) => {
  return db.execute(`SELECT * FROM favorite WHERE chatid='${chatId}';`);
};
