import { phaseAGames } from '@/seed/data/phase-a';
import { phaseBGames } from '@/seed/data/phase-b';
import { phaseCGames } from '@/seed/data/phase-c';
import type { GameSeed, TheoryLesson } from '@/types/game';

export const seedGames: GameSeed[] = [...phaseAGames, ...phaseBGames, ...phaseCGames];

export const theoryLessons: TheoryLesson[] = [
  {
    id: 'what-is-game-theory',
    group: 'principles',
    title: 'What Is Game Theory?',
    summary: 'The study of strategic decision-making when your outcome depends on what others do.',
    content:
      'Game theory analyzes situations where players make choices that affect each other. At the card table, every draw, bid, play, or pass is a decision under uncertainty about hidden information and opponent behavior.\n\nYou do not need formulas to benefit from game theory. The core habit is asking: "Given what I know and what they might do, what choice maximizes my chances?" That framing applies equally to bidding in Spades and deciding whether to knock in Gin Rummy.\n\nCard games are excellent game-theory laboratories because rules are explicit, information is partially hidden, and outcomes are repeatable.',
    links: [
      { label: 'Wikipedia: Game theory', url: 'https://en.wikipedia.org/wiki/Game_theory' },
    ],
  },
  {
    id: 'zero-sum',
    group: 'principles',
    title: 'Zero-Sum vs Non-Zero-Sum',
    summary: 'When one player\'s gain equals another\'s loss — and when it does not.',
    content:
      'A zero-sum game is pure competition: total gains and losses balance to zero. Poker chips changing hands is zero-sum. Hearts penalty points are zero-sum within a hand because every point one player avoids, someone else collects.\n\nMany card games are not strictly zero-sum across a full session. Partnership games like Bridge reward cooperation within a team while competing against opponents. Cooperative games like Regicide have all players win or lose together.\n\nRecognizing which structure you are in changes strategy. In zero-sum contexts, hurting the leader is often correct. In cooperative contexts, helping a teammate maximize their chance to win helps you too.',
    links: [],
  },
  {
    id: 'information',
    group: 'principles',
    title: 'Perfect vs Imperfect Information',
    summary: 'What you can see on the table — and what remains hidden.',
    content:
      'Chess has perfect information: both players see the full board. Most card games have imperfect information because hands are hidden. Bridge adds controlled revelation through the dummy; Poker adds betting on hidden hole cards.\n\nImperfect information forces probabilistic thinking. You infer likely holdings from bids, discards, and play patterns. A discard of a high heart in Hearts signals something very different from keeping it.\n\nSolitaire sits at the other extreme: you often see all cards (FreeCell) or most layout cards (Klondike), making it a puzzle against the deck rather than hidden opponents.',
    links: [],
  },
  {
    id: 'dominant-strategies',
    group: 'principles',
    title: 'Dominant Strategies',
    summary: 'When one choice is best regardless of what opponents do — and when to break the pattern.',
    content:
      'A dominant strategy is your best move no matter what others choose. In simple endgames it appears often: if you can gin, gin. If you must follow suit and only one card is legal, play it.\n\nMost interesting card moments lack a dominant strategy because the best play depends on opponent behavior. Leading low hearts early in Hearts can be safe or suicidal depending on who holds the queen of spades.\n\nGood players identify when a choice is truly dominant versus when it only looks safe. They also watch for moments when a normally weak play becomes dominant because of score, position, or table dynamics.',
    links: [],
  },
  {
    id: 'expected-value',
    group: 'principles',
    title: 'Expected Value at the Table',
    summary: 'Weighing probability × payoff before you commit to a line.',
    content:
      'Expected value (EV) means multiplying each outcome\'s probability by its benefit and summing the results. If drawing from stock gives you a 20% chance to complete a meld worth 30 points, that line is worth roughly 6 points in expectation.\n\nEV thinking helps in bidding (Spades, Bridge), fishing (Casino, Scopa), and endgame counting (Cribbage pegging). You compare lines that feel different — "take the sure 2 points" versus "risk 5 for a 40% shot at 10."\n\nYou rarely compute numbers at the table, but training yourself to estimate odds improves discard choices, trump timing, and when to break safe conventions.',
    links: [],
  },
  {
    id: 'nash-equilibrium',
    group: 'principles',
    title: 'Nash Equilibrium in Plain Language',
    summary: 'A stable state where no player wants to unilaterally change strategy.',
    content:
      'A Nash equilibrium is a pattern of choices where, if everyone knew everyone else\'s strategy, no single player would benefit from switching alone. In repeated card games, house conventions often evolve toward informal equilibria — standard leads, passing habits, or bid ranges.\n\nEquilibrium does not mean optimal for everyone. A table meta where everyone always passes safe cards can be stable even if a deviant strategy would exploit it — until others adapt.\n\nUseful takeaway: if your opponents play predictably, deviate profitably until they adjust. If they adapt, return to balanced play. Card tables are dynamic, not static.',
    links: [
      { label: 'Wikipedia: Nash equilibrium', url: 'https://en.wikipedia.org/wiki/Nash_equilibrium' },
    ],
  },
  {
    id: 'signaling-bluffing',
    group: 'principles',
    title: 'Signaling, Bluffing & Reading Opponents',
    summary: 'What your cards say — intentionally or not.',
    content:
      'Every visible action sends a signal. A high bid claims strength. A passive pass suggests weakness or trap. In Cheat and Skull, signaling and bluffing are the entire game.\n\nLegal signaling in partnership games is restricted to card choice — but those choices still communicate. Leading trump may ask partner to return a suit. Discarding high cards in a suit denies length.\n\nBluffing works when the cost of being wrong is borne by the caller. Successful bluffers pick spots where opponents lack information and where the penalty for folding is small compared to the reward of catching a lie.',
    links: [],
  },
  {
    id: 'cooperative-competitive',
    group: 'principles',
    title: 'Cooperative vs Competitive Dynamics',
    summary: 'When teammates share a goal — and when everyone plays for themselves.',
    content:
      'Competitive free-for-all games (Hearts, Crazy Eights) reward direct self-interest. Partnership games split the table into teams with shared scoring. Cooperative games like Regicide or Eleusis (as mortals vs God) align players against the system or a single role.\n\nTeam games require balancing individual card strength with partnership needs. A strong hand in Bridge supports bidding; a weak hand may still add value through defensive leads.\n\nMisreading which dynamic you are in causes classic errors: helping an opponent in Hearts when you should be attacking the leader, or competing with partner in Canasta when melding together is better.',
    links: [],
  },
  {
    id: 'trick-taking',
    group: 'families',
    title: 'Trick-Taking Basics',
    summary: 'How tricks, trump, and following suit work across Bridge, Hearts, Spades, and Whist.',
    content:
      'Trick-taking games revolve around rounds called tricks. One player leads a card and others must follow suit if they can. The highest card of the led suit wins — unless trump is played, in which case the highest trump wins.\n\nKey concepts:\n• Follow suit: play the same suit as the lead when possible\n• Trump: a designated suit (or no-trump) that beats plain suits\n• Void: having no cards of a suit — often when trumping is legal\n• Partnership signals: in team games, legal communication is only through card choice\n\nStart with Whist or Hearts before Bridge. Oh Hell teaches bidding without partnership complexity.',
    links: [
      { label: 'Pagat: Trick-taking games', url: 'https://www.pagat.com/class/trick.html' },
      { label: 'Wikipedia: Trick-taking', url: 'https://en.wikipedia.org/wiki/Trick-taking_game' },
    ],
  },
  {
    id: 'rummy-melds',
    group: 'families',
    title: 'Rummy & Meld Games',
    summary: 'Sets, runs, drawing, and discarding in Gin Rummy, Canasta, and related games.',
    content:
      'Rummy-family games share a draw-discard loop and melds of sets (same rank) or runs (consecutive same suit).\n\nKey concepts:\n• Deadwood: unmelded cards counted against you\n• Lay off: adding to opponent melds after they knock (Gin rules vary)\n• Canasta: seven-card melds with wild-card limits\n• Stock vs discard: picking from discard often reveals information\n\nGin Rummy is the best 2-player teacher. Canasta adds partnership and pile pickup strategy.',
    links: [
      { label: 'Pagat: Rummy games', url: 'https://www.pagat.com/rummy/rummy.html' },
    ],
  },
  {
    id: 'shedding',
    group: 'families',
    title: 'Shedding & Climbing Games',
    summary: 'Empty your hand first in Crazy Eights, President, and Palace-style games.',
    content:
      'Shedding games reward emptying your hand. Climbing games add beat-or-pass structure on combinations.\n\nKey concepts:\n• Reverse / skip action cards (Crazy Eights house rules)\n• Social ranks (President/Scum) carry to next hand\n• Clear-the-pile combos (four of a kind in Palace)\n\nThese are ideal party starters — rules are forgiving and table talk is part of the fun.',
    links: [
      { label: 'Pagat: Shedding games', url: 'https://www.pagat.com/class/shed.html' },
    ],
  },
  {
    id: 'scoring',
    group: 'families',
    title: 'Scoring Patterns',
    summary: 'Points from captures, pegging, penalties, and contracts.',
    content:
      'Card games score in several recurring patterns:\n\n• Penalty points (Hearts): avoid specific cards\n• Contract points (Spades, Bridge): bid tricks and meet quota\n• Capture points (Casino, Scopa): card combinations on table\n• Pegging (Cribbage): incremental scoring during play\n• Match bonuses: gin, schneider, shooting the moon\n\nAlways agree target score and special bonuses before the first deal.',
    links: [
      { label: 'Pagat: Card game index', url: 'https://www.pagat.com/class/' },
    ],
  },
  {
    id: 'house-rules',
    group: 'families',
    title: 'House Rules & Customization',
    summary: 'Why Fifty-Two lets you override rules and add notes.',
    content:
      'Most card games survive through table-specific house rules: Crazy Eights action cards, Hearts passing variants, or Mao\'s secret traditions.\n\nFifty-Two stores canonical rules separately from your custom notes and overrides. Use notes for table agreements ("we play draw-two on 2s") and overrides when you replace entire sections.\n\nWhen teaching a game, read the summary aloud, walk through setup, then play one practice hand with open cards.',
    links: [],
  },
];
