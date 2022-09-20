document.addEventListener("DOMContentLoaded", (e) => {
  renderData();
});
const renderData = () => {
  const aboutBlockData = [
    {
      artist_description:
        "Elizabeth Woolridge Grant (born June 21, 1985), known professionally as Lana Del Rey, is an American singer and songwriter. Her music is noted for its cinematic quality and exploration of tragic romance, glamour, and melancholia, containing references to contemporary pop culture and 1950s–1960s Americana. She is the recipient of various accolades, including two Brit Awards, two MTV Europe Music Awards, and a Satellite Award, in addition to nominations for six Grammy Awards and a Golden Globe Award. Variety honored her at their Hitmakers Awards for being one of the most influential singer-songwriters of the 21st century. Raised in upstate New York, Del Rey moved to New York City in 2005 to pursue a music career. After numerous projects, including her self-titled debut studio album, Del Rey's breakthrough came in 2011 with the viral success of her single Video Games, she subsequently signed a recording contract with Polydor and Interscope. She achieved critical and commercial success with her second album, Born to Die (2012), which contained the sleeper hit Summertime Sadness. Del Reys third album, Ultraviolence (2014), featured greater use of guitar-driven instrumentation and debuted atop the U.S. Billboard 200. Her fourth and fifth albums, Honeymoon (2015) and Lust for Life (2017), saw a return to the stylistic traditions of her earlier releases, while her critically acclaimed sixth album, Norman Fucking Rockwell! (2019), explored soft rock. Del Rey followed this with the albums Chemtrails over the Country Club and Blue Banisters, both in 2021. Del Rey has collaborated on soundtracks for visual media, in 2013, she wrote and starred in the critically acclaimed musical short Tropico, and performed Young and Beautiful for the romantic drama The Great Gatsby. In 2014, she recorded Once Upon a Dream for the dark fantasy adventure film Maleficent and the self-titled theme song for the biopic Big Eyes. Del Rey collaborated with Ariana Grande and Miley Cyrus on Don't Call Me Angel for the action comedy Charlie's Angels (2019), which peaked at number 13 on the U.S. Billboard Hot 100. Outside of music, Del Rey published the poetry and photography collection Violet Bent Backwards over the Grass (2020). ",
    },
  ];
  const discographyBlockData = [
    {
      title: "Lana Del Ray",
      released: "January 4, 2010",
      album_pic:
        "https://upload.wikimedia.org/wikipedia/en/0/08/Lana_Del_Ray_-_Lana_Del_Ray_%282010%29.png",
    },
    {
      title: "Born to Die",
      released: "January 27, 2012",
      album_pic:
        "https://upload.wikimedia.org/wikipedia/en/2/29/BornToDieAlbumCover.png",
    },
    {
      title: "Ultraviolence",
      released: "June 13, 2014",
      album_pic:
        "https://upload.wikimedia.org/wikipedia/en/6/6a/UltraviolenceLDR.png",
    },
    {
      title: "Honeymoon",
      released: " September 18, 2015",
      album_pic:
        "https://upload.wikimedia.org/wikipedia/en/7/75/Lana_Del_Rey_-_Honeymoon_%28Official_Album_Cover%29.png",
    },
    {
      title: "Lust for Life",
      released: "July 21, 2017",
      album_pic:
        "https://upload.wikimedia.org/wikipedia/en/1/1a/Lana_Del_Rey_-_Lust_for_Life.png",
    },
    {
      title: "Norman Fucking Rockwell!",
      released: "August 30, 2019",
      album_pic:
        "https://upload.wikimedia.org/wikipedia/en/8/8a/Lana_Del_Rey_-_Norman_Fucking_Rockwell.png",
    },
    {
      title: "Chemtrails over the Country Club",
      released: "March 19, 2021",
      album_pic:
        "https://upload.wikimedia.org/wikipedia/en/1/1f/Lana_Del_Rey_-_Chemtrails_over_the_Country_Club.png",
    },
    {
      title: "Blue Banisters",
      released: "October 22, 2021",
      album_pic:
        "https://upload.wikimedia.org/wikipedia/en/1/10/Lana_Del_Rey_-_Blue_Banisters_cover.png",
    },
  ];

  const p = document.createElement("p");
  const discography_block = document.querySelector(".discography-block");
  const music_block = document.querySelector(".music-block");
  function showText() {
    aboutBlockData.map((item) => {
      let about_block = document.querySelector(".about-block");
      p.classList.add("show-text");
      p.textContent = item.artist_description;
      about_block.append(p);
      discography_block.classList.add("hidden");
      discography_block.classList.remove("show-discography");
      music_block.classList.add("hidden");
      music_block.classList.remove("show-music");
    });
  }

  const sidebar_item1 = document.querySelector(".item-link1");
  sidebar_item1.addEventListener("click", showText);

  const sidebar_item2 = document.querySelector(".item-link2");
  sidebar_item2.addEventListener("click", showDiscography);

  const sidebar_item3 = document.querySelector(".item-link3");
  sidebar_item3.addEventListener("click", showMusicBlock);

  function showDiscography() {
    discography_block.innerHTML = "";
    p.classList.add("hidden");
    p.classList.remove("show-text");
    music_block.classList.add("hidden");
    music_block.classList.remove("show-music");
    discography_block.classList.add("show-discography");
    discography_block.classList.remove("hidden");
    let nav = document.createElement("nav");
    nav.classList.add("discography-menu");
    let ul = document.createElement("ul");
    ul.classList.add("discography-list");

    discographyBlockData.map((item) => {
      let li = document.createElement("li");
      li.classList.add("discography-item");
      let album_pic = document.createElement("img");
      album_pic.classList.add("discography-img");
      let album_title = document.createElement("h1");
      album_title.classList.add("album-title");
      let released_date = document.createElement("span");
      released_date.classList.add("released-date");
      album_title.textContent = item.title;
      released_date.innerHTML = item.released;
      album_pic.setAttribute("src", item.album_pic);
      li.append(album_pic, album_title, released_date);
      ul.append(li);
    });
    nav.append(ul);
    discography_block.append(nav);
  }
  function showMusicBlock() {
    music_block.innerHTML = "";
    p.classList.add("hidden");
    p.classList.remove("show-text");
    discography_block.classList.add("hidden");
    discography_block.classList.remove("show-discography");
    music_block.classList.remove("hidden");
    music_block.classList.add("show-music");

    let video_block_title = document.createElement("h3");
    video_block_title.classList.add("video-block-title");
    video_block_title.textContent =
      "There are unreleased Lana Del Rey songs. Enjoy!";

    let video = document.createElement("iframe");
    video.setAttribute("src", "https://www.youtube.com/embed/OpYtndKTYdY");
    video.setAttribute("frameborder", 0);
    video.setAttribute(
      "allow",
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
    );
    video.setAttribute("allowfullscreen", true);
    video.classList.add("video");

    music_block.append(video_block_title, video);
  }
};
