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
//   titleSi     — Sinhala Unicode title (shown in song header)
//   artist      — exact artist name (must match ARTISTS_DATA key below)
//   key         — original key, e.g. 'C', 'Am', 'G'
//   beat        — time signature, e.g. '4/4', '3/4', '6/8'
//   capo        — fret number (0 = no capo)
//   tags        — array, add 'top100' to include in the Top 100 list
//   description — SEO-only sentence (not shown on screen, used in meta/JSON-LD)
//   content     — chord sheet (template literal, keep as-is)
// ─────────────────────────────────────────────────────────────────────────────

// ── Artist descriptions ───────────────────────────────────────────────────────
// Shown on the artist page. Keep keyword-rich (name + "Sinhala guitar chords").
// To add a new artist: add an entry here with the exact same name as in songs.

window.ARTISTS_DATA = {

  'Dhanithi Sri': {
    description: 'Dhanithi Sri is a popular Sri Lankan singer and songwriter celebrated for his emotive Sinhala ballads. His music blends heartfelt lyrics with melodic guitar arrangements, making his songs favourites for guitarists learning Sinhala chords. Songs like Digasiye and Alokawarsha are among the most searched Sinhala guitar chords online.',
  },

  'Bathiya & Santhush': {
    description: 'Bathiya & Santhush (BnS) are a legendary Sri Lankan music duo who redefined Sinhala pop music across three decades. Their iconic romantic songs and timeless melodies remain some of the most requested Sinhala guitar chord charts. If you are looking for Sinhala chords for BnS songs, you will find clean and accurate chord sheets here.',
  },

  'Rookantha Gunathilake': {
    description: 'Rookantha Gunathilake is a veteran Sri Lankan vocalist and music composer renowned for his classical Sinhala songs and distinctive voice. His contributions to modern Sinhala music span several decades, and his songs are beloved by guitarists of all levels. Find free Sinhala guitar chord charts for Rookantha Gunathilake songs here.',
  },

  'Sanath Nandasiri': {
    description: 'Sanath Nandasiri is an iconic Sri Lankan singer celebrated for his rich voice and his immense contribution to Sinhala music and folk traditions. His songs carry a timeless quality that resonates with audiences across generations. Discover free guitar chord charts for Sanath Nandasiri songs on Sinhala Chroads.',
  },

};

// ── Song data ─────────────────────────────────────────────────────────────────

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
    description: 'Digasiye (දිගාසියේ) is a romantic Sinhala ballad by Dhanithi Sri. Guitar chords in the key of E with capo on the 4th fret — shapes are C, F, Am, G, Dm7. A popular choice for beginner and intermediate Sinhala guitar players.',
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
    description: 'Alokawarsha (ආලෝකවර්ෂ) is a melodic Sinhala love song by Dhanithi Sri. Guitar chords in the key of G — uses G, D, Em, C, a great progression for beginner Sinhala guitar players.',
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
    description: 'Aprakashitha (අප්‍රකාශිත) by Dhanithi Sri is a soulful Sinhala waltz in 3/4 time. Guitar chords in Am — uses Am, G, F, C.',
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
    description: 'Loka Sithiyama (ලෝක සිතියම) by Dhanithi Sri is a popular Sinhala song with guitar chords in the key of D — uses D, A, Bm, G.',
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
    description: 'Pandama (පන්දම) by Dhanithi Sri is a romantic Sinhala guitar song played with capo on the 2nd fret. Chord shapes are Am, G, F, C — easy for beginner guitarists.',
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
    description: 'Sandaganawa (සඳගනවා) by Dhanithi Sri is a beautiful Sinhala song with guitar chords in G — uses G, Em, C, D. One of the most played Dhanithi Sri songs on guitar.',
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
    description: 'Obe Wage Kenek (ඔබේ වාගේ කෙනෙක්) by Bathiya & Santhush is one of the most iconic BnS songs. Guitar chords in C — uses C, G, Am, F. A must-know for Sinhala guitar players.',
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
    description: 'Hadawatha Payana (හදවත පායන) by Bathiya & Santhush is a classic BnS love song. Guitar chords in G — uses G, D, Em, C.',
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
    description: 'Sudu Araliya (සුදු අරලිය) by Rookantha Gunathilake is a timeless Sinhala classic. Guitar chords with capo on the 1st fret — uses F, C, Dm, Bb shapes.',
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
    description: 'Sanda Eliya (සඳ එළිය) by Rookantha Gunathilake is a gentle Sinhala waltz in 3/4 time. Guitar chords in D — uses D, A, Bm, G.',
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
    description: 'Adare Nam (ආදරේ නම්) by Sanath Nandasiri is a beloved Sinhala song by one of Sri Lanka\'s most celebrated vocalists. Guitar chords in C — uses C, G, Am, F.',
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
