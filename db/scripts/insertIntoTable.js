import { pool } from "../index.js";

async function insertIntoTable() {
  const inserted = await pool.query(
    `INSERT INTO advent_calendar (day, activity, link) VALUES 
    (1,'Write a letter to Santa','https://www.postoffice.co.uk/write-to-santa'),
    (2,'Have a great time making this Christmas art project','https://craftsbyamanda.com/waterless-snow-globes/#wprm-recipe-container-31489'),
    (3,'Bake a unique Christmas cookie','https://www.recipetineats.com/christmas-cookies-vanilla-biscuits/'),
    (4,'Christmas song dance party','https://www.youtube.com/watch?v=Qkk1L8CQKA0'),
    (5,'Make a wreath for your door','https://www.youtube.com/watch?v=s1kUKXIEouE'),
    (6,'Make a gingerbread house','https://www.bbcgoodfood.com/recipes/simple-gingerbread-house'),
    (7,'Treat yourself with an amazing hot chocolate','https://downshiftology.com/recipes/best-hot-chocolate/'),
    (8,'Wear a Christmas jumper for charity','https://www.savethechildren.org.uk/christmas-jumper-day'),
    (9,'Celebrate international Christmas','https://www.whychristmas.com/cultures/'),
    (10,'Take cupcakes to charity shop volunteers','https://www.amazon.co.uk/Strong-Cupcake-muffin-insert-Cupcakes/dp/B005PLTP2I/ref=asc_df_B005PLTP2I/?tag=googshopuk-21&linkCode=df0&hvadid=344385374383&hvpos=&hvnetw=g&hvrand=2710133497382681943&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1007230&hvtargid=pla-907630875832&psc=1'),
    (11,'Relax and listen to calm Christmas carol','https://www.youtube.com/watch?v=_H6nNysTQs8&vl=en'),
    (12,'Decorate your house with Christmas decor','https://www.youtube.com/watch?v=gE7iqtZd5Lk'),
    (13,'Go for a Christmas light scavenger hunt','https://www.myfrugalhome.com/printable-christmas-light-scavenger-hunt/'),
    (14,'Sing a carol for a good cause','https://www.doorstepcarols.co.uk/'),
    (15,'Make gift tags from old Christmas cards','https://www.youtube.com/watch?v=H_PWz6_oADA'),
    (16,'Watch a Christmas film','https://www.goodhousekeeping.com/holidays/christmas-ideas/g30200011/funny-christmas-movies/'),
    (17,'Make some delicious mince pies','https://www.bbcgoodfood.com/recipes/mince-pies'),
    (18,'Go ice skating','https://www.google.com/search?q=ice+skating+near+me'),
    (19,'Do some Christmas colouring','https://www.homemade-gifts-made-easy.com/christmas-coloring-pages-for-adults.html'),
    (20,'Make a family photo Christmas card','https://www.adobe.com/express/create/card/christmas'),
    (21,'Host a Christmas game night - boardgames or trivia','https://parade.com/943457/parade/christmas-trivia/'),
    (22,'Buy socks for a homeless shelter','https://www.amazon.co.uk/Funnlot-Christmas-Fluffy-Chrsitmas-Slipper/dp/B0965CDX9P/ref=sr_1_1_sspa?adgrpid=52013571966&gclid=Cj0KCQiA1sucBhDgARIsAFoytUvrV-jzsctKtndLRT4vTMdrn0NugpXDbpGLIr85BYnaodykmSTr3FYaApBYEALw_wcB&hvadid=259085248712&hvdev=c&hvlocphy=1007230&hvnetw=g&hvqmt=e&hvrand=16588926302397299064&hvtargid=kwd-380758684929&hydadcr=28150_1724812&keywords=christmas+socks&qid=1670579318&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1'),
    (23,'Make a Christmas playlist','https://www.youtube.com/watch?v=dfTCObc5BuE'),
    (24,'Leave something out for Santa and his reindeer','https://www.bbcgoodfood.com/howto/guide/what-leave-santa'),
    (25,'Go for a Christmas Day walk','https://media.tenor.com/WFGR9SsMst4AAAAC/elf-christmas.gif');`
  );
  console.log("values inserted into advent calendar table", inserted.command);
}

try {
  await insertIntoTable();
} catch (err) {
  console.error(err);
} finally {
  await pool.end();
}
