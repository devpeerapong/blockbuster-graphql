type Book = {
  id: string;
  type: "book";
  title: string;
  year?: number;
  available: boolean;
  numberOfPages?: number;
};
type Movie = {
  id: string;
  type: "movie";
  title: string;
  year?: number;
  available: boolean;
  duration: number;
};

type Media = Book | Movie;

export type BorrowMedia = {
  id: string;
  media: Media;
  user: User;
  borrowedAt: Date;
};

export type User = {
  id: string;
};

export const users = new Map<string, { borrowedAt: Date; mediaId: string }[]>();
export const medias = new Map([
  [
    "qaghk",
    {
      id: "qaghk",
      type: "movie",
      title: "motionless",
      year: 1995,
      available: true,
      duration: 92,
    },
  ],
  [
    "uvhsh",
    {
      id: "uvhsh",
      type: "book",
      title: "worth by",
      year: 1900,
      numberOfPages: 49,
      available: true,
    },
  ],
  [
    "dhfnc",
    {
      id: "dhfnc",
      type: "movie",
      title: "ouch fearful or",
      year: 2019,
      available: true,
      duration: 119,
    },
  ],
  [
    "fkbto",
    {
      id: "fkbto",
      type: "book",
      title: "once half within",
      year: null,
      numberOfPages: 161,
      available: true,
    },
  ],
  [
    "ghhbx",
    {
      id: "ghhbx",
      type: "book",
      title: "whose generous",
      year: 1982,
      numberOfPages: 116,
      available: true,
    },
  ],
  [
    "bdcza",
    {
      id: "bdcza",
      type: "book",
      title: "rundown educate inside",
      year: 1913,
      numberOfPages: 233,
      available: true,
    },
  ],
  [
    "lakjw",
    {
      id: "lakjw",
      type: "movie",
      title: "failing prudent",
      year: 1999,
      available: true,
      duration: 121,
    },
  ],
  [
    "epbwb",
    {
      id: "epbwb",
      type: "book",
      title: "oh admired phooey",
      year: null,
      numberOfPages: 226,
      available: true,
    },
  ],
  [
    "euahk",
    {
      id: "euahk",
      type: "book",
      title: "gadzooks",
      year: null,
      numberOfPages: 178,
      available: true,
    },
  ],
  [
    "auuht",
    {
      id: "auuht",
      type: "book",
      title: "although ouch carboxyl",
      year: 1971,
      numberOfPages: 283,
      available: true,
    },
  ],
  [
    "njosk",
    {
      id: "njosk",
      type: "movie",
      title: "kite",
      year: 1926,
      available: true,
      duration: 141,
    },
  ],
  [
    "gairf",
    {
      id: "gairf",
      type: "book",
      title: "fan feisty",
      year: null,
      numberOfPages: 104,
      available: true,
    },
  ],
  [
    "jlrvz",
    {
      id: "jlrvz",
      type: "book",
      title: "ouch suddenly",
      year: null,
      numberOfPages: 203,
      available: true,
    },
  ],
  [
    "xhlzc",
    {
      id: "xhlzc",
      type: "movie",
      title: "flay condominium um",
      year: 1946,
      available: true,
      duration: 204,
    },
  ],
  [
    "zgfyn",
    {
      id: "zgfyn",
      type: "movie",
      title: "pimple gah identical",
      year: 1987,
      available: true,
      duration: 177,
    },
  ],
  [
    "wjrll",
    {
      id: "wjrll",
      type: "movie",
      title: "spiffy",
      year: 1981,
      available: true,
      duration: 120,
    },
  ],
  [
    "vifrs",
    {
      id: "vifrs",
      type: "movie",
      title: "whose commitment",
      year: 1921,
      available: true,
      duration: 126,
    },
  ],
  [
    "odgax",
    {
      id: "odgax",
      type: "movie",
      title: "helpless",
      year: 1951,
      available: true,
      duration: 157,
    },
  ],
  [
    "omjip",
    {
      id: "omjip",
      type: "movie",
      title: "cartel stealthily dutiful",
      year: 2006,
      available: true,
      duration: 117,
    },
  ],
  [
    "bnbiq",
    {
      id: "bnbiq",
      type: "movie",
      title: "yahoo",
      year: 2014,
      available: true,
      duration: 186,
    },
  ],
  [
    "lauld",
    {
      id: "lauld",
      type: "movie",
      title: "urban ew bottom",
      year: 2001,
      available: true,
      duration: 191,
    },
  ],
  [
    "dytpb",
    {
      id: "dytpb",
      type: "movie",
      title: "because",
      year: 1997,
      available: true,
      duration: 149,
    },
  ],
  [
    "kfakt",
    {
      id: "kfakt",
      type: "book",
      title: "before",
      year: 1951,
      numberOfPages: 266,
      available: true,
    },
  ],
  [
    "tevyl",
    {
      id: "tevyl",
      type: "movie",
      title: "hinder outside",
      year: 1917,
      available: true,
      duration: 166,
    },
  ],
  [
    "tjymn",
    {
      id: "tjymn",
      type: "book",
      title: "abaft money",
      year: 2021,
      numberOfPages: 232,
      available: true,
    },
  ],
  [
    "mbgci",
    {
      id: "mbgci",
      type: "book",
      title: "uncover exactly implant",
      year: 1972,
      numberOfPages: 134,
      available: true,
    },
  ],
  [
    "kolfe",
    {
      id: "kolfe",
      type: "movie",
      title: "imitation prattle",
      year: 2012,
      available: true,
      duration: 200,
    },
  ],
  [
    "purtk",
    {
      id: "purtk",
      type: "movie",
      title: "furthermore",
      year: 1941,
      available: true,
      duration: 120,
    },
  ],
  [
    "zqumd",
    {
      id: "zqumd",
      type: "book",
      title: "chat",
      year: 1909,
      numberOfPages: 185,
      available: true,
    },
  ],
  [
    "wjgbn",
    {
      id: "wjgbn",
      type: "book",
      title: "webbed automate playfully",
      year: null,
      numberOfPages: 294,
      available: true,
    },
  ],
  [
    "xtxtm",
    {
      id: "xtxtm",
      type: "movie",
      title: "aside more er",
      year: 1934,
      available: true,
      duration: 199,
    },
  ],
  [
    "urmiq",
    {
      id: "urmiq",
      type: "book",
      title: "yet yahoo",
      year: null,
      numberOfPages: 271,
      available: true,
    },
  ],
  [
    "eklgq",
    {
      id: "eklgq",
      type: "book",
      title: "underneath endorsement lettuce",
      year: 2024,
      numberOfPages: 247,
      available: true,
    },
  ],
  [
    "snyoa",
    {
      id: "snyoa",
      type: "book",
      title: "but yippee whereas",
      year: 1932,
      numberOfPages: 108,
      available: true,
    },
  ],
  [
    "yyufe",
    {
      id: "yyufe",
      type: "movie",
      title: "afore sterilise frequent",
      year: 1955,
      available: true,
      duration: 203,
    },
  ],
  [
    "oussj",
    {
      id: "oussj",
      type: "movie",
      title: "oof joyfully",
      year: 1960,
      available: true,
      duration: 122,
    },
  ],
  [
    "ahpfj",
    {
      id: "ahpfj",
      type: "movie",
      title: "memorize on",
      year: 1970,
      available: true,
      duration: 121,
    },
  ],
  [
    "agrmq",
    {
      id: "agrmq",
      type: "book",
      title: "free",
      year: 2011,
      numberOfPages: 70,
      available: true,
    },
  ],
  [
    "wnrof",
    {
      id: "wnrof",
      type: "book",
      title: "plant nasal sniffle",
      year: 2002,
      numberOfPages: 251,
      available: true,
    },
  ],
  [
    "ojpsm",
    {
      id: "ojpsm",
      type: "movie",
      title: "gah quarrelsomely jug",
      year: 1944,
      available: true,
      duration: 93,
    },
  ],
  [
    "eomne",
    {
      id: "eomne",
      type: "book",
      title: "seaside impure",
      year: null,
      numberOfPages: 217,
      available: true,
    },
  ],
  [
    "kwerq",
    {
      id: "kwerq",
      type: "movie",
      title: "drat supermarket cater",
      year: 2011,
      available: true,
      duration: 199,
    },
  ],
  [
    "nilvi",
    {
      id: "nilvi",
      type: "book",
      title: "comfortable abaft bring",
      year: null,
      numberOfPages: 299,
      available: true,
    },
  ],
  [
    "natin",
    {
      id: "natin",
      type: "movie",
      title: "but",
      year: 1971,
      available: true,
      duration: 120,
    },
  ],
  [
    "cjjhl",
    {
      id: "cjjhl",
      type: "movie",
      title: "motherly through lost",
      year: 2015,
      available: true,
      duration: 167,
    },
  ],
  [
    "pbnwa",
    {
      id: "pbnwa",
      type: "book",
      title: "unfinished",
      year: null,
      numberOfPages: 258,
      available: true,
    },
  ],
  [
    "wybnj",
    {
      id: "wybnj",
      type: "book",
      title: "well-groomed apropos",
      year: 1977,
      numberOfPages: 191,
      available: true,
    },
  ],
  [
    "dqool",
    {
      id: "dqool",
      type: "book",
      title: "greatly",
      year: null,
      numberOfPages: 253,
      available: true,
    },
  ],
  [
    "ltfae",
    {
      id: "ltfae",
      type: "book",
      title: "unimpressively",
      year: null,
      numberOfPages: 224,
      available: true,
    },
  ],
  [
    "swqbw",
    {
      id: "swqbw",
      type: "movie",
      title: "dreamily",
      year: 1970,
      available: true,
      duration: 169,
    },
  ],
]);
