// ─────────────────────────────────────────────────────────────────────────────
// SINHALA CHROADS — Central Song Database
// ─────────────────────────────────────────────────────────────────────────────
// To add a song: copy a block below, give it the next id, fill in the fields.
// To change a tag: edit the tags array, e.g. tags: ['top100']
// To remove a song: delete its block (and the trailing comma on the one above).
//
// Fields:
//   id          — unique number, never reuse
//   titleRoman  — Singlish name (used in nav, cards, search)
//   titleSi     — Sinhala Unicode title (optional, used in chord sheet header)
//   artist      — exact artist name (must match across songs for grouping)
//   key         — original key, e.g. 'C', 'Am', 'G'
//   beat        — time signature, e.g. '4/4', '3/4', '6/8'
//   capo        — fret number (0 = no capo)
//   tags        — array, add 'top100' to include in the Top 100 list
//   content     — chord sheet (template literal, keep as-is)
// ─────────────────────────────────────────────────────────────────────────────

window.SONGS_DATA = [

  {
    id: 1,
    titleRoman: 'Digasiye',
    titleSi:    'දිගාසියේ',
    artist:     'Dhanithi Sri',
    key:        'E',
    beat:       '4/4',
    capo:       4,
    tags:       ['top100'],
    content:
`Place the capo on 4th fret

[Intro]
|C-- F-- |
|C- F- Am- G|

C     F    C      F
දිගාසියේ.. දිගාසියේ.. //

[Verse]
C                F
කොපුල් තෙමා හිටි හැටියේ..
C                  F
ඒ අවිදා ගිය තරු පෑලේ..
Dm7              G
හීන මවාලා.. ඇත ගිය දන්..
Gm       Bb        C
මා මිය යායි හද ගස්මේ.. //

C
මායාවන් හැඟෙමි..
F
සෙයාවක් වත් නොදී..
Dm7                C
ඈගේ රූ මා ඇතින් විඳෙමි..
C
රූපයේ මන බන්ධනී..
F
ප්‍රේමයේ අනුරාගිනී..
Dm7            C
වේදනාවේ මා තනිවෙමි..

[Chorus]
C     F    Am7    Gsus4 G
දිගාසියේ.. දිගාසියේ.. //

|C- F- Am7- Gsus4-G|

[Verse 2]
C
රූ අඳුන් ගල්වන්නියේ..
F
මා හැඟුම් රිදවන්නියේ..
Dm7                C
රූපයෙන් මන මා මතිවෙමි..
C
රාත්‍රියේ සඳවන් මුවේ..
F
නිල් නුවන් සිපගන්නෙමි..
Dm7              C
මේ සිහිනයේ මා නවතිමි..

[Outro]
C     F    Am7    Gsus4 G
දිගාසියේ.. දිගාසියේ.. //

C-- Dm7-- F-- Gsus4- G
C-- F-- C-- F`
  },

  {
    id: 2,
    titleRoman: 'Alokawarsha',
    titleSi:    'ආලෝකවර්ෂ',
    artist:     'Dhanithi Sri',
    key:        'G',
    beat:       '4/4',
    capo:       0,
    tags:       ['top100'],
    content:
`[Verse]
G         D
ආලෝකවර්ෂ වෙලා..
Em          C
හිතට ඇවිත්..
G         D
සෙනෙහස ගඟ..
Em          C
ඔබ පෙන්නමු..

[Chorus]
G    D    Em   C
ආලෝකවර්ෂ.. ආලෝකවර්ෂ..
G    D    Em   C
හිත ඉගෙනගන්න.. පෙම් සිතුවිලි..`
  },

  {
    id: 3,
    titleRoman: 'Aprakashitha',
    titleSi:    'අප්‍රකාශිත',
    artist:     'Dhanithi Sri',
    key:        'Am',
    beat:       '3/4',
    capo:       0,
    tags:       ['top100'],
    content:
`[Verse]
Am   G
අප්‍රකාශිත..
F    C
සනවෙ හිතේ..

[Chorus]
C    G    Am   F
අප්‍රකාශිත.. අපි සොයමු..`
  },

  {
    id: 4,
    titleRoman: 'Loka Sithiyama',
    titleSi:    'ලෝක සිතියම',
    artist:     'Dhanithi Sri',
    key:        'D',
    beat:       '4/4',
    capo:       0,
    tags:       ['top100'],
    content:
`[Verse]
D       A
ලෝක සිතියම..
Bm      G
ඔබ මගේ..

[Chorus]
D    A    Bm   G
සිතියම.. සිතියම..`
  },

  {
    id: 5,
    titleRoman: 'Pandama',
    titleSi:    'පන්දම',
    artist:     'Dhanithi Sri',
    key:        'C',
    beat:       '4/4',
    capo:       2,
    tags:       ['top100'],
    content:
`Place the capo on 2nd fret

[Verse]
Am         G
පන්දම නොවෙලා..
F            C
රාත්‍රියේ යන..
Am         G
ආදර ගිනි..
F            C
මාමත් ළඟ..

[Chorus]
C    G    Am   F
පන්දම.. පන්දම..
C    G    Am   F
හිතේ දැල්වෙන.. ප්‍රේමය..`
  },

  {
    id: 6,
    titleRoman: 'Sandaganawa',
    titleSi:    'සඳගනවා',
    artist:     'Dhanithi Sri',
    key:        'G',
    beat:       '4/4',
    capo:       0,
    tags:       ['top100'],
    content:
`[Verse]
G    Em
සඳගනවා නුඹ..
C     D
හිතේ නොවනෙ..
G    Em
ඔය හිනාව..
C     D
මගේ ජීවිතේ..

[Chorus]
G    D    Em   C
සඳගනවා.. සඳගනවා..
G    D    Em   C
ආලේ ගිලිහෙන.. රෑ..`
  },

  {
    id: 7,
    titleRoman: 'Obe Wage Kenek',
    titleSi:    'ඔබේ වාගේ කෙනෙක්',
    artist:     'Bathiya & Santhush',
    key:        'C',
    beat:       '4/4',
    capo:       0,
    tags:       ['top100'],
    content:
`[Verse]
C           G
ඔබේ වාගේ කෙනෙක්..
Am          F
මගේ ළිය නැති..

[Chorus]
C    G    Am   F
ඔබේ වාගේ.. ඔබේ වාගේ..`
  },

  {
    id: 8,
    titleRoman: 'Hadawatha Payana',
    titleSi:    'හදවත පායන',
    artist:     'Bathiya & Santhush',
    key:        'G',
    beat:       '4/4',
    capo:       0,
    tags:       ['top100'],
    content:
`[Verse]
G    D
හදවත පායන..
Em   C
හිතේ..

[Chorus]
G    D    Em   C
පායන.. පායන..`
  },

  {
    id: 9,
    titleRoman: 'Sudu Araliya',
    titleSi:    'සුදු අරලිය',
    artist:     'Rookantha Gunathilake',
    key:        'F',
    beat:       '4/4',
    capo:       1,
    tags:       ['top100'],
    content:
`Place the capo on 1st fret

[Verse]
F         C
සුදු අරලිය..
Dm        Bb
පේ‍මේ සුවඳ..

[Chorus]
F    C    Dm   Bb
අරලිය.. අරලිය..`
  },

  {
    id: 10,
    titleRoman: 'Sanda Eliya',
    titleSi:    'සඳ එළිය',
    artist:     'Rookantha Gunathilake',
    key:        'D',
    beat:       '3/4',
    capo:       0,
    tags:       ['top100'],
    content:
`[Verse]
D       A
සඳ එළිය..
Bm      G
රාත්‍රිය..

[Chorus]
D    A    Bm   G
එළිය.. එළිය..`
  },

  {
    id: 11,
    titleRoman: 'Adare Nam',
    titleSi:    'ආදරේ නම්',
    artist:     'Sanath Nandasiri',
    key:        'C',
    beat:       '4/4',
    capo:       0,
    tags:       ['top100'],
    content:
`[Verse]
C       G
ආදරේ නම්..
Am      F
හිතේ..

[Chorus]
C    G    Am   F
ආදරේ.. ආදරේ..`
  },

];
