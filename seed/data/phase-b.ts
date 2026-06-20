import type { GameSeed } from '@/types/game';

export const phaseBGames: GameSeed[] = [
  {
    slug: 'bridge',
    name: 'Contract Bridge',
    summary:
      'The premier partnership trick-taking game. Teams bid to name trump and must fulfill their contract to score.',
    setup:
      'Contract Bridge requires a standard 52-card deck and exactly four players seated in fixed partnerships, with partners sitting opposite each other. The entire deck is dealt so each player receives thirteen cards, typically one card at a time. A bidding box with cards or spoken auction calls is used to record the contract. In duplicate bridge, each table plays the same pre-dealt hands and records results on traveling score sheets; in rubber bridge, partnerships play a series of deals until one side wins two games. Determine dealer and vulnerability (if using duplicate scoring) before the first bid.',
    rules: [
      {
        title: 'The Deal and Rotation',
        content:
          'Deal passes clockwise after each hand. Cards are shuffled and cut, then distributed one at a time until every player holds thirteen cards. The player to the dealer\'s left speaks first in the auction. In duplicate, boards are passed rather than reshuffled between tables. Players may not expose their cards during the deal except through normal bidding and play.',
      },
      {
        title: 'The Auction (Bidding)',
        content:
          'Bidding is an auction to name the final contract. Each bid names a level (1 through 7) and a strain: clubs, diamonds, hearts, spades, or notrump. A bid outranks the previous bid if it names a higher level, or the same level in a higher-ranking strain (clubs lowest, then diamonds, hearts, spades, notrump highest). Players may also double an opponent\'s bid or redouble their own side\'s doubled bid, which affects scoring but does not change the strain. Three consecutive passes end the auction: the last bid becomes the contract, and the bidder on that side becomes declarer.',
      },
      {
        title: 'Opening Lead and Dummy',
        content:
          'When the auction ends, the player to declarer\'s left makes the opening lead face up. Declarer\'s partner then spreads their entire hand face up on the table as dummy; declarer controls both hands for the remainder of the deal. Dummy is laid out in four columns by suit with ranks sorted, and declarer may play from either hand but must follow the rule that dummy plays after declarer\'s card on each trick unless dummy wins the current trick and leads to the next.',
      },
      {
        title: 'Following Suit and Trick-Taking',
        content:
          'On each trick, players must follow suit if they hold a card of the suit led. If unable to follow, they may play any card, including trump. In suit contracts, the trump suit outranks all others; in notrump, there is no trump. The highest trump played wins the trick; if no trump is played, the highest card of the led suit wins. Won tricks are kept face down in front of the player or side that won them, with the lead to the next trick passing clockwise.',
      },
      {
        title: 'Revokes and Penalties',
        content:
          'A revoke occurs when a player fails to follow suit despite holding a card of the led suit. If discovered before the hand ends, the offending side may lose one or two tricks depending on timing and whether the revoke affected the outcome. Tournament directors apply standardized penalty schedules; in casual rubber bridge, players often treat an established revoke as a serious breach and adjust tricks accordingly. Honest errors should be corrected as soon as noticed.',
      },
      {
        title: 'Making and Failing the Contract',
        content:
          'Declarer\'s side must win at least as many tricks as the contract level plus six (a contract of 3♠ requires nine tricks). Making the contract earns score below and above the line depending on format; failing (going down) gives opponents penalty points for each undertrick. Doubled and redoubled contracts increase both rewards and penalties. Vulnerability in duplicate bridge further amplifies undertrick costs on the defending side\'s scoring sheet.',
      },
      {
        title: 'Duplicate Scoring Basics',
        content:
          'In duplicate, each deal is scored in matchpoints or IMPs by comparing your result with other pairs who played the same cards. Making contracts earns points based on level, strain, vulnerability, and whether the contract was doubled. Overtricks score extra; undertricks cost penalty points that escalate when doubled and when vulnerable. Partscores carry forward in some formats but not in others—know your movement\'s rules before sitting down.',
      },
      {
        title: 'Rubber Bridge Scoring',
        content:
          'Rubber bridge uses a line above and below the horizontal line on the score pad. Contract tricks score below the line toward game (100 points needed in one deal for a game in major suits or notrump at standard trick values, 100 in minors at lower per-trick values). Bonuses for slam, honors, and winning the rubber score above the line. The first side to win two games wins the rubber and receives a bonus; unfinished partscores and honors can swing a close rubber.',
      },
      {
        title: 'Slam Bidding and Conventions',
        content:
          'Experienced partnerships use agreed bidding conventions to explore slam possibilities: small slam (twelve tricks) and grand slam (all thirteen). Blackwood and Gerber ask for aces and kings; cue bids show controls. These tools are not mandatory for beginners but explain why auction sequences jump levels rapidly at advanced tables. Always disclose your partnership\'s system to opponents in tournament play.',
      },
      {
        title: 'Ethics and Communication',
        content:
          'Bridge depends on strict rules against unauthorized information. Partners may not signal attitude through tone, hesitations, or special gestures. Alerts and announcements notify opponents when a bid carries a conventional meaning. Good sportsmanship includes courteous play, accurate claim of remaining tricks when obvious, and correcting your own fouls when discovered.',
      },
    ],
    winCondition: 'In rubber bridge, win two games (100+ points below the line). In duplicate, highest score across boards wins.',
    tags: ['trick-taking', 'partnership', '4-player', 'bidding', 'classic'],
    playerMin: 4, playerMax: 4, deckType: 'standard52',
    sourceUrl: 'https://www.pagat.com/auctionwhist/bridge.html', sourceName: 'Pagat.com',
    difficulty: 'advanced', estimatedMinutes: 60,
  },
  {
    slug: 'oh-hell',
    name: 'Oh Hell',
    summary: 'Trick-taking game where players bid exactly how many tricks they will take. Hand size changes each round.',
    setup:
      'Oh Hell uses a standard 52-card deck and accommodates three to seven players seated in a circle. Choose a dealer; deal passes clockwise. The game consists of many rounds in which hand size changes: round one deals one card to each player, round two deals two, and so on upward until the deck cannot deal equally, then hand size decreases back down to one. With more players, the peak hand size is smaller; with fewer players, hands may reach twelve or thirteen cards at the midpoint. Remaining cards form a stock; the top card is turned face up to fix trump for that round (or some groups rotate trump by suit order in a no-trump variant). Keep a running score sheet because cumulative totals determine the winner.',
    rules: [
      {
        title: 'Round Structure and Hand Size',
        content:
          'Each round begins with a fresh deal of the agreed number of cards. When the ascending phase reaches the maximum equal deal for your player count, the next round reduces hand size by one each time until you return to one card. A full session often passes through every hand size twice. The changing hand size is the signature tension: small hands reward precise counting; large hands reward trump control and distribution reading.',
      },
      {
        title: 'Determining Trump',
        content:
          'After dealing, reveal the top card of the stock as trump for the round. The suit of that card beats all others; if the stock is empty after dealing, the last trump suit used may repeat or follow a fixed rotation by agreement. Some house rules play without trump on certain rounds for variety. Everyone sees trump before bidding, but not before evaluating their hand in secret.',
      },
      {
        title: 'The Bidding Restriction',
        content:
          'Each player simultaneously or in turn bids the number of tricks they expect to win, from zero up to the hand size. The dealer bids last and may not choose a bid that makes the total of all bids equal the hand size—someone must be wrong. This forced discrepancy prevents everyone from hitting their contract and keeps scores spread out. Record each bid before play begins; bids are binding.',
      },
      {
        title: 'Leading and Following Suit',
        content:
          'The player to the dealer\'s left leads to the first trick. Players must follow suit if able; if void, they may play any card including trump. Highest trump wins; otherwise highest card of the led suit wins. Won tricks are gathered face down in front of the winner, who leads next. Continue until all cards in the round are played.',
      },
      {
        title: 'Exact Bid Scoring',
        content:
          'Players who take exactly as many tricks as bid score ten points plus their bid amount (bid 3 and take 3 → 13 points). Missing the bid scores zero for that round regardless of how close you came. There is no partial credit for near misses—the all-or-nothing scoring drives conservative and aggressive bidding alike. Add round scores to running totals on the score sheet.',
      },
      {
        title: 'Zero Bids and One-Card Rounds',
        content:
          'Bidding zero is common when void in trump or holding only low cards. In one-card rounds, players often see partial information from the lead and trump card before bidding, making zeros harder but still frequent. Memory of who bid what helps later rounds when hands grow larger. One-card rounds are traditional bookends for the entire session.',
      },
      {
        title: 'Tactics with Few Players',
        content:
          'Three-player Oh Hell reaches very large hands and long trump suits; seven-player games peak around seven cards each. Adjust your aggression based on how many opponents must fail the dealer restriction. When you are dealer with a strong hand, you may be forced into an underbid or overbid you would not otherwise choose—that tension is deliberate.',
      },
      {
        title: 'Common Variants',
        content:
          'Some groups score 10 + bid only on exact hits and give 5 points for off-by-one misses instead of zero. Others allow simultaneous fist bids rather than spoken order. Whist-style ascending then descending hand sizes can skip unusable counts (for example, dealing 11 cards to four players). Agree on variants before starting because they change optimal strategy.',
      },
      {
        title: 'Endgame and Ties',
        content:
          'The final round is usually the last one-card deal after completing the descending sequence. Highest cumulative score wins; ties may stand or play a sudden-death one-card round. Because scoring is cumulative, a strong middle phase with large hands can overcome a poor start. Track scores carefully—comebacks are common when dealers force awkward bids.',
      },
    ],
    winCondition: 'Highest total score after the final 1-card round wins.',
    tags: ['trick-taking', 'bidding', '3-7-players'],
    playerMin: 3, playerMax: 7, deckType: 'standard52',
    sourceUrl: 'https://www.pagat.com/auctionwhist/ohhell.html', sourceName: 'Pagat.com',
    difficulty: 'intermediate', estimatedMinutes: 45,
  },
  {
    slug: 'wizard',
    name: 'Wizard',
    summary: 'Commercial trick-taking game with wizard (highest) and jester (lowest) cards. Bid tricks each round as hand size grows.',
    setup:
      'Wizard uses its dedicated sixty-card deck: fifty-two standard cards plus eight special cards (four Wizards and four Jesters). Three to six players sit in a circle with pencil and paper for scoring. The game spans twenty rounds at maximum player count (one card dealt in round one, two in round two, up to twenty, then optionally back down). With fewer players, extend to higher hand sizes or play up and down as in Oh Hell. Shuffle thoroughly—the special cards dramatically swing trick counts. Deal the agreed number of cards each round; place the remainder face down as stock and turn the top card to indicate trump color (Wizards and Jesters on the turn-up mean no trump or re-deal by house rule).',
    rules: [
      {
        title: 'Special Cards Overview',
        content:
          'Wizards are wild trump that always win tricks unless a later player also plays a Wizard—in which case the first Wizard played wins. Jesters always lose tricks unless every card played on that trick is a Jester, in which case the first Jester played wins. Wizards and Jesters belong to no suit and cannot be used to follow suit unless your entire hand is special cards. They are the primary source of bidding uncertainty.',
      },
      {
        title: 'Bidding Procedure',
        content:
          'After trump is determined (if any), each player bids how many tricks they will take, from zero through the hand size. All bids are recorded; unlike Oh Hell, totals may equal the hand size. Bids are simultaneous in some groups or spoken in turn in others. Overbid hands punish harshly; underbids still cost points. Experienced players track Wizards and Jesters seen across prior rounds.',
      },
      {
        title: 'Leading Rules with Wizards',
        content:
          'The player to the dealer\'s left leads. If the lead is a Wizard, the leader declares the trick\'s led suit for following purposes—or states that no suit applies until a suited card appears. The first Wizard played wins the trick unless another Wizard is played later. Leading a Jester is legal but usually concedes the trick unless everyone else also plays Jesters.',
      },
      {
        title: 'Following Suit and Trump',
        content:
          'When a suited card leads, players must follow that suit if possible. Wizards may be played even when holding the led suit in most official rules—check your edition. If void in the led suit, play any card. When trump color is active, trump cards beat non-trump; Wizards beat ordinary trump. Jesters cannot win against any suited or Wizard card.',
      },
      {
        title: 'Scoring Exact and Missed Bids',
        content:
          'Exact bid: 20 points plus 10 points per trick bid (bid 0 and take 0 → 20; bid 3 and take 3 → 50). Off by one: lose 10 points. Off by two: lose 20. Each further trick off adds another 10-point penalty step. Negative totals are possible early but rare in long games. Mark scores clearly each round because swings are large.',
      },
      {
        title: 'Round Progression',
        content:
          'Increase hand size by one each round until reaching the maximum for your player count, then decrease—or play ascending only to twenty and stop. Dealer rotates clockwise. Special cards appear unpredictably; hand sizes below four cards feel lottery-like, while double-digit hands reward counting and trump management. Many commercial sets include a score pad with printed round numbers.',
      },
      {
        title: 'Trump Indicator Card',
        content:
          'When the turned stock card is a suited card, that suit is trump for the round. Wizard or Jester turn-ups usually mean no trump, or the dealer may turn another card per box rules. No-trump rounds make Jesters even weaker and Wizards even stronger. Announce trump clearly before bidding begins.',
      },
      {
        title: 'Tactical Bidding',
        content:
          'Hold a Wizard early in the hand and you likely have one guaranteed trick; two Wizards suggest two tricks unless opponents also hold them. Jesters in large hands are often discarded on opponents\' sure winners. Counting exposed special cards from prior tricks within a hand helps adjust expectations on later tricks. Zero bids with Jesters and low suited cards are common.',
      },
      {
        title: 'Commercial Deck Notes',
        content:
          'Wizard is also published as a retail card game with branded artwork; rules vary slightly by edition and country. The principles above match the most common tournament-friendly household rules. If playing with a standard deck plus jokers as substitutes, label four jokers as Wizards and four as Jesters and agree on identical behavior before dealing.',
      },
    ],
    winCondition: 'Highest score after the final round wins.',
    tags: ['trick-taking', 'bidding', 'commercial'],
    playerMin: 3, playerMax: 6, deckType: 'standard52+jokers',
    sourceUrl: 'https://www.pagat.com/auctionwhist/wizard.html', sourceName: 'Pagat.com',
    difficulty: 'intermediate', estimatedMinutes: 45,
  },
  {
    slug: 'golf',
    name: 'Golf (Card Game)',
    summary: 'Lay out a grid of face-down cards and swap them for lower values. Lowest total score after nine holes wins.',
    setup:
      'Golf uses a standard 52-card deck and works well for two to six players. Each player builds a personal layout of six cards arranged in two rows of three (some groups use four rows of three for an eighteen-hole feel, or a 3×3 grid of nine cards). Deal cards face down one at a time into the grid; no one looks at face-down cards unless rules allow flipping later. Place the remaining pack face down as the stock and turn one card face up beside it to start the discard pile. Choose whether pairs in the same column cancel to zero before play begins—that variant changes strategy sharply. Agree on the number of holes (rounds), often nine or eighteen, and whether kings are wild or zero.',
    rules: [
      {
        title: 'Card Values',
        content:
          'Standard scoring assigns aces 1 point, numbered cards face value, jacks and queens 10 points, and kings 0 points in the most common American rules. Some families count kings as 13 or make them wild. Write house values on the score sheet to avoid disputes. Lower totals are better—think of strokes in real golf.',
      },
      {
        title: 'Turn Sequence',
        content:
          'On your turn, draw either the top card of the stock (face down) or the top card of the discard pile (face up). You may then replace any one card in your layout—face down or face up—with the drawn card, placing the replaced card face up on the discard pile. If you draw from stock and do not want to use the card, you may discard it face up and flip one face-down card in your layout without swapping (optional rule).',
      },
      {
        title: 'Revealing and Memory',
        content:
          'Face-down cards remain hidden until replaced or flipped by optional rules. When you replace a face-down card, peek at it privately before discarding it—opponents learn its value only from the discard pile. Memory of discarded high cards helps infer what opponents still hide. Some groups require announcing when a column pair cancels.',
      },
      {
        title: 'Column Cancellation',
        content:
          'In the popular pairs variant, two equal cards in the same vertical column score zero for that column regardless of individual values. This reward encourages keeping pairs aligned and watching opponents\' visible discards for matching ranks. Cancellation applies at end of round only, not during play. Without this rule, simply sum all six cards.',
      },
      {
        title: 'Ending a Hole',
        content:
          'A round ends when one player has all cards face up—often they knock or say "done" when their layout is fully exposed. Others take one final turn each, then reveal remaining face-down cards and score. Some rules end immediately when any player finishes, denying equal turns; agree in advance. Record each player\'s hole score on the tally sheet.',
      },
      {
        title: 'Multi-Hole Matches',
        content:
          'Play consecutive holes with the same deck reshuffled between holes or deal fresh layouts from a shuffled pack. Running totals track cumulative strokes. Front nine and back nine splits mirror real golf terminology in eighteen-hole sessions. Lowest aggregate after the last hole wins the match.',
      },
      {
        title: 'Two-Player Considerations',
        content:
          'Head-to-head Golf moves quickly; discard pile choice becomes a direct battle. With more players, stock luck evens out over nine holes. Table talk is usually limited to enforce fair discards—show the card you take from discard immediately. Penalize illegal peeks at face-down cards by counting them as 10 points.',
      },
      {
        title: 'Variants and House Rules',
        content:
          'Power Golf adds special actions on certain ranks. Six-card Golf sometimes uses two parallel three-card columns with different cancellation lines. Nine-card layouts lengthen decisions. Some groups allow swapping two cards in your layout once per hole for a penalty stroke. Document variants on the score sheet header.',
      },
      {
        title: 'Strategy Sketch',
        content:
          'Early turns prioritize replacing unknown cards with middling values from discards. Hold zero-value kings visible to stabilize a column. Watch opponents\' face-up cards to guess which columns might cancel. Ending the hole early can strand opponents with hidden face-down cards—timing the knock matters when final-turn rules apply.',
      },
    ],
    winCondition: 'Lowest total after agreed number of holes (often 9 or 18 rounds) wins.',
    tags: ['matching', 'family', '2-6-players'],
    playerMin: 2, playerMax: 6, deckType: 'standard52',
    sourceUrl: 'https://www.pagat.com/commerce/golf.html', sourceName: 'Pagat.com',
    difficulty: 'beginner', estimatedMinutes: 20,
  },
  {
    slug: 'whist',
    name: 'Whist',
    summary: 'Classic English trick-taking ancestor to bridge. Follow suit, trump if void, highest trump or led suit wins.',
    setup:
      'Whist requires a standard 52-card deck and four players in fixed partnerships seated crosswise. Partners share trick totals and score toward game. Deal thirteen cards to each player, one at a time; the final card of the deal belongs to the dealer and is turned face up on the table to establish trump for that hand. Until trump is revealed, no one may look at the turned card except the dealer, who may pick it up after the first lead if it is their card—some rules leave it on the table until first trick completes. The player to the dealer\'s left leads first. Use a score pad for tricks above book and optional honor bonuses in rubber whist.',
    rules: [
      {
        title: 'Book and Trick Targets',
        content:
          'Each deal awards one point for each trick beyond six that a partnership wins—those six tricks are "book." Winning seven tricks scores 1 point, eight tricks scores 2, and so on up to seven points for a sweep. Defenders aim to limit makers below seven tricks when applicable. Simple social whist may ignore book and count all tricks equally; tournament-style whist uses book strictly.',
      },
      {
        title: 'Following Suit',
        content:
          'Players must follow the led suit if they hold any card of that suit. If void, they may play any card, including trump. The highest trump played wins the trick; if no trump appears, the highest card of the led suit wins. Ace is high in each suit unless a variant specifies otherwise. Won tricks are stacked face down with clear partnership ownership.',
      },
      {
        title: 'Trump Management',
        content:
          'Trump is fixed for the entire hand by the turned card. Drawing trump means forcing opponents to use trump cards early. Leading long non-trump suits before trump is drawn out is classic whist technique. Second and third hand high cards often win plain-suit tricks once trump is exhausted.',
      },
      {
        title: 'Honors (Rubber Whist)',
        content:
          'In rubber whist, holding multiple top trump honors (ace, king, queen, jack of trump) between partners scores bonus points above the line if declared before the next deal. Three honors score 2, four honors score 4, and all five trump honors score 5—or adjusted values by agreement. Honors do not apply in plain trick-count whist without rubber scoring.',
      },
      {
        title: 'Rubber Structure',
        content:
          'A rubber is best of three games. A game is won by reaching five points below the line (or seven in some historical rules) through trick points accumulated across deals. Winning two games wins the rubber and earns a 3-point rubber bonus. Partscores carry forward within a game until the game is won.',
      },
      {
        title: 'Dealer Rotation and Etiquette',
        content:
          'Deal and first lead pass clockwise. Shuffle and offer cut to right-hand opponent. Speak clearly when leading. Revokes are penalized by awarding extra tricks to the non-offending side if discovered in time. Claim remaining tricks only when the order is mathematically forced.',
      },
      {
        title: 'Plain Whist and Short Whist',
        content:
          'Plain whist counts every trick without book—useful for teaching. Short whist plays to fewer game points for faster sessions. Solo whist variants exist for three players with a dummy or rotating partnerships; stick to partnership four-hand rules unless noted.',
      },
      {
        title: 'Bridge Connection',
        content:
          'Contract bridge evolved from auction whist and then straight whist. Whist teaches follow-suit discipline, trump timing, and partnership signaling without bidding complexity. Many bridge teachers start with whist tricks before introducing auctions.',
      },
    ],
    winCondition: 'First side to win rubber (best of three games) or highest trick count per deal in simple whist.',
    tags: ['trick-taking', 'partnership', '4-player', 'classic'],
    playerMin: 4, playerMax: 4, deckType: 'standard52',
    sourceUrl: 'https://www.pagat.com/whist/whist.html', sourceName: 'Pagat.com',
    difficulty: 'intermediate', estimatedMinutes: 40,
  },
  {
    slug: 'euchre',
    name: 'Euchre',
    summary: 'Fast partnership trump game popular in the Midwest. Play to 10 points with bowers and loner hands.',
    setup:
      'Euchre uses a twenty-four-card deck containing nine through ace in each of the four suits. Four players form two partnerships seated alternately. Deal five cards to each player in batches of two then three (or three then two), and place the remaining four cards face down as the kitty with the top kitty card turned face up for trump consideration. Partnerships score on a tally to ten points using ones and threes discarded from a deck or a custom score board. Determine first dealer by cut; deal passes clockwise each hand. Midwest house rules vary on stick-the-dealer, farmer\'s hand redeals, and defending alone—confirm before the first bid.',
    rules: [
      {
        title: 'Trump Order and Bowers',
        content:
          'If hearts are trump, card strength from high to low is: jack of hearts (right bower), jack of diamonds (left bower), ace of hearts, king, queen, ten, nine. The left bower counts as a trump for all purposes even though it is the other jack color. Non-trump suits rank ace high down to nine with no bowers. Memorize bowers first—they win most tricks.',
      },
      {
        title: 'First Round of Bidding',
        content:
          'Starting left of dealer, each player may order up the turned suit as trump (accept the upcard) or pass. If any player orders up, dealer picks up the upcard, discards one face down, and trump is set. If all pass, a second round begins where players name a different suit as trump starting left of dealer; dealer may still pass. Stick-the-dealer rules force dealer to name trump in round two if everyone else passed.',
      },
      {
        title: 'Going Alone',
        content:
          'When ordering up or naming trump, a player may declare alone and play without partner for that hand. Partner discards face down and sits out while loner plays against both defenders. Loner scores four points for march (all five tricks) or two points for three or four tricks. Defenders still score two for euchre if they take three or more.',
      },
      {
        title: 'Leading and Playing Tricks',
        content:
          'Player left of dealer leads first unless a loner is playing—then loner leads. Must follow suit if possible; if void, play any card. Trump beats non-trump; highest trump or highest led suit card wins. Five tricks total decide the hand. Keep tricks neat for verification in close euchres.',
      },
      {
        title: 'Scoring Makers and Defenders',
        content:
          'Makers (side that named trump) score 1 point for three or four tricks and 2 points for march (all five). If defenders win three or more tricks, makers are euchred and defenders score 2 points. Lone hand scoring overrides as noted. Game typically ends at 10 points; some play win by two.',
      },
      {
        title: 'Reneging and Penalties',
        content:
          'Revoking (reneging) by failing to follow suit when able is a serious foul—defenders may award two points to opponents or treat as automatic euchre depending on local rules. Call renege only when sure; overturning tricks after the hand is messy. Honest games encourage showing cards when a revoke is suspected.',
      },
      {
        title: 'Common Regional Variants',
        content:
          'Farmer\'s hand (all nines and tens) sometimes forces a redeal. Two-player and three-player euchre use dummy hands or seven-card variants. Some tables play with joker as best bower in expanded decks—non-standard. Document bowers clearly if using jokers.',
      },
      {
        title: 'Basic Strategy',
        content:
          'Order up when you hold both bowers or strong trump with side ace. Lead trump to pull enemy trump when supporting a loner. Second seat should be aggressive; dealer can be passive with a weak hand unless stick-the-dealer applies. Discard the least useful off-suit card when picking up the upcard—often a lone nine.',
      },
    ],
    winCondition: 'First partnership to 10 points wins.',
    tags: ['trick-taking', 'partnership', '4-player', 'trump'],
    playerMin: 4, playerMax: 4, deckType: 'other',
    sourceUrl: 'https://www.pagat.com/euchre/euchre.html', sourceName: 'Pagat.com',
    difficulty: 'intermediate', estimatedMinutes: 30,
  },
  {
    slug: 'canasta',
    name: 'Canasta',
    summary: 'Rummy family meld game for partnerships. Build melds of seven cards (canastas) including wild-card rules.',
    setup:
      'Canasta uses two standard fifty-two-card decks shuffled together plus four jokers, totaling one hundred eight cards. Four players form partnerships seated opposite each other. Deal eleven cards to each player; place the remainder face down as the stock and turn one card face up to start the discard pile—if the turn-up is a red three, bury it and turn another; if wild or black three, follow special rules for freezing or reshuffling. Red threes are bonus cards placed face up immediately when drawn and replaced from stock. Keep paper score for meld values, canasta bonuses, and going-out conditions across multiple deals until one partnership reaches five thousand points (or a lower target for short games).',
    rules: [
      {
        title: 'Melds and Rank Requirements',
        content:
          'A meld is three or more cards of the same rank shown face up on the table. Jokers and twos are wild and may substitute for natural cards, but a meld must always contain more natural cards than wild cards unless it is a canasta meeting wild limits. You may add to your partnership\'s existing melds on your turn but never to opponents\'. Seven-card melds are canastas and score large bonuses.',
      },
      {
        title: 'Initial Meld Threshold',
        content:
          'The first meld a partnership lays down in a deal must meet a minimum point total based on current cumulative score: typically 50, 90, 120, or 150 points depending on how far behind or ahead you are. Count card values in melds (fours through sevens low, face cards higher, aces and wilds highest). Until the threshold is met, you may not put down any melds except red threes automatically.',
      },
      {
        title: 'Drawing from Stock or Discard',
        content:
          'Each turn begins by drawing two cards from the stock unless you take the discard pile. To take the discard pile, you must immediately use the upcard in a new meld or add to an existing meld of that rank—you cannot take it speculatively. The entire discard pile is taken, not just the top card. Black threes may only be melded when going out; they block the next player from taking the discard in some cases.',
      },
      {
        title: 'Frozen Discard Pile',
        content:
          'If the discard pile contains a wild card or black three, it is frozen: you may only take it if you hold a natural pair matching the current upcard and immediately meld that triple with the upcard. Frozen piles grow large and dangerous—top cards tempt opponents but risk giving a huge pile away. Track whether the pile is frozen before planning picks.',
      },
      {
        title: 'Canastas: Natural and Mixed',
        content:
          'A natural canasta has seven or more cards of one rank with no wild cards and earns a higher bonus. A mixed canasta includes up to three wild cards among seven cards. Additional cards may extend canastas beyond seven. You need at least one canasta to go out legally in standard rules. Canasta bonuses are scored at end of deal.',
      },
      {
        title: 'Red and Black Threes',
        content:
          'Red threes score bonus points for your side when drawn and are replaced; they never stay in hand. If an opponent goes out before you have melded red threes, they still score but may count against going-out requirements by house rule. Black threes stop the discard take and are worth minus points if left in hand. Do not discard red threes—they must be tabled immediately.',
      },
      {
        title: 'Going Out',
        content:
          'To end a deal, a player melds or discards their last card after their partnership has at least one canasta. You may go out concealed (single turn meld everything) for a bonus in some rules. Ask partner permission conventionally with "May I go out?" if partnership agreement requires—violating partner wishes is poor form though not always illegal. Final discard cannot be a wild card in strict rules.',
      },
      {
        title: 'Scoring a Deal',
        content:
          'Sum meld values still on table, add canasta and going-out bonuses, add red three totals, and subtract value of cards left in opponents\' hands (which score for your side). Cards in your hand count against you if opponent went out. Typical targets are 5000 points match play; 3000 speeds up casual games. Keep running totals across deals.',
      },
      {
        title: 'Penalties and Fouls',
        content:
          'Incorrect melds, insufficient initial meld, or illegal discard pile takes may be penalized by reversing the action and awarding points to opponents. Taking the discard without immediate meld is a common error—undo if caught before next player draws. Renouncing canasta requirement while going out invalidates the go-out.',
      },
      {
        title: 'Strategy Essentials',
        content:
          'Build toward canastas early while watching discard pile size. Hold back wild cards until canastas near completion. Signal partner through discards in advanced play though explicit signals are cheating. Freeze the pile with black threes when opponents appear ready to pick enormous discards.',
      },
    ],
    winCondition: 'Partnership with highest total score when a player goes out wins the deal. Match play to cumulative target.',
    tags: ['rummy', 'partnership', '4-player', 'melding'],
    playerMin: 4, playerMax: 4, deckType: 'double52',
    sourceUrl: 'https://www.pagat.com/rummy/canasta.html', sourceName: 'Pagat.com',
    difficulty: 'advanced', estimatedMinutes: 60,
  },
  {
    slug: 'casino',
    name: 'Casino',
    summary: 'Capture cards from a layout by matching rank or building sums to 10. Score for sweeps, aces, and big casino.',
    setup:
      'Casino uses a standard 52-card deck for two to four players; four-hand partnership Casino seats partners opposite with shared capture piles. Deal two cards at a time to each player and two face up to the table layout, repeating until everyone has four cards and four cards show on table—deal pattern varies slightly by player count. Remaining cards form the stock. Deal passes clockwise; hands play out in four-card batches until stock is exhausted. Scores accumulate across deals to an agreed target, traditionally twenty-one points. Use a capture pile per player (or partnership) face down to track taken cards for end-of-deal scoring.',
    rules: [
      {
        title: 'Basic Captures',
        content:
          'On your turn, play one card from hand. You may capture table cards of the same rank as the card played, or capture combinations of table cards whose ranks sum to the played card\'s value (jacks 11, queens 12, kings 13 in some building rules; face cards often have no build value in American Casino—agree locally). All captured cards go to your pile face down. If you capture nothing, your played card stays face up on the table.',
      },
      {
        title: 'Building',
        content:
          'Instead of capturing, you may build by combining a card from your hand with table cards to announce a new total you intend to capture later—for example, place a five on a four and announce "build nine." Only you may capture that build on a later turn unless another player steals it by playing the matching rank. Multiple builds may exist if ranks differ. Builds must be capturable with a card still in your hand when declared.',
      },
      {
        title: 'Trailing and Pairing',
        content:
          'If you cannot or choose not to capture or build, trail by leaving your card on table. Pairing captures matching rank only—no sum required. When table holds several cards, you may capture subsets that match rules but cannot leave orphaned illegal fragments in some variants. Sweeps occur when a capture clears the entire table.',
      },
      {
        title: 'Sweeps',
        content:
          'Clearing all table cards with a capture scores one sweep point immediately—announce it. Sweeps are valuable swing points. After a sweep, the next player trails to an empty layout unless a deal-ending rule auto-resets. Some rules award extra sweep bonuses for consecutive sweeps.',
      },
      {
        title: 'Last Card and Leftovers',
        content:
          'When the final card of the last hand is played, whoever made the last capture also takes any cards remaining on the table. Count captures carefully before scoring. Unclaimed table cards should not happen if rules are followed.',
      },
      {
        title: 'End-of-Deal Scoring',
        content:
          'Most cards captured: 3 points. Most spades: 1 point. Big Casino (ten of diamonds): 2 points. Little Casino (two of spades): 1 point. Each ace captured: 1 point each (four possible). Sweeps: 1 point each recorded during play. Ties for most cards or spades usually award no point to either side.',
      },
      {
        title: 'Two-Player and Three-Player Adjustments',
        content:
          'Two-player Casino often deals four cards each with four on table each round. Three-player may deal three cards with three on table or rotate a sit-out dealer. Partnership Casino combines capture piles between partners when scoring. Adjust deal size so stock exhausts cleanly.',
      },
      {
        title: 'Fishing Terminology',
        content:
          'Casino belongs to the fishing family alongside Scopa and Go Fish—table cards are the pond. Builds are declared aloud with rank totals. Stealing builds by matching the build rank is legal and often the sharpest move. Memory of what builds were declared prevents disputes.',
      },
      {
        title: 'Strategy Notes',
        content:
          'Track spades and point cards (aces, tens, twos). Avoid leaving easy pair captures for opponents when a safe trail exists. Sweeps are worth risking a build if you hold the capturing card. In partnership play, coordinate so partner can sweep after you bait table cards.',
      },
    ],
    winCondition: 'First to 21 points (or agreed target) across multiple deals wins.',
    tags: ['fishing', '2-4-players', 'capture'],
    playerMin: 2, playerMax: 4, deckType: 'standard52',
    sourceUrl: 'https://www.pagat.com/fishing/casino.html', sourceName: 'Pagat.com',
    difficulty: 'intermediate', estimatedMinutes: 30,
  },
  {
    slug: 'pitch',
    name: 'Pitch',
    summary: 'Trick-taking with point cards: high, low, jack, and game. Bid how many points you will capture.',
    setup:
      'Pitch uses a standard 52-card deck with four players in fixed partnerships, though Cutthroat Pitch plays each player for themselves. Remove lower cards in some variants—classic four-point pitch often deals six cards each from a stripped deck, while full-deck pitch deals nine or thirteen. Deal passes clockwise; turn one card for trump in simple pitch or conduct an auction in auction pitch. Score on paper to eleven or twenty-one points depending on regional rules. Partners sit across; agree whether smudge (five-point bid) and jack-off-jack variants are in effect before dealing.',
    rules: [
      {
        title: 'Point Categories',
        content:
          'Standard pitch awards four points per deal: High (highest trump in play), Low (lowest trump captured—point goes to team that took the trick containing it), Jack (jack of trump captured in tricks), and Game (most card points in tricks counting ten=10, ace=4, king=3, queen=2, jack=1). Ties in Game usually go to trick winner of last counted card or cancel depending on locale.',
      },
      {
        title: 'Bidding Auction',
        content:
          'Players bid how many of the four points they will capture, minimum bid two in many groups. Bids must beat previous bid numerically; passing drops you from auction. Highest bidder names trump suit and leads first. Failing to make your bid gives opponents the bid value in points—exact penalty rules vary (some subtract from bidder, others add to defenders).',
      },
      {
        title: 'Smudge and Shoot the Moon',
        content:
          'Smudge (or smudge bid) commits to win all four points and all tricks—worth five points in five-point pitch. Missing smudge costs five to opponents. Some tables allow open smudge only with ace of trump. Bold smudge bids swing games quickly.',
      },
      {
        title: 'Trick Play Rules',
        content:
          'Must follow suit if able; trump if void unless playing strict no-trump-off-suit rules. Trump beats non-trump; highest trump wins else highest led suit. Six-card pitch uses six tricks; thirteen-card deals use all cards. Track jack carefully—it often hides in second or third trick.',
      },
      {
        title: 'Low Point Ownership',
        content:
          'Low scores for the team that wins the trick containing the lowest trump, not the player who held it at deal. If low trump is never played because holder never forced, some rules award low to last trick winner or cancel low—clarify locally. Ace-in-hole variants change low tracking.',
      },
      {
        title: 'Scoring Progression',
        content:
          'Points accumulate toward game target (11 or 21). Only the bidding side can score positive bid points when successful; defenders score on failed bids. Honor bonuses for quads or dubs exist in backwoods variants. Write running totals legibly—come-from-behind wins are common.',
      },
      {
        title: 'Partnership Signals',
        content:
          'Legal pitch relies on inference from bids and leads, not secret codes. Leading trump pulls enemy trump for High. Dumping point cards on partner\'s sure winners saves Game totals. Avoid letting jack walk to defenders if bid included Jack point.',
      },
      {
        title: 'Regional Names',
        content:
          'Pitch overlaps with Setback, All Fours, and Don. Ten-point variants add explicit points for off-jack or jokers. Oklahoma ten-point pitch uses different bid increments. Name your variant on the score sheet to avoid mixing rules mid-game.',
      },
    ],
    winCondition: 'First to 11 or 21 points depending on variant.',
    tags: ['trick-taking', '4-player', 'bidding', 'points'],
    playerMin: 4, playerMax: 4, deckType: 'standard52',
    sourceUrl: 'https://www.pagat.com/allfours/pitch.html', sourceName: 'Pagat.com',
    difficulty: 'intermediate', estimatedMinutes: 35,
  },
  {
    slug: 'rook',
    name: 'Rook',
    summary: 'Trick-taking with special Rook deck (57 cards including rook bird). Partnership bidding game similar to bridge-lite.',
    setup:
      'Rook uses the proprietary fifty-seven-card deck: four suits in colors (not traditional suits) numbered 1 through 14 plus the Rook bird card, which counts as lowest trump and is worth twenty points when captured. Four players in partnerships sit crosswise. Deal thirteen cards to each player and place five cards face down in the nest (kitty) in the center—exact nest size can vary by edition; official Parker rules use five. Bidding begins left of dealer; score toward five hundred (or three hundred for shorter games) on paper. Shuffle including Rook; some groups forbid leading the Rook on the first trick.',
    rules: [
      {
        title: 'Card Values and Trump',
        content:
          'After trump color is named, trump beats plain suits. Point cards: 1s worth fifteen each, 14s worth ten, 10s worth ten, 5s worth five, Rook twenty, and winning the last trick worth twenty. Total points per deal are one hundred eighty including last trick. Non-point trump still win tricks but carry no intrinsic value.',
      },
      {
        title: 'Bidding',
        content:
          'Players bid the number of points they expect their side to capture, starting at seventy and increasing in increments of five (house rules vary). Highest bidder names trump color, takes the nest into hand, and buries five cards face down that will count for the bidder\'s side at end unless captured in tricks—buried cards are not shown until scoring. Partner does not see buried cards in strict rules.',
      },
      {
        title: 'Playing Tricks',
        content:
          'High bidder leads first. Must follow suit color if possible; if void, play any card including trump. Rook is trump but lowest; it cannot win a trick containing any other trump unless only Rook is played. Highest trump wins; otherwise highest card of led color wins. Thirteen tricks are played each deal.',
      },
      {
        title: 'The Rook Card',
        content:
          'The Rook bird is worth twenty points and is trump. Many groups require playing Rook below other trump when following trump suit. Leading Rook early is legal unless table rules forbid first-trick Rook leads. Capture Rook in tricks to score its points—do not confuse it with low trump.',
      },
      {
        title: 'Making and Setting Bid',
        content:
          'If bidding side captures at least their bid in points, they score all points taken (or bid value only in some variants). Falling short means zero for the deal and opponents may score what they captured—or the bid value transfers as penalty depending on rules. Exact set penalties should be agreed before play.',
      },
      {
        title: 'Nest Strategy',
        content:
          'Bidder uses nest cards to fill suit voids or bury worthless low cards while retaining point cards. Burying point cards is risky—they still score for your side if buried legally. Aggressive bids need strong trump length and point density in nest.',
      },
      {
        title: 'Partnership Communication',
        content:
          'Partners infer strength from bids and early leads. Lead low point cards to partner\'s known voids. Protect 1s and 14s—they swing deals. Track which color is trump and how many trump remain outstanding after each trick.',
      },
      {
        title: 'Kentucky Rook and Variants',
        content:
          'Kentucky Rook, Original Rook, and tournament rules differ on minimum bid, Rook lead restrictions, and sluff rules. Tournament Rook often uses 500 points and standardized bid increments. Write active variant on score pad.',
      },
    ],
    winCondition: 'First partnership to 300 (or 500) points wins.',
    tags: ['trick-taking', 'partnership', '4-player', 'commercial'],
    playerMin: 4, playerMax: 4, deckType: 'rook32',
    sourceUrl: 'https://www.pagat.com/auctionwhist/rok.html', sourceName: 'Pagat.com',
    difficulty: 'intermediate', estimatedMinutes: 45,
  },
  {
    slug: 'scopa',
    name: 'Scopa',
    summary: 'Italian fishing game where players capture table cards matching rank or summing to played card value.',
    setup:
      'Scopa traditionally uses a forty-card Italian deck (suits: coins, cups, swords, batons) with ranks ace through seven plus face cards worth eight, nine, and ten—or strip eights, nines, and tens from a standard deck and map suits. Two to four players; four often play as two partnerships seated alternately with shared capture piles. Deal three cards to each player and four face up to the table; if three or four table cards match rank, redeal. Remaining cards form stock. After each three-card hand is exhausted, deal three more until stock empty. Score cumulative points across deals to eleven or twenty-one on a sheet—primiera and settebello matter as much as scoops.',
    rules: [
      {
        title: 'Capturing Basics',
        content:
          'Play one card from hand. Capture all table cards of the same rank, or one or more table cards whose values sum exactly to your card (ace = 1, figures = 8–10 in Italian decks). Captured cards go face down to your pile with partner in team play. If you capture nothing, leave your card face up on table. Multiple capture sets may exist when sums allow—choose one valid capture only.',
      },
      {
        title: 'Scopa (Sweep)',
        content:
          'If your capture removes every card from the table, you score one scopa point—announce "scopa!" and mark it. Next player trails to empty table. Scopa marks are tallied separately at end of deal. Sweeps swing close deals because they also deny opponents table combinations.',
      },
      {
        title: 'Last Player Capture',
        content:
          'After the final card of the deal is played, table cards remaining belong to the player who made the last capture—not a scopa unless table was cleared. Do not forget leftover cards when totaling most-cards category.',
      },
      {
        title: 'Deal Scoring Categories',
        content:
          'At end of deal, award one point each for: most cards captured (tie = no point), most coins/diamonds captured, settebello (seven of coins/diamonds) captured, best primiera (best card per suit combined by formula), and most sevens. Plus one point per scopa during play. Primiera compares highest card in each suit with fixed values—learn local primiera math before playing for money.',
      },
      {
        title: 'Primiera Calculation',
        content:
          'Each suit contributes your best card toward primiera: typically seven=21, six=18, ace=16, five=15, four=14, three=13, two=12, face=10—or regional tables differ. Sum four suit contributions; highest total wins primiera point. Ties cancel. Primiera can decide tight deals when scoops are equal.',
      },
      {
        title: 'Escoba vs Scopa',
        content:
          'Escoba is a related game where captures must sum to fifteen instead of matching rank—same deck and sweep concept. Do not mix escoba sum rules with scopa rank rules in one session. Scopa allows either rank match or sum equal to played card value.',
      },
      {
        title: 'Partnership Scopa',
        content:
          'Partners combine capture piles when counting most cards and coins. Either partner may scopa for team credit. Communication is inference only. Lead low coins to help partner capture settebello if safe.',
      },
      {
        title: 'Redeal Conditions',
        content:
          'If initial four table cards are all same rank, or include two pairs in some rules, redeal without scoring. Rare but prevents dead deals. Misfires on redeals are house judgment calls.',
      },
      {
        title: 'Strategy Sketch',
        content:
          'Deny scoops by leaving at least one card when you cannot capture entire table. Hoard sevens and coins for category points. Force opponents to trail into your rank setups. Track how many cards remain in stock to plan final three-card hand.',
      },
    ],
    winCondition: 'First to 11 or 21 points across deals wins.',
    tags: ['fishing', '2-4-players', 'italian'],
    playerMin: 2, playerMax: 4, deckType: 'standard52',
    sourceUrl: 'https://www.pagat.com/fishing/scopa.html', sourceName: 'Pagat.com',
    difficulty: 'intermediate', estimatedMinutes: 30,
  },
  {
    slug: 'cheat',
    name: 'Cheat (I Doubt It)',
    summary: 'Bluffing shedding game. Play cards face down announcing rank; opponents may call cheat.',
    setup:
      'Cheat uses a standard 52-card deck for three to six players seated in a circle. Shuffle and deal all cards as evenly as possible—some players may have one extra card, which is acceptable. Play proceeds clockwise with a required rank sequence: commonly aces, then twos, up through kings, then restarting at ace. The discard pile is central; players add face-down stacks announcing the current required rank regardless of what they actually play. Agree whether multiple ranks progress each round or one rank per turn, and whether jokers are included as wild bluffs. First player may be left of dealer or holder of a chosen card.',
    rules: [
      {
        title: 'Playing Cards Face Down',
        content:
          'On your turn, play one to four cards face down onto the pile while verbally announcing the required rank—for example, "two kings" when kings are due. You may lie about what you play; truth is optional. After your play, turn passes clockwise and the required rank advances by one for the next player unless house rules keep same rank until someone is challenged.',
      },
      {
        title: 'Rank Sequence',
        content:
          'Standard sequence runs ace through king cyclically. Some groups require exact verbal clarity ("three fours"). Skipping ranks or playing out of order is illegal unless bluff rules say otherwise. Track the current rank aloud to reduce confusion in noisy rooms.',
      },
      {
        title: 'Calling Cheat (I Doubt It)',
        content:
          'Any player may call "Cheat!" (or "I doubt it") instead of waiting for their turn, targeting the most recent play. The challenged stack is revealed. If every card is the announced rank (including wild jokers if allowed), the caller takes the entire pile into hand. If any card differs, the liar takes the pile.',
      },
      {
        title: 'Pile Size and Punishment',
        content:
          'The central pile grows until a challenge resolves it—large piles make failed bluffs painful and successful calls risky. Taking the pile can add dozens of cards instantly. This punishment keeps bluffs bold but not constant.',
      },
      {
        title: 'Winning the Game',
        content:
          'First player to empty hand by legally playing all cards wins. You may play your last cards on your turn even if lying—if no one challenges before the next player acts, you win. Some rules require announcing "Cheat out" when playing final cards.',
      },
      {
        title: 'Bluffing Ethics and Table Talk',
        content:
          'Misdirection is part of the game; colluding to trap one player is poor sport outside friendly tables. Revealing cards after a false challenge shows information—caller bears risk. Keep discards orderly so challenges inspect only the latest play.',
      },
      {
        title: 'Variants',
        content:
          'Some deal until one player empty; others play until only one loser remains with cards. Bulgarian variant passes rank differently. Two-player cheat is possible but less chaotic. Limit cards per turn to four maximum in most rules to cap pile growth rate.',
      },
      {
        title: 'Strategy Notes',
        content:
          'Mix honest plays to build credibility before big lies. Call cheat when pile is huge and probability favors a lie—but callers lose badly on wrong calls. Track ranks you hold to know when lies are mandatory.',
      },
    ],
    winCondition: 'First player to play all cards wins.',
    tags: ['bluffing', 'party', '3-6-players', 'shedding'],
    playerMin: 3, playerMax: 6, deckType: 'standard52',
    sourceUrl: 'https://www.pagat.com/beating/cheat.html', sourceName: 'Pagat.com',
    difficulty: 'beginner', estimatedMinutes: 15,
  },
  {
    slug: 'gops',
    name: 'GOPS (Goofspiel)',
    summary: 'Two-player pure strategy bidding game. Prize cards are revealed; players secretly bid one card each to win prizes.',
    setup:
      'GOPS (Goofspiel) uses a standard 52-card deck split by suit: thirteen spades shuffled face down form the prize pile, thirteen hearts go to one player, thirteen diamonds to the other—clubs are unused unless playing three-player variants. Sit across from your opponent with room for a central prize stack. Reveal the top prize card before each round; both players simultaneously play one card from hand face down, then reveal. Higher bid wins the prize unless tied. Play thirteen rounds until hands and prize pile empty. Keep captured prizes face up sorted for scoring.',
    rules: [
      {
        title: 'Simultaneous Bidding',
        content:
          'After seeing the current prize card, each player selects one card from hand and places it face down. On a count of three, both reveal. Higher rank wins the prize; aces low or high depending on agreed rank order—standard GOPS uses ace low (ace=1) through king=13. Won prize cards sit in your scoring area.',
      },
      {
        title: 'Ties',
        content:
          'If bids tie, the prize card is usually discarded with no one scoring it—some variants award it to next round winner or split points. Ties waste high bids and are central to strategy. Announce tie rule before starting.',
      },
      {
        title: 'Prize Values',
        content:
          'Each prize card scores its rank: ace=1 point through king=13. Total available points sum to 91 across thirteen prizes. Efficient bidding tries to capture high prizes without overspending high cards on low prizes.',
      },
      {
        title: 'Perfect Information Limits',
        content:
          'You always see the current prize and all cards already played by both sides. Hidden information is only remaining cards in hands—deduce opponent holdings from their past bids. Late-game decisions become calculable with careful tracking.',
      },
      {
        title: 'Strategic Principles',
        content:
          'Match bid roughly to prize value: playing a seven for a seven-point prize is neutral; overbidding wastes strength. Save kings and queens for double-digit prizes unless opponent forces escalation. When ahead, force opponent to overspend; when behind, contest high prizes aggressively.',
      },
      {
        title: 'Misère and Variant Scoring',
        content:
          'Some play aces high. Three-player GOPS uses hearts, diamonds, clubs with shared spade prizes—highest of three bids wins. Point totals differ. Suit-based bonuses are non-standard but appear in house rules.',
      },
      {
        title: 'Psychological Layer',
        content:
          'Repeated play reveals tendencies—some opponents always match exactly, others bluff low early. Randomize just enough to stay unpredictable. GOPS has no luck after the prize shuffle; skill dominates over many hands.',
      },
      {
        title: 'Match Play',
        content:
          'Single thirteen-round game decides winner. Long matches play best-of-three games or cumulative point totals across repeated shuffles. Sudden-death tiebreakers use one prize card if aggregate ties.',
      },
    ],
    winCondition: 'Higher total from won prizes after all 13 rounds wins.',
    tags: ['2-player', 'bidding', 'strategy'],
    playerMin: 2, playerMax: 2, deckType: 'standard52',
    sourceUrl: 'https://www.pagat.com/auctionwhist/goofspiel.html', sourceName: 'Pagat.com',
    difficulty: 'intermediate', estimatedMinutes: 15,
  },
  {
    slug: 'palace',
    name: 'Palace',
    summary: 'Shedding game with three hidden, three face-up, and hand cards. Play matching or higher until someone empties all zones.',
    setup:
      'Palace uses a standard deck for two to five players. Deal three cards face down in a row (the palace), three face up covering them, and three to hand; remaining cards form a draw pile with one card turned to start the discard pile. Players may not look at face-down palace cards until playing them. After dealing, inspect hand and face-up palace; before play begins, swap any number of hand cards with face-up palace cards to improve visible starters—face-down cards stay hidden. Play clockwise; multiple discard piles are not used unless variant says so.',
    rules: [
      {
        title: 'Legal Plays',
        content:
          'On your turn, play one or more cards of the same rank onto the discard pile if the rank equals or exceeds the top card (ace high or low by house rule—clarify before play). You may play multiples only when ranks match each other, not when combining different ranks unless doubles rules allow sequential singles. If you cannot or choose not to play, pick up the entire discard pile into hand.',
      },
      {
        title: 'Clearing the Pile',
        content:
          'Playing four of the same rank in one turn (or four spread across consecutive turns without interruption in some rules) clears the discard pile—it is removed and the next player may lead any rank. Twos often reset the pile instantly in house rules. Tens may burn the pile in many American Palace variants.',
      },
      {
        title: 'Special Cards (House Rules)',
        content:
          'Common additions: 2 resets pile; 10 burns pile; 7 skips next player; jack reverses direction; queen requires lower rank next. Document special cards on table—Palace varies widely. When specials conflict, table precedence wins.',
      },
      {
        title: 'Drawing',
        content:
          'If you play fewer than three cards and hand still empty, draw until hand has three cards or stock empty—only when stock exists. Once stock gone, play proceeds with what you hold. Picking up pile can swell hand dramatically.',
      },
      {
        title: 'Emptying Hand to Palace',
        content:
          'When hand is empty during main phase, play from face-up palace cards on your next turns. When face-up row is empty, play face-down palace cards blindly—you must play whatever you flip. Blind plays often pick up pile if illegal.',
      },
      {
        title: 'Winning and Losing',
        content:
          'First player to empty hand, face-up, and face-down zones wins. Play may continue to rank losers as vice president and scum in hybrid rules. Last player holding cards loses social round even if others already finished.',
      },
      {
        title: 'Multiple Card Plays',
        content:
          'Playing doubles or triples speeds shedding but risks feeding opponents clear piles if you cannot finish a four-of-kind clear. Save low doubles for awkward pile tops. Watch discard top constantly.',
      },
      {
        title: 'Two-Player Palace',
        content:
          'Head-to-head moves faster; special cards matter more. Consider smaller palace (two stacks) for quicker games. Same rank-or-higher rule prevents stalemates when stock depletes.',
      },
    ],
    winCondition: 'First to empty all three zones wins. Last player with cards is loser (or scum).',
    tags: ['shedding', 'party', '2-5-players'],
    playerMin: 2, playerMax: 5, deckType: 'standard52',
    sourceUrl: 'https://www.pagat.com/climbing/palace.html', sourceName: 'Pagat.com',
    difficulty: 'beginner', estimatedMinutes: 20,
  },
  {
    slug: 'karma',
    name: 'Karma',
    summary: 'Commercial shedding game similar to Palace with action cards and karma deck mechanics.',
    setup:
      'Karma uses the published Karma deck or a standard deck mapped to Karma actions. Two to six players receive a layout like Palace: bottom row of hidden karma cards, middle row face up, hand cards dealt above, plus draw pile and discard pile. Shuffle the commercial deck thoroughly—printed action icons replace rank-only rules. Read card texts before first deal because Karma-specific cards (Karma cards, action reverses, forced draws) differ from standard Palace. Choose whether elimination or first-out wins; commercial rules usually race to empty all zones.',
    rules: [
      {
        title: 'Basic Shedding Flow',
        content:
          'Play proceeds like Palace: match or beat discard top with one or more cards of same rank, or pick up pile if unable. Karma adds printed minimums and maximums on some cards. Turn passes clockwise unless reversed by action.',
      },
      {
        title: 'Action Cards',
        content:
          'Skip, reverse, draw-two, and clear-pile actions appear on designated ranks in the commercial set—follow printed text exactly. When an action resolves, next player satisfies any draw or skip before playing. Do not invent actions not on cards when using retail deck.',
      },
      {
        title: 'Karma Cards (Hidden Row)',
        content:
          'Bottom-row karma cards activate face down when reached—flip and immediately obey text, which may help (extra plays) or hinder (forced pickup). Treat karma row as mystery modifiers distinct from face-up row above.',
      },
      {
        title: 'Swapping Before Play',
        content:
          'After initial deal, swap hand cards with face-up row to optimize starters—same as Palace. Hidden karma and palace cards cannot be inspected early. Plan face-up swaps knowing karma hidden effects remain unknown.',
      },
      {
        title: 'Clearing Discards',
        content:
          'Four-of-a-kind clears pile in standard Karma; some action cards also wipe pile instantly. After clear, leader chooses any rank. Track whether your edition uses four-card clears or action-only clears.',
      },
      {
        title: 'Drawing and Hand Refill',
        content:
          'Draw up to hand limit when stock exists after playing—commercial rules specify three cards. Empty stock transitions to palace rows. Picking pile during action chains can trap you with huge hands.',
      },
      {
        title: 'Using Standard Deck Substitute',
        content:
          'Map ranks to actions on a cheat sheet if playing without retail deck: e.g., 8 skip, jack reverse, 2 reset—must match group agreement. Karma branding assumes printed icons; substitutes drift from designer intent but work socially.',
      },
      {
        title: 'Winning',
        content:
          'First to shed hand, face-up row, and karma row wins round. Play multiple rounds or tally social ranks. Commercial box may include advanced variants with penalty karma cards—read insert.',
      },
    ],
    winCondition: 'First player to empty all card zones wins.',
    tags: ['shedding', 'party', 'commercial'],
    playerMin: 2, playerMax: 6, deckType: 'standard52',
    sourceUrl: 'https://www.pagat.com/climbing/palace.html', sourceName: 'Pagat.com',
    difficulty: 'beginner', estimatedMinutes: 20,
  },
  {
    slug: 'mao',
    name: 'Mao',
    summary: 'Secret-rules shedding game. Only experienced players know the full rules; newcomers learn by penalties.',
    setup:
      'Mao uses a standard 52-card deck (jokers optional) for three or more players—the more players, the merrier the chaos. One player acts as dealer and knows the full house rule set; they deal evenly without explaining rules to newcomers beyond "the rules are what I enforce." New players learn by receiving penalty cards for violations. Dealer may add rules between hands by announcing "new rule" without detailing it— veterans infer from penalties. Agree penalty size (usually one card per infraction) and whether saying the game name aloud is forbidden. Play begins left of dealer matching rank or suit on discard pile unless rules specify otherwise.',
    rules: [
      {
        title: 'Core Matching Rule',
        content:
          'Basic Mao resembles Crazy Eights: play one card matching rank or suit of discard top unless a special card rule overrides. If unable, draw one penalty card (or more by house rule) and end turn. Some tables require announcing playable cards aloud.',
      },
      {
        title: 'Penalty Culture',
        content:
          'Dealer administers penalties for any broken rule without explaining which rule—only saying "penalty" or "bad card." Accumulating penalties is part of onboarding. Thank the dealer when receiving penalty cards if that meta-rule is active.',
      },
      {
        title: 'Common Hidden Rules',
        content:
          'Frequent additions: cannot say "Mao" except when winning; touch nose when playing sixes; silence during spades leads; point with chin for clubs; apologize when giving penalties; no questions about rules; king reverses; ace skips; seven draws. Every table differs—document your house set separately.',
      },
      {
        title: 'Speaking Restrictions',
        content:
          'Many groups forbid saying the game\'s name, asking what you can play, or discussing rules mid-hand. Talking out of turn draws cards. Naming a card you are about to play may be required or forbidden depending on dealer whimsy—consistency matters once a rule is established.',
      },
      {
        title: 'Special Card Triggers',
        content:
          'Dealer assigns meanings to ranks: eights might require next player match suit; jacks reverse; queens question next player. Special effects stack painfully if forgotten. Experienced players help subtly only if house allows.',
      },
      {
        title: 'Winning Declaration',
        content:
          'First to empty hand must say "Mao" (or "the game is over" or last-card phrase defined locally) on final play or draw penalty and possibly reinsert one card. Premature Mao calls are penalized. Dealer decides edge cases.',
      },
      {
        title: 'Adding Rules Between Hands',
        content:
          'After someone wins a hand, dealer shuffles, deals, and may silently introduce one new rule— veterans deduce from penalties applied next hand. New players should expect frustration early; Mao is social hazing dressed as cards.',
      },
      {
        title: 'Dealer Responsibilities',
        content:
          'Dealer must enforce consistently and not invent retroactive penalties. Good dealers escalate complexity slowly. When dealer loses, pass dealer to next veteran who knows full rule set or codify rules on paper for fairness.',
      },
      {
        title: 'Documenting Your House Mao',
        content:
          'Because Mao is intentionally opaque, groups serious about replay should write rules after session. This seed covers archetype only—use custom notes field in app for your table\'s list.',
      },
    ],
    winCondition: 'First to empty hand wins. House rules vary wildly — document your table\'s rules in custom notes.',
    tags: ['party', 'secret-rules', 'shedding'],
    playerMin: 3, playerMax: 8, deckType: 'standard52',
    sourceUrl: 'https://www.pagat.com/eights/mao.html', sourceName: 'Pagat.com',
    difficulty: 'intermediate', estimatedMinutes: 30,
  },
  {
    slug: 'scum',
    name: 'Scum (President)',
    summary: 'Climbing/shedding game with social ranks: president, vice, scum. Higher roles get better cards next round.',
    setup:
      'Scum (also called President, Asshole, or Capitalism) uses a standard 52-card deck for four to seven players seated in circle. Deal all cards evenly; extra cards go to better ranks next round in some variants but standard play ignores extras. Social hierarchy from prior hand determines seating swaps: president chooses best chair, scum shuffles and deals but passes two best cards to president while receiving two worst back before next deal. Track roles with name tags or seating chart. First hand has no hierarchy—deal fairly. Play clockwise with climbing combinations on discard pile until someone empties hand.',
    rules: [
      {
        title: 'Combination Types',
        content:
          'Play singles, pairs, triples, or longer sets of equal rank. Each play must beat previous combination of same type (pair beats pair, not triple). Higher rank wins within type; aces high unless agreed low. Pass if unwilling or unable; when all pass, last player to play clears pile and leads fresh combination of any type.',
      },
      {
        title: 'Clearing the Pile',
        content:
          'When everyone passes, trick ends—winner of trick leads next. Cleared piles do not score points; they only grant lead privilege. Strategic passes dump garbage on scum while president sheds high cards.',
      },
      {
        title: 'Finishing Order and Titles',
        content:
          'First out becomes president next hand, second vice president, third neutral titles in larger groups, second-to-last vice scum, last scum. Middle ranks vary names by player count. Announce titles dramatically—social payoff is the point.',
      },
      {
        title: 'Card Exchange',
        content:
          'Before dealing next hand, scum passes two highest cards to president who returns two unwanted cards; vice scum and vice president exchange one each in seven-player rules. Exchanges happen after shuffle, before deal completes—president gains power cards.',
      },
      {
        title: 'Revolution',
        content:
          'Four-of-a-kind (or bomb defined locally) may trigger revolution, reversing rank order for next hand only—scum becomes president. Some require immediate play during hand to declare revolution; others use completed bombs only. Revolutions swing morale.',
      },
      {
        title: 'Opening Lead Rules',
        content:
          'Scum leads first next hand after exchange (or president in variants)—clarify locally. First hand often starts left of dealer with three of clubs or lowest card mandatory lead. Restrict opening high pairs to keep scum from stalling.',
      },
      {
        title: 'Passing Etiquette',
        content:
          'Passing is silent or verbal "pass." Cannot re-enter until trick clears. Intentional feeding between partners is cheating in partnership variants; standard scum is free-for-all.',
      },
      {
        title: 'Large Group Adjustments',
        content:
          'Seven players lengthen hands; consider stripping twos or using double deck for chaos. Fewer than four players weakens exchange—use single exchange or skip hierarchy.',
      },
      {
        title: 'Winning the Session',
        content:
          'No single score wins—players play until bored or president retains title N times. Optional point track awards presidency counts. Social victory matters more than numeric score.',
      },
    ],
    winCondition: 'Social victory as president; game continues for multiple hands for ranking fun.',
    tags: ['climbing', 'party', '4-7-players', 'shedding'],
    playerMin: 4, playerMax: 7, deckType: 'standard52',
    sourceUrl: 'https://www.pagat.com/climbing/president.html', sourceName: 'Pagat.com',
    difficulty: 'beginner', estimatedMinutes: 25,
  },
  {
    slug: 'nertz',
    name: 'Nertz',
    summary: 'Competitive solitaire race. Players simultaneously build shared aces while draining a personal nertz pile.',
    setup:
      'Nertz requires one standard 52-card deck per player (two to four players typical). Each player shuffles their deck and deals a thirteen-card nertz pile face up with only the top card visible—this pile must be emptied to win the round. Remaining thirty-nine cards form a personal stock with four tableau piles (solitaire-style) dealt beside the nertz pile: usually four face-up tableau cards with building rules alternating colors descending. All players share a central area where aces start foundation piles ascending by suit—any player may play any ace when available. There is no turn order; play is simultaneous and fast. Agree whether stock flips one or three cards before starting.',
    rules: [
      {
        title: 'Simultaneous Speed Play',
        content:
          'All players act at once without waiting—there are no formal turns. Play cards to foundations when legal, move tableau cards, flip stock, and peel nertz pile as fast as rules allow. Physical collisions are resolved by who touches card first or replay round if unclear—be sportsmanlike.',
      },
      {
        title: 'Shared Foundations',
        content:
          'Foundations start with aces and build up by suit to king. Any player may place on any foundation regardless of who started it. First-come placement rewards alertness. Foundations are public race objectives.',
      },
      {
        title: 'Personal Tableau',
        content:
          'Build tableau piles alternating red/black descending (standard Klondike-like). Only top tableau cards are movable. Empty tableau slots may accept kings only in strict rules. Tableau feeds foundations and nertz pile access.',
      },
      {
        title: 'Nertz Pile',
        content:
          'Top nertz card is playable to foundations or tableau if legal. Clearing nertz cards below reveals next card. Round continues until someone empties nertz pile entirely and calls "Nertz!"—others may finish current play briefly then stop.',
      },
      {
        title: 'Stock Management',
        content:
          'Flip waste from stock one-at-a-time or three-at-a-time by agreement. Waste top is playable. Recycle stock when empty if rules allow once per round. Stock speed versus accuracy tradeoff defines skill.',
      },
      {
        title: 'Round Scoring',
        content:
          'Count cards each player placed on foundations minus remaining cards in nertz pile (often −2 per card). Some subtract entire nertz count including buried cards. Highest net score wins round. Play to 100 cumulative typical.',
      },
      {
        title: 'Fouls and Disputes',
        content:
          'Illegal placement returns card with penalty in strict groups. Touching opponent nertz is forbidden. Calling Nertz falsely ends round with penalty. Pause between rounds to shuffle all decks separately.',
      },
      {
        title: 'Two-Player Nertz',
        content:
          'Head-to-head intensifies foundation races—watch opponent waste pile for clues. Four-player chaos favors calm tableau maintenance over wild foundation grabs.',
      },
      {
        title: 'Pounce Relation',
        content:
          'Nertz resembles Pounce and Dutch Blitz—same family of simultaneous solitaire racers. Rule differences are stock flip and scoring—label variant when teaching newcomers.',
      },
    ],
    winCondition: 'First to agreed point total (often 100) across rounds wins.',
    tags: ['speed', 'solitaire', '2-4-players', 'competitive'],
    playerMin: 2, playerMax: 4, deckType: 'standard52',
    sourceUrl: 'https://www.pagat.com/patience/nerts.html', sourceName: 'Pagat.com',
    difficulty: 'intermediate', estimatedMinutes: 20,
  },
  {
    slug: 'ants',
    name: 'Ants',
    summary: 'Light shedding game where players build ascending ant trails by rank. Fast filler game for kids and parties.',
    setup:
      'Ants uses a standard 52-card deck for two to four players seated around a table. Deal seven cards to each player; place one card face up in the center to seed the first ant trail. Remaining cards form a draw pile face down. The goal is shedding all cards by extending trails upward in rank. Ace is low unless house rules make it wrap above king. When a trail reaches king, it is removed from play as a completed colony. Keep discards separate from active trails for clarity. Young players enjoy the insect theme—trails are "ant lines" marching upward.',
    rules: [
      {
        title: 'Playing on Trails',
        content:
          'On your turn, play one or more cards extending any active trail by exactly the next higher rank—if trail shows five, play six on it. Multiple trails may exist if starters were created. You must play if able; if multiple options exist, choose freely.',
      },
      {
        title: 'Starting New Trails',
        content:
          'If you hold a duplicate rank or cannot extend existing trails, some rules allow starting a new trail with a card of any rank not currently leading a trail—check house agreement. Other rules force drawing instead. Starting trails increases options but slows concentration.',
      },
      {
        title: 'Drawing When Stuck',
        content:
          'If you cannot play any card, draw one from stock. If drawn card plays immediately, you may play it; otherwise turn ends. When stock empties, players pass if unable to play—some groups end round when stock gone and someone still holds cards.',
      },
      {
        title: 'Completing Colonies',
        content:
          'When a trail reaches king, remove that trail from table as finished ant colony—those cards are out of play. Completing colonies opens table space and reduces ranks in play. Celebrate removals to keep kids engaged.',
      },
      {
        title: 'Winning a Round',
        content:
          'First player to empty hand wins round. Others may score penalty points equal to remaining cards for a longer match. Ties are rare but possible if simultaneous empty—share win or deal tiebreaker.',
      },
      {
        title: 'Multi-Round Scoring',
        content:
          'Play several rounds; lowest cumulative penalty wins session. Or simply count round wins. Short rounds make Ants a filler before heavier games.',
      },
      {
        title: 'Two-Player Ants',
        content:
          'With two players, seven cards each and longer stock create strategic blocking—hold cards opponents need. Three and four player games loosen blocking because trails multiply.',
      },
      {
        title: 'Variants',
        content:
          'Some play descending trails, or require same suit on trails for harder mode. Ants is informal—adapt rank progression for teaching children before Uno or Fan Tan.',
      },
    ],
    winCondition: 'First player to empty hand wins. Play multiple rounds for cumulative wins.',
    tags: ['shedding', 'family', '2-4-players', 'kids'],
    playerMin: 2, playerMax: 4, deckType: 'standard52',
    sourceUrl: 'https://www.pagat.com/layout/ants.html', sourceName: 'Pagat.com',
    difficulty: 'beginner', estimatedMinutes: 10,
  },
];
