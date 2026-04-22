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

  'Wayo': {
    description: 'Wayo is one of Sri Lanka\'s most beloved rock bands, known for blending soulful Sinhala lyrics with powerful guitar-driven melodies. Their iconic songs have defined a generation of Sri Lankan music lovers. Api Kawuruda remains one of the most played Sinhala songs on guitar, and you can find accurate Sinhala guitar chord charts for Wayo songs right here on Sinhala Chroads.',
  },

};

// ── Song data ─────────────────────────────────────────────────────────────────

window.SONGS_DATA = [

  {
    id: 1,
    titleRoman: 'Api Kawuruda',
    titleSi:    'අපි කවුරුද',
    artist:     'Wayo',
    key:        'A',
    beat:       '4/4',
    capo:       0,
    tags:       ['top100'],
    description: 'Api Kawuruda (අපි කවුරුද) by Wayo is one of the most iconic Sinhala rock songs ever recorded. Guitar chords in the key of A — uses A, E, D, Bm, F#m, Asus2. A must-know for any Sinhala guitar player.',
    content:
`[Verse 1]
Asus2
සී සී කඩ විසිරුණු සිතුවිලි
E
දිය බුබුළේ නළියන පෙන කැටි වාගේ
Asus2
නැතිවා... හුදෙකලාවේ තනි වී සිටියම
E
සිහින ආකරයක වැටුණා වාගේ
Asus2
නිමාවක් නෑ...

[Chorus]
D              Bm
මොහොතින් මොහොතට ගෙවෙන කාලය
D         Bm             E
දැනෙනවා කා..ටත් එක විදියට
A                   E
ගිනියම් ඉර, සඳ සිසිලස
D              E                    A
අතරේ හොයනවා හොයනවා මේ අපි කවුරුද..
A                   E
ගීයකී ලොව, සිතුවම් කළ
D              E                    A
අතරේ අහනවා බලනවා මේ අපි කවුරුද..

[Verse 2]
A
ඉර බැස යන ගොම්මන් යාමේ
E
තරු එක දෙක දිලිසෙන කළු අහසේ
A
හෝ ඕ... ඕ
A
ගලා හැලෙන රිද්මේ නැහැවී
E
ඇදී යන්නේ ඈතින් ඈතට පාවී
A
සුළඟ සේ

D              Bm
මොහොතින් මොහොතට ගෙවෙන කාලය
D         Bm             E
දැනෙනවා කා..ටත් එක විදියට
A                   E
ගිනියම් ඉර, සඳ සිසිලස
D              E                    A
අතරේ හොයනවා හොයනවා මේ අපි කවුරුද..
A                   E
ගීයකී ලොව, සිතුවම් කළ
D              E                    A
අතරේ අහනවා බලනවා මේ අපි කවුරුද..

[Interlude]
|A |- |- |- |
|F#m |- |- |- |
|D |- |- |- |
|E |- |- |- |

A                   E
ගිනියම් ඉර, සඳ සිසිලස
D              E                    A
අතරේ හොයනවා හොයනවා මේ අපි කවුරුද..
A                   E
ගීයකී ලොව, සිතුවම් කළ
D              E                    A
අතරේ අහනවා බලනවා මේ අපි කවුරුද..`
  },

];
