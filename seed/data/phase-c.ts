import type { GameSeed } from '@/types/game';

export const phaseCGames: GameSeed[] = [
  {
    slug: 'skat',
    name: 'Skat',
    summary: 'Germany\'s national card game. Three-player trick-taking with bidding, solo or partnership against declarer.',
    setup:
      'Use a 32-card Skat deck containing 7 through ace in each of the four French suits. Three players sit at the table; the dealer changes each hand and sits out of play but still participates fully in bidding. Cards are dealt clockwise: ten cards to each active player and two face-down cards to the skat (middle). Players cut for deal; the cutter should not take the bottom card. Skat is traditionally played counter-clockwise in Germany, though clockwise dealing is acceptable if agreed before the match.',
    rules: [
      {
        title: 'Card Values and Ranking',
        content:
          'Each suit ranks 7 (low) through ace (high) in plain-suit games. In trump, jacks form a permanent top tier in fixed order: club jack highest, then spade, heart, and diamond jack, followed by the remaining trump cards ace down to 7. Card points used for scoring come from captured tricks: ace 11, ten 10, king 4, queen 3, jack 2, nine through seven zero each. A side needs 61 of 120 card points to win the hand.',
      },
      {
        title: 'The Deal',
        content:
          'Deal three rounds of three cards, then one card, then three, then one, so each active player holds ten cards and two remain in the skat. The dealer may not look at the skat until after bidding concludes. If a misdeal occurs (wrong count or exposed card), the hand is redealt with the same dealer unless house rules assign a penalty.',
      },
      {
        title: 'Bidding Overview',
        content:
          'Players bid the game value they are willing to play for, not merely a trump suit. Bids must exceed the previous bid in multiples of the underlying game value. Passing is final for that auction. The highest bidder becomes declarer and plays alone against the other two players, who form a temporary defensive partnership for the hand.',
      },
      {
        title: 'Game Types',
        content:
          'Declarer chooses among suit games (one suit trump), grand (only the four jacks trump), and null (no trump, declarer must lose every trick). Suit and grand games require declarer to take 61+ card points; null games invert the goal and use different scoring ladders. Hand games (Handspiel) skip the skat pick-up and increase value; open null exposes declarer\'s hand after the first trick.',
      },
      {
        title: 'The Skat',
        content:
          'After winning the auction, declarer picks up the two skat cards and privately buries any two cards from the combined twelve. Buried cards join declarer\'s trick pile at scoring unless playing a null. In suit and grand games the skat counts toward declarer\'s card points if captured in tricks; defenders never see buried cards until the hand ends.',
      },
      {
        title: 'Matadors and Multipliers',
        content:
          'Matadors count consecutive top trumps held in declarer\'s combined hand plus skat at start. With the club jack and all lower trumps in sequence, declarer is with matadors; each missing top trump from that chain counts as against matadors. Game value multiplies by matador difference and further by schneider or schwarz thresholds when applicable.',
      },
      {
        title: 'Play of Tricks',
        content:
          'Defender to dealer\'s left leads first. Players must follow suit if able; if void, they may trump or discard. In trump games the trick goes to the highest trump, or else the highest card of the led suit. In null, players must head the trick when possible and trump only when forced, with strict overtrump rules on later null variants.',
      },
      {
        title: 'Schneider and Schwarz',
        content:
          'If the losing side holds fewer than 31 card points (or took no trick in schwarz), the game value increases. Declarer can announce schneider or schwarz before the last trick when confident, doubling risk and reward. Defenders may claim schneider or schwarz against declarer under the same thresholds.',
      },
      {
        title: 'Scoring a Hand',
        content:
          'Base game value depends on type, trump rank, and whether hand or skat was used. Multiply by matadors, schneider, schwarz, and any announced bonuses. If declarer succeeds, each defender pays declarer the final value; if declarer fails, declarer pays each defender. Ramsch variants for passed hands are optional and not part of tournament Skat.',
      },
      {
        title: 'Match Play',
        content:
          'Skat matches are usually played to 1000 points recorded on a slate or score sheet. A Bock round doubles all values on the next hand after certain events (lost null, schwarz, etc.) depending on club custom. Players settle the difference after the agreed target; rubber-style continuation until a clear margin is common in casual play.',
      },
    ],
    winCondition: 'First to 1000 points across deals wins match. Declarer wins or loses game value each hand.',
    tags: ['trick-taking', '3-player', 'bidding', 'german'],
    playerMin: 3, playerMax: 3, deckType: 'skat32',
    sourceUrl: 'https://www.pagat.com/skat/skat.html', sourceName: 'Pagat.com',
    difficulty: 'advanced', estimatedMinutes: 60,
  },
  {
    slug: 'sheepshead',
    name: 'Sheepshead',
    summary: 'German-American trick-taking with permanent trump (queens, jacks, diamonds). Picker plays against defenders.',
    setup:
      'Use a 32-card deck of sevens through aces in four suits. Five players is the classic count; four- and three-player variants exist but five is standard for full partnership intrigue. The dealer shuffles and deals six cards to each player clockwise, then places two cards face down as the blind. Deal passes left each hand. Players need tokens or a score sheet for schneider and schwarz bonuses across multiple hands.',
    rules: [
      {
        title: 'Permanent Trump Order',
        content:
          'Trump is fixed every hand, not chosen by bid. All four queens rank highest, then all four jacks, then every diamond from ace down to seven. The queen of clubs is the highest card in the deck; the seven of diamonds is the lowest trump. Non-trump suits rank ace high down to seven when a plain suit is led.',
      },
      {
        title: 'Picking the Blind',
        content:
          'Starting left of dealer, each player may pass or pick the blind. Picking commits that player to become picker and play against the others. The picker exposes the two blind cards, adds them to hand, then buries two cards face down. Buried cards count toward picker\'s final card-point total at showdown.',
      },
      {
        title: 'Calling a Partner',
        content:
          'After picking, the picker calls an ace whose suit they hold but do not bury; the holder of that ace becomes partner but stays hidden until the ace is played. If picker holds all three non-trump aces, they may call a ten instead. Picker may go alone by not calling a partner, keeping all defenders opposed and increasing stakes.',
      },
      {
        title: 'Leading and Following',
        content:
          'Player left of dealer leads to the first trick. Players must follow suit if possible. If void in the led suit, they may play any card, including trump. There is no requirement to trump in when void unless house rules add that constraint. Trick winner leads next.',
      },
      {
        title: 'Trick-Taking Rules',
        content:
          'Highest trump wins the trick; if no trump was played, highest card of the led suit wins. Tricks are stacked face down in front of the winner; card points are counted only after the hand. Partners combine their trick piles for scoring even though partner identity may still be secret mid-hand.',
      },
      {
        title: 'Card Points',
        content:
          'Aces count 11, tens 10, kings 4, queens 3, jacks 2, and sevens through nines zero. The picker side needs 61 of 120 available card points to win the hand. Failing to reach 61 means defenders score against the picker; partner shares picker\'s fate once revealed.',
      },
      {
        title: 'Schneider and Schwarz',
        content:
          'Schneider occurs when the losing side held fewer than 31 card points in tricks (or fewer than three tricks in some clubs). Schwarz is losing every trick. These thresholds double or quadruple the base stake depending on local table rules. Announcing schneider before the last trick is a optional aggressive line in some variants.',
      },
      {
        title: 'Doubling and Cracking',
        content:
          'Defenders may crack or re-crack to raise stakes before play begins, signaling confidence they will defeat the picker. The picker may crack back in some rulesets. Doubling chains stop when players pass; final multiplier applies to the hand\'s point value.',
      },
      {
        title: 'Scoring the Hand',
        content:
          'Base value is often one unit per pick won or lost, modified by going alone, schneider, schwarz, and cracks. Partner shares picker\'s win or loss equally in five-handed play. Score is kept cumulatively across hands until a session target or cash-out.',
      },
      {
        title: 'Four- and Three-Player Variants',
        content:
          'With four players, one sits each hand or deals six cards and omits the blind differently. With three, each player faces the others without hidden partner. Trump order and picking logic stay the same; only deal count and partnership structure change.',
      },
    ],
    winCondition: 'Points tracked with schneider/schwarz bonuses across hands. Match to target score.',
    tags: ['trick-taking', '5-player', 'trump', 'german'],
    playerMin: 4, playerMax: 5, deckType: 'skat32',
    sourceUrl: 'https://www.pagat.com/schafkopf/shep.html', sourceName: 'Pagat.com',
    difficulty: 'advanced', estimatedMinutes: 45,
  },
  {
    slug: 'piquet',
    name: 'Piquet',
    summary: 'Historic two-player French game in two phases: meld scoring (point) then trick play (play).',
    setup:
      'Play with a 32-card piquet deck (7 through ace in four suits). Determine first dealer by cut; non-dealer is called elder hand, dealer is younger hand. Deal twelve cards to each player in batches of two or three, leaving eight cards as the talon (stock) face down. Only twelve tricks exist per deal because twenty-four cards are in play. Matches are usually played as a partie to 100 points across six deals (a rubicon) or until one player passes that total.',
    rules: [
      {
        title: 'Roles of Elder and Younger',
        content:
          'Elder hand (non-dealer) always acts first in the point phase and leads the first trick in the play phase. Younger hand responds second and may hold positional advantage after the exchange. Roles alternate each deal when the deal passes.',
      },
      {
        title: 'The Exchange',
        content:
          'Elder may discard one to five cards and draw replacements from the top of the talon. Younger then may discard and draw up to the number elder took, or up to five if elder stood pat. Discards are placed face down and are out of play. After exchange, each player holds twelve cards again if they chose to fill.',
      },
      {
        title: 'Declarations in the Point Phase',
        content:
          'Players declare melds in strict order: elder declares best combination in each category, younger responds equal or says "not good" if inferior. Categories include carte blanche (no face cards), point (most cards in one suit), sequence (run of three or more in suit), and sets of threes or fours. Only the highest declaration in each category scores unless equal, in which case neither scores that category.',
      },
      {
        title: 'Scoring Melds',
        content:
          'Point scores by length of longest suit. Sequences score by length with bonuses for longer runs. Sets score fixed values for trios and quatuors. Carte blanche is rare and scores heavily. Totals from the point phase are written immediately; play phase points add afterward.',
      },
      {
        title: 'Leading Tricks',
        content:
          'Elder leads any card to the first trick. Second player must follow suit if able. If unable to follow, they must play a card that will win if possible under piquet\'s strict head-the-trick rule when holding trump in a plain suit lead. Trick winner leads next.',
      },
      {
        title: 'Trick Scoring in the Play Phase',
        content:
          'Players score one point for leading a winning card to a trick (leading to trick) and one for winning the trick (card played). Capot—all twelve tricks—scores an extra forty points to the taker. If one side wins every trick, the loser earns no trick points at all.',
      },
      {
        title: 'Pique and Repique',
        content:
          'Repique awards sixty points if a player scores thirty or more in the point phase before the opponent scores anything in that phase. Pique adds thirty if a player reaches thirty cumulative points in the play phase before the opponent scores in play. These bonuses stack with ordinary meld and trick totals and swing partie outcomes.',
      },
      {
        title: 'Carte Blanche and Equity',
        content:
          'A hand with no court cards may declare carte blanche before exchange for a large bonus; some rules require proof by showing one card. Equal declarations in sequences or sets cancel scoring in that tier. Players must declare maximum melds honestly when challenged under classical honor rules.',
      },
      {
        title: 'Rubicon Scoring',
        content:
          'In a six-deal partie, if neither player reaches 100 after six hands, the player with the higher total wins a rubicon bonus (often 100 added to the difference). This encourages aggressive play in the final deal. Classical scoring also tracks games and vetoes depending on national club custom.',
      },
      {
        title: 'Etiquette and Verification',
        content:
          'Declarations are verbal and binding once acknowledged. Elder must declare point count in longest suit when claiming point. Younger may request to see demonstrated sequences or sets when tied. Miscounts corrected before tricks begin stand; after play starts, meld errors usually stand against the offender.',
      },
    ],
    winCondition: 'First to 100 points wins partie. Six deals make a rubicon in some scoring systems.',
    tags: ['2-player', 'classic', 'meld', 'trick-taking'],
    playerMin: 2, playerMax: 2, deckType: 'skat32',
    sourceUrl: 'https://www.pagat.com/piquet/piquet.html', sourceName: 'Pagat.com',
    difficulty: 'advanced', estimatedMinutes: 45,
  },
  {
    slug: 'bezique',
    name: 'Bezique',
    summary: 'Classic two-player meld and trick game using double deck piquet cards. Score for marriages, beziques, and last trick.',
    setup:
      'Combine two 32-card piquet packs (7 through ace in each suit) for sixty-four cards total, or use a subset of two standard decks with sixes removed. Non-dealer receives eight cards first, then dealer eight, in batches of two or three. Turn the next card face up; if it is a seven, dealer scores ten points immediately and turns another. Remaining cards form the stock face down; the turned card remains partly exposed beneath stock as a reminder of trump in some variants.',
    rules: [
      {
        title: 'Trump and Card Order',
        content:
          'The turned-up suit is trump for the deal unless the variant uses fixed trump by cut. In trick play, ace is high in plain suits; in trump, ten outranks ace in classical bezique order. Follow suit when possible; if void, any card may be played. Highest trump or highest led suit wins.',
      },
      {
        title: 'Drawing After Each Trick',
        content:
          'Winner of the trick draws the top stock card first, then the loser draws. Winner may declare melds before leading to the next trick. When stock is exhausted, play continues with remaining hand cards only and melding ends except for declared marriages still scoring at trick end in some rules.',
      },
      {
        title: 'Valid Melds',
        content:
          'After winning a trick and before leading, declare melds from hand: marriages (king and queen of same suit), bezique (queen of spades and jack of diamonds, even off-suit), double bezique (both bezique pairs), sequences of five or more in suit, and brisques (aces and tens captured in tricks score at end). Meld cards stay in hand and can be reused in tricks unless a marriage is broken.',
      },
      {
        title: 'Marriages and Trump Marriage',
        content:
          'Plain marriage in non-trump scores twenty; trump marriage scores forty. Declaring a marriage does not remove the cards from play. A king or queen may belong to multiple declared combinations across turns if still legally held.',
      },
      {
        title: 'Bezique and Double Bezique',
        content:
          'Bezique is the specific queen of spades plus jack of diamonds pairing for forty points. Holding both pairs scores five hundred for double bezique in classic scoring. Only one bezique declaration per turn unless house rules allow consolidation when drawing the matching card later.',
      },
      {
        title: 'Sequences',
        content:
          'Sequences of five or more consecutive cards in one suit score by length with escalating values. Longer sequences outrank shorter ones for declaration priority. Sequences must be declared when held; cards remain playable individually afterward.',
      },
      {
        title: 'Last Trick Bonus',
        content:
          'Capturing the final trick of the stock-depletion phase scores ten points (or seven in some Victorian tables). Plan endgame leads to secure this bonus when scores are close. After the last trick, count brisques (aces and tens in tricks) for ten each toward total.',
      },
      {
        title: 'Scoring and Game Length',
        content:
          'Keep a running total of melds, brisques, and bonuses across deals until one player reaches 1000 or 2000 depending on agreed match length. Partial scores are recorded at end of each deal before redealing. Rubber-style continuation after passing the target is optional.',
      },
      {
        title: 'Rubber and Redeal Customs',
        content:
          'Classical bezique uses a cribbage board or paper column for hundreds. Some deal alternates only after both players reach a checkpoint. Seven turned at start triggers immediate ten to dealer and may affect who deals next under antique rules.',
      },
      {
        title: 'Common Variants',
        content:
          'Rubicon bezique and six-pack bezique extend meld types and stock size. Pinochle players may recognize marriage and bezique overlap but should not mix scoring tables. Modern simplified bezique drops some sequence tiers to speed play.',
      },
    ],
    winCondition: 'First to 1000 points wins. Typical games span multiple deals.',
    tags: ['2-player', 'meld', 'classic', 'trick-taking'],
    playerMin: 2, playerMax: 2, deckType: 'double52',
    sourceUrl: 'https://www.pagat.com/bezique/bezique.html', sourceName: 'Pagat.com',
    difficulty: 'advanced', estimatedMinutes: 50,
  },
  {
    slug: 'eleusis',
    name: 'Eleusis',
    summary: 'Inductive logic game. One player is God and secretly defines a rule; others deduce it by playing cards to a layout.',
    setup:
      'Use a standard 52-card deck shuffled and dealt evenly among players except God, who receives no hand in the basic game. God privately chooses a secret rule governing which cards may legally extend the main layout (examples: alternate colors, same suit as previous, rank one higher). One card starts the layout face up as the seed. Players also need a sideline area for rejected cards and tokens or paper to track scores across rounds.',
    rules: [
      {
        title: 'God\'s Secret Rule',
        content:
          'God thinks of a deterministic rule that accepts or rejects any proposed card based only on the current layout and the card played. The rule should be fair, expressible in plain language, and not reference player identity. God does not hint beyond marking plays correct or incorrect.',
      },
      {
        title: 'Playing a Card',
        content:
          'On a turn, a player plays one card from hand face up as a proposed extension to the main line. God marks it correct (it stays in the line) or incorrect (it moves to the sideline). Players observe patterns from accepted and rejected cards to refine hypotheses.',
      },
      {
        title: 'Correct and Incorrect Marks',
        content:
          'Correct cards extend the single main sequence left to right. Incorrect cards leave the hand permanently to the sideline and may cost the player later penalty draws. God must apply the rule consistently; inconsistency breaks the game.',
      },
      {
        title: 'Declaring No Play',
        content:
          'If a player believes no card in hand satisfies the rule, they may declare "no play" instead of playing. God checks the hand secretly. If truly no card fits, the player becomes prophet; if God finds a legal card, the player draws penalty cards from stock.',
      },
      {
        title: 'The Prophet',
        content:
          'A successful no-play caller becomes prophet and sits out the hand while marking correct and incorrect for God. Prophet continues until marking one card wrong, then returns as a normal mortal with accumulated sidelined cards counting against them. Only one prophet at a time in standard rules.',
      },
      {
        title: 'God\'s Hand and Stock',
        content:
          'When God\'s private reserve or stock exists in advanced variants, God replenishes from it rather than holding a player hand. In the simplest version God holds no cards and only adjudicates. Stock exhaustion ends the round.',
      },
      {
        title: 'Ending a Round',
        content:
          'The round ends when all mortals empty their hands or when the deck is exhausted. Players count sidelined cards; fewer rejections mean better performance. God receives a score based on how many turns the rule survived before someone became prophet.',
      },
      {
        title: 'Scoring',
        content:
          'Each sidelined card counts as one penalty point against its owner. Prophet role transfers scoring advantage because prophets neither play nor accumulate sideline cards until failure. Rotate God clockwise so everyone defines a rule over a full session.',
      },
      {
        title: 'Designing Good Rules',
        content:
          'Strong rules are neither trivial (always same suit) nor impossible (prime ranks only with no feedback). Moderate complexity keeps deduction fun for four to six players. God should write the rule down secretly before play to avoid mid-round drift.',
      },
      {
        title: 'Eleusis Express and Variants',
        content:
          'Express versions deal smaller hands and use simpler starter rules for parties. Multi-line layouts and partial revelation variants exist for experienced groups. Tournament Eleusis caps God score to encourage approachable rules.',
      },
    ],
    winCondition: 'Mortal with fewest sidelined cards when all cards played wins. God wins if rule stumps everyone.',
    tags: ['logic', 'deduction', '3-8-players', 'party'],
    playerMin: 3, playerMax: 8, deckType: 'standard52',
    sourceUrl: 'https://www.pagat.com/experimental/eleusis.html', sourceName: 'Pagat.com',
    difficulty: 'advanced', estimatedMinutes: 40,
  },
  {
    slug: 'zetema',
    name: 'Zetema',
    summary: 'Solitaire-like puzzle for 2–6 using a full deck. Six foundation piles with special marriage and sequence goals.',
    setup:
      'Use a full 52-card deck. Deal all cards face up into thirteen piles of four cards each, forming the tableau; these piles are the only workspace. Above them reserve six empty foundation slots numbered one through six. Zetema is usually played solo, but players can compete for lowest move count or timed completion with identical layouts dealt from a sealed deck order.',
    rules: [
      {
        title: 'Foundation Goals Overview',
        content:
          'Six foundations each demand a different completed pattern mixing marriages (king-queen pairs) and sequences (consecutive ranks in one suit). Foundations build upward from base requirements printed in rule sheets: typical goals combine specific suit sequences with paired courts. A foundation is finished only when its full pattern is satisfied.',
      },
      {
        title: 'Tableau Piles',
        content:
          'Each of the thirteen piles holds four cards visible at all times. Only the top card of a pile may move. Empty pile slots may appear when a pile is cleared; empty spaces can receive any single card from another pile top depending on variant restrictions.',
      },
      {
        title: 'Moving Cards',
        content:
          'Move one card at a time from pile tops to foundations or other piles obeying zetema\'s build rules. Piles may build down in alternating colors in some layouts, or only onto strictly lower ranks in others—follow the edition you are playing. No card may cover a king in certain piles once played.',
      },
      {
        title: 'Marriage Foundations',
        content:
          'Designated foundations accept king and queen pairs of matching suits, sometimes requiring marriage before sequence cards stack above them. Order matters: place the king or queen as directed before completing the sequence cap. Mixed-suit marriages are invalid.',
      },
      {
        title: 'Sequence Foundations',
        content:
          'Sequence foundations build ascending runs in one suit, often starting from a specified rank and ending at a fixed ace or ten. Cards must enter in legal order without skipping ranks. Once a sequence foundation is complete, it locks.',
      },
      {
        title: 'Special Rank Rules',
        content:
          'Zetema treats tens and courts as pivotal: some foundations require a ten at the sequence midpoint or a jack to bridge two mini runs. Aces may be high or low only where the pattern explicitly allows. Deviating from the pattern invalidates the foundation.',
      },
      {
        title: 'Rearranging the Tableau',
        content:
          'Temporarily stack cards among tableau piles to expose buried cards needed for foundations. Plan moves to avoid trapping required cards beneath incompatible ranks. Because all cards start face up, the puzzle is pure skill without hidden information.',
      },
      {
        title: 'Winning and Losing',
        content:
          'You win when all six foundations meet their targets and no cards remain in the tableau. If no legal move remains with foundations incomplete, the deal is lost. Reshuffles are not part of classical zetema; restart the same layout to improve.',
      },
      {
        title: 'Competitive Play',
        content:
          'Two or more solvers race on identical deals, comparing move counts or completion time. Some clubs deal a daily zetema seed from a numbered layout book. Penalties add for each extra move beyond par in scoring variants.',
      },
    ],
    winCondition: 'Complete all six foundation objectives with no cards left in tableau.',
    tags: ['solitaire', 'puzzle', '1-6-players'],
    playerMin: 1, playerMax: 6, deckType: 'standard52',
    sourceUrl: 'https://www.pagat.com/patience/zetema.html', sourceName: 'Pagat.com',
    difficulty: 'advanced', estimatedMinutes: 20,
  },
  {
    slug: 'regicide',
    name: 'Regicide',
    summary: 'Cooperative fantasy game using standard deck to defeat kings and the regicide target. Jokers are powerful heroes.',
    setup:
      'Remove the two red face cards (red jacks, queens, or kings depending on published edition—classic Regicide uses red jacks as the boss line) from a standard deck including two jokers. Shuffle the remaining tactician deck. Place boss cards in a face-down column from lowest to highest challenge, ending with the Regicide king as the final boss. Players share a health track tied to the tactician deck and begin with opening hands drawn from the deck per player count (1–4 supported).',
    rules: [
      {
        title: 'Cooperative Objective',
        content:
          'All players win or lose together. Defeat every boss card in the column, including the Regicide, before the tactician deck runs out and team health reaches zero. Communication is open; table talk about suits and numbers is encouraged.',
      },
      {
        title: 'Turn Structure',
        content:
          'On your turn, draw up to your hand limit from the tactician deck, play legal combinations to attack the active boss, then discard down if required. Boss effects trigger when revealed and when defeated. Pass the turn clockwise.',
      },
      {
        title: 'Combat Basics',
        content:
          'Flip the top boss to face up. Play one or more tactician cards sharing a suit to deal damage equal to the highest rank played (aces count 1, faces 10). Meet or exceed boss health to defeat it; excess damage does not carry over unless a power says otherwise.',
      },
      {
        title: 'Joker Heroes',
        content:
          'Jokers substitute any suit when attacking and often carry special powers such as doubling damage, healing team health, or ignoring boss abilities. Once spent, jokers usually leave the game permanently—timing them on the Regicide is critical.',
      },
      {
        title: 'Boss Abilities',
        content:
          'Each boss rank carries a printed ability: discard requirements, limited suits, damage to team health, or forcing players to lose cards. Resolve ability text when the boss is revealed and again on defeat if stated. The Regicide combines the harshest effects.',
      },
      {
        title: 'Team Health',
        content:
          'When the tactician deck cannot supply a draw, team health drops and the turn continues under penalty rules. At zero health the team loses immediately even if the boss column remains. Healing comes from specific card powers and joker effects.',
      },
      {
        title: 'Hand Management',
        content:
          'Players hold a limited number of cards; exceeding the limit forces discards at end of turn. Coordinate suits so each boss can be answered without wasting high ranks early. Some bosses require exact counts or forbid certain ranks.',
      },
      {
        title: 'Solo and Two-Player Scaling',
        content:
          'Official scaling adjusts hand size, health, and boss order for one or two tacticians. Higher player counts add cards to the boss column for tension. Always use the chart from the published Regicide rules for your edition.',
      },
      {
        title: 'Victory and Defeat',
        content:
          'Defeating the final Regicide boss wins the campaign immediately. Losing all health, failing a mandatory boss condition, or stalling without legal attacks loses the game. Record wins by difficulty tier if using advanced boss mixes.',
      },
    ],
    winCondition: 'Defeat all boss cards including the Regicide (red king) before tactician deck exhausted.',
    tags: ['cooperative', '1-4-players', 'commercial'],
    playerMin: 1, playerMax: 4, deckType: 'standard52+jokers',
    sourceUrl: 'https://www.badgerfrommars.com/regicide', sourceName: 'Badger From Mars',
    difficulty: 'intermediate', estimatedMinutes: 20,
  },
  {
    slug: 'skull',
    name: 'Skull',
    summary: 'Bluffing and bidding with coasters/skull cards. Bid how many flips you can survive without hitting a skull.',
    setup:
      'Each player receives four identical tokens: three roses and one skull (commercial Skull uses art coasters; homemade sets use suit groups or marked cards). All players start with their full set visible only to themselves. Place a mat or central area for revealed tiles during challenges. Three to six players work best; fewer than three lacks bluff depth. Choose first player for opening placement and rotate clockwise.',
    rules: [
      {
        title: 'Placement Phase',
        content:
          'Each round begins with simultaneous secret placement: choose one token from your hand and put it face down in front of you, adding to any stack you built in earlier rounds of the same challenge sequence. Once placed, tokens cannot be rearranged. When all players have placed, bidding begins on the combined table.',
      },
      {
        title: 'Bidding',
        content:
          'Starting left of the player who began placement, each player either raises the bid or passes. A bid is a number: how many tokens you commit to flip without hitting a skull. Minimum bid is one; each raise must increase the total. Passing is final for that challenge.',
      },
      {
        title: 'Winning the Bid',
        content:
          'Highest bidder must attempt their bid. They choose any single stack on the table and flip tokens one at a time from the top of that stack. If they complete the bid number without revealing a skull, they succeed; if a skull appears, they fail.',
      },
      {
        title: 'Flipping Order',
        content:
          'The bidder must flip every token in their chosen stack before moving to another stack. They may switch stacks only after exhausting the current one. Roses are safe; the first skull ends the attempt immediately and costs the bidder one token permanently removed from the game.',
      },
      {
        title: 'Failed Challenge Penalty',
        content:
          'On failure, the bidder loses one of their four tokens at random from their supply (not from table stacks). Failed bidders still discard the revealed skull from the table per rules, shrinking future risk. Other players keep their hidden stacks for the next round.',
      },
      {
        title: 'Successful Challenge Reward',
        content:
          'If the bidder flips the promised number of roses, they win the challenge outright and gain a point toward match victory. Commercial rules require two successful challenges to win the game. Some house rules grant an extra placement advantage after success.',
      },
      {
        title: 'Bluffing and Table Presence',
        content:
          'Players may load skulls early in their personal stacks to deter flips, or roses to bait high bids. Passing with a heavy skull stack preserves tokens while letting others risk failure. Reading stack height and prior behavior drives the meta-game.',
      },
      {
        title: 'Elimination Variant',
        content:
          'When a player loses all four tokens, they are eliminated. Play continues until one survivor remains or someone earns two victories. Elimination games run longer and punish reckless bidding.',
      },
      {
        title: 'Advanced Placement',
        content:
          'Experienced groups enforce strict simultaneous reveal of placements to prevent reaction timing. Optional rules cap stack height or require at least one new placement each round to prevent stalemate passes.',
      },
    ],
    winCondition: 'First to win two challenges (or last player with tokens in some rules) wins.',
    tags: ['bluffing', 'party', '3-6-players'],
    playerMin: 3, playerMax: 6, deckType: 'other',
    sourceUrl: 'https://boardgamegeek.com/boardgame/92431/skull', sourceName: 'BoardGameGeek',
    difficulty: 'beginner', estimatedMinutes: 20,
  },
  {
    slug: 'fan-tan',
    name: 'Fan Tan (Sevens)',
    summary: 'Build suit sequences outward from sevens. Empty your hand first by playing adjacent ranks in suit.',
    setup:
      'Use a standard 52-card deck for four to seven players. Deal all cards as evenly as possible; some players may receive one extra card when the count does not divide fifty-two. Seating is circular with a central play area for four suit rows. Agree whether play starts with the seven of diamonds specifically or any seven held by the player who leads first hand. Track penalty points across multiple rounds if playing a match rather than single deals.',
    rules: [
      {
        title: 'Starting the Layout',
        content:
          'The player holding the agreed starting seven (often seven of diamonds) plays it to the center, opening that suit\'s row. If no one holds that card in a variant, the holder of any seven may start. Only sevens may begin a row; no other rank opens a new suit.',
      },
      {
        title: 'Building Rows',
        content:
          'Each suit forms a single line extending low toward ace and high toward king from the seven. Play the six or eight of a suit only after its seven is down, then five or nine, and so on. Cards must land on the correct side of the seven without gaps.',
      },
      {
        title: 'Turn Order',
        content:
          'Players take turns clockwise playing one legal card or passing. A legal play extends any open suit row by exactly one adjacent rank. You may play on any suit that is open, not only the suit you started.',
      },
      {
        title: 'Passing',
        content:
          'If you cannot play, you pass. Some variants charge one penalty chip or point per pass. Passing is public and signals which suits you lack near the edges of the layout.',
      },
      {
        title: 'Blocking and Timing',
        content:
          'Holding key edge cards (like the eight and six of one suit) lets you control when that suit opens for others. Releasing a seven early helps you shed but aids opponents. Endgame timing often matters more than speed early.',
      },
      {
        title: 'Empty Hand Victory',
        content:
          'The first player to play their last card wins the deal immediately. Other players do not get a final turn once someone goes out in strict rules. Match scoring then assigns penalty points for cards left in hand.',
      },
      {
        title: 'Penalty Scoring',
        content:
          'Remaining cards score their pip value face cards ten, aces one or eleven per house rule. Low total across multiple deals wins the match. Some count one penalty per card regardless of rank for simpler kid-friendly scoring.',
      },
      {
        title: 'Multi-Round Matches',
        content:
          'Rotate dealer each round and deal fresh hands. Cumulative penalty totals determine overall winner after an agreed number of rounds or when someone exceeds a ceiling like 100 points. Sudden-death single deals work for quick sessions.',
      },
      {
        title: 'Variants',
        content:
          'Fan Tan variants allow simultaneous race play without turns, or require playing if able with a fine when caught holding back. Domino Fan Tan uses tiles instead of cards but preserves the seven-centered layout idea.',
      },
    ],
    winCondition: 'First to empty hand wins. Others score penalty points for remaining cards across rounds.',
    tags: ['shedding', '4-7-players', 'sequence'],
    playerMin: 4, playerMax: 7, deckType: 'standard52',
    sourceUrl: 'https://www.pagat.com/layout/sevens.html', sourceName: 'Pagat.com',
    difficulty: 'beginner', estimatedMinutes: 20,
  },
  {
    slug: 'pyramid',
    name: 'Pyramid (Solitaire)',
    summary: 'Pair-removal solitaire on a pyramid layout. Remove exposed pairs summing to 13.',
    setup:
      'Shuffle a standard 52-card deck and deal twenty-eight cards face up in a pyramid: one card apex row, two in the second row, up through seven in the base row. Each card partially covers the two below it in the next row. The remaining twenty-four cards form the stock face down beside a waste pile. Kings count as thirteen alone; queens twelve, jacks eleven, aces one. Only wholly uncovered cards are available for removal at any moment.',
    rules: [
      {
        title: 'Exposed Cards',
        content:
          'A pyramid card is exposed when no card covers it from the row below. At start, only the seven base-row cards and any card not overlapped are exposed. Removing cards may newly expose cards higher in the pyramid.',
      },
      {
        title: 'Pair Removal',
        content:
          'Remove two exposed cards whose ranks sum to thirteen (ace + queen, two + jack, three + ten, four + nine, five + eight, six + seven). Both cards leave the layout permanently. You may pair two pyramid cards or one pyramid card with the top waste card.',
      },
      {
        title: 'Kings',
        content:
          'A king needs no partner; remove any exposed king alone as a single move worth thirteen. Kings on the waste pile top also clear alone when selected. Clearing kings early opens paths in the pyramid center.',
      },
      {
        title: 'Stock and Waste',
        content:
          'When no handy pyramid pairs exist, draw one stock card face up to the waste. You may immediately pair it with an exposed pyramid card summing to thirteen. Only the top waste card is ever playable, not buried waste cards.',
      },
      {
        title: 'Recycling the Stock',
        content:
          'Classic rules allow one or three passes through the stock depending on edition. When stock empties, flip the waste pile over to refill stock without shuffling in strict single-pass versions. Track passes to avoid illegal reuse.',
      },
      {
        title: 'Planning Moves',
        content:
          'Sequence matters: removing a card exposes its dependents. Sometimes deferring an obvious pair keeps a needed rank accessible. Work from the bottom row upward conceptually even though any exposed card may play.',
      },
      {
        title: 'Winning',
        content:
          'Clear every pyramid card and waste to win. Partial clearance still counts as loss in strict scoring. Success rate is well below half of deals under uniform random shuffles.',
      },
      {
        title: 'Scoring Partial Games',
        content:
          'When unwinnable, score remaining pyramid cards by count or pip sum for competitive solitaire leagues. Lower remainder is better. Some apps award bonus for unused stock cards.',
      },
      {
        title: 'Common Variants',
        content:
          'Relaxed pyramid allows pairing with any waste card repeatedly through unlimited stock cycles. Strict pyramid permits only one stock pass. Giant pyramid layouts increase row count for extended puzzles.',
      },
    ],
    winCondition: 'Clear entire pyramid. Many deals are unwinnable — score by remaining cards.',
    tags: ['solitaire', '1-player', 'patience'],
    playerMin: 1, playerMax: 1, deckType: 'standard52',
    sourceUrl: 'https://www.pagat.com/patience/pyramid.html', sourceName: 'Pagat.com',
    difficulty: 'beginner', estimatedMinutes: 10,
  },
  {
    slug: 'spite-and-malice',
    name: 'Spite and Malice',
    summary: 'Two-player race using personal payoff piles and center stacks. Play ascending stacks like competitive solitaire.',
    setup:
      'Shuffle two standard 52-card decks together (104 cards). Each player receives a twenty-card payoff pile placed face down with only the top card visible, four empty discard piles beside it, and a hand of five cards drawn from the stock. Three center stacks start empty and build shared ascending sequences. Leave remaining cards as a face-down stock between players. Non-dealer takes first turn; turns alternate until someone clears their payoff pile.',
    rules: [
      {
        title: 'Center Stacks',
        content:
          'The three center stacks build upward from ace to queen in any suit mix (ace, then two, three, through queen). Suit does not matter on centers. Kings are blockers and cannot be placed on centers; they must go to discard piles or wait in hand.',
      },
      {
        title: 'Payoff Pile',
        content:
          'Your payoff top card is always playable on centers or discard piles under normal rank rules. Emptying the payoff pile wins instantly. You may hold other payoff cards hidden; only the top counts until played.',
      },
      {
        title: 'Hand Play',
        content:
          'On your turn you may play any number of cards from hand to legal centers or discards before ending. Hand refills to five from stock whenever it drops below five during the turn, as often as needed until stock empty.',
      },
      {
        title: 'Discard Piles',
        content:
          'Each player owns four discard piles where only the top card is visible. You may play the top discard card to centers when rank-legal. End your turn by discarding exactly one hand card face up onto one discard pile.',
      },
      {
        title: 'Turn End Requirement',
        content:
          'Every turn must end with a discard unless you win by playing your last payoff card with no discard required in that rules interpretation. You cannot skip discarding to hoard hand cards except when stock and hand are empty simultaneously.',
      },
      {
        title: 'Kings as Stoppers',
        content:
          'Kings cannot cover anything on center stacks and usually cannot be discarded on other kings. They clog hands and discard tops, adding spite. Playing kings to discard piles frees them from hand but may block your future discards.',
      },
      {
        title: 'Blocking Opponents',
        content:
          'Playing the next rank on a center stack denies opponent that stack until you extend it further or they use another stack. With only three stacks, locking queens near the top slows both players. Payoff top priority often overrides blocking.',
      },
      {
        title: 'Stock Exhaustion',
        content:
          'When stock runs out, continue alternating turns using hand and discards only. Refill-to-five stops. Endgame precision with known cards increases bluff and lock potential.',
      },
      {
        title: 'Variants and Names',
        content:
          'Cat and Mouse and Spite and Malice variants differ in payoff size (20 vs 26) and center count. Some allow playing payoff cards out of order from a spread fan; classic rules use single payoff stack only.',
      },
    ],
    winCondition: 'First to empty payoff pile wins.',
    tags: ['2-player', 'solitaire', 'competitive'],
    playerMin: 2, playerMax: 2, deckType: 'double52',
    sourceUrl: 'https://www.pagat.com/patience/spite.html', sourceName: 'Pagat.com',
    difficulty: 'intermediate', estimatedMinutes: 25,
  },
  {
    slug: '500',
    name: '500 (Five Hundred)',
    summary: 'Australian/American trick-taking with bidding up to 10 tricks and joker as best trump.',
    setup:
      'Prepare a 43-card deck by removing twos through fours from a standard pack and adding one joker. Four players in fixed partnerships sit crosswise; three-player with a dummy hand and five-player variants exist. Deal ten cards to each player in batches, plus three cards to the kitty face down. Turn order and deal pass left each hand. Score sheet tracks partnership totals toward 500; negative scores are possible when bids fail.',
    rules: [
      {
        title: 'Rank and the Joker',
        content:
          'In trump suits, order is joker highest, jack of trump (right bower), jack of same-color suit (left bower), then ace down to five. Plain suits rank ace high to five. The joker counts as trump always and must win the trick when trump is led if still held.',
      },
      {
        title: 'Bidding',
        content:
          'Players bid how many tricks their side will take (six through ten) and name trump suit or no trump. Each bid must outrank the previous by trick count or suit value per auction table. Three consecutive passes end the auction; highest bid wins.',
      },
      {
        title: 'Kitty and Discards',
        content:
          'Winning bidder takes the three kitty cards into hand and discards any three face down. Discards count toward bidder\'s trick count at scoring but cannot score embedded meld points unless variant allows. Partner does not see discards in standard rules.',
      },
      {
        title: 'Meld Points (Optional)',
        content:
          'Many American tables score meld before play: combinations like marriage in trump, runs, and joker-ace sets add bonus points if bidder makes the contract. Australian simplified 500 often omits meld entirely—agree before starting.',
      },
      {
        title: 'Opening Lead',
        content:
          'Player left of bidder leads first trick. Must follow suit if possible; if void, may play any card including trump. Highest trump wins; else highest led suit. Trick winner leads next.',
      },
      {
        title: 'Making and Setting Contract',
        content:
          'Bidder\'s side must capture at least the bid trick count. Making exactly scores bid times ten (plus meld if used). Overtricks score small bonuses in some rules. Falling short loses bid times ten regardless of tricks taken.',
      },
      {
        title: 'No Trump Bids',
        content:
          'No trump contracts rank in the bidding ladder and remove bowers and joker trump status except joker may still be specified as always lowest or invalid per local table. Tricks follow plain suit power only.',
      },
      {
        title: 'Slam and Bonuses',
        content:
          'Taking all ten tricks (slam) earns a large bonus on top of bid score in tournament 500. Eight-trick bids and misère variants appear in house rules but are not universal.',
      },
      {
        title: 'Three- and Five-Player Forms',
        content:
          'Three-handed uses a dead hand for kitty only or rotates lone bidder against two defenders. Five-handed may drop the fours from deck and partner sit-out schemes. Stick to one player count per session for scoring clarity.',
      },
      {
        title: 'Game End',
        content:
          'Play continues until a partnership reaches 500 or more on a hand where they make contract. If both cross 500, highest total wins; some tables require exceeding 500 by made bid only. Reset scores for a fresh rubber optionally.',
      },
    ],
    winCondition: 'First partnership to 500 points wins.',
    tags: ['trick-taking', 'partnership', 'bidding', '4-player'],
    playerMin: 3, playerMax: 5, deckType: 'standard52+jokers',
    sourceUrl: 'https://www.pagat.com/auctionwhist/500.html', sourceName: 'Pagat.com',
    difficulty: 'advanced', estimatedMinutes: 45,
  },
  {
    slug: 'ecarte',
    name: 'Écarté',
    summary: 'Classic two-player French trick-taking with discards and marking king/queen of trump for bonus points.',
    setup:
      'Use a 32-card piquet deck (seven through ace). Deal five cards to each player in twos and threes or threes and twos alternately, leaving the remainder as stock face down. Non-dealer is elder hand and decides first on exchanges. Dealer turns the top stock card face up to fix trump for the deal; if it is a king, dealer scores one point immediately in classical scoring. Match play goes to five points per game within a rubber in tournament écarté.',
    rules: [
      {
        title: 'Trump Fixation',
        content:
          'The turned stock card sets trump for the entire hand. If refused or unused stock procedures apply in your variant, trump is still the last turned card before play. Trump cards beat plain suits; ace is highest in plain suits.',
      },
      {
        title: 'The Exchange',
        content:
          'Elder may propose to discard one to five cards and draw replacements from the top of stock. Dealer then may exchange up to the same count or up to five if elder stood pat. Discards are dead. If stock runs short during exchange, take all remaining stock cards without penalty.',
      },
      {
        title: 'Proposing and Accepting',
        content:
          'Elder leads the negotiation by discarding or keeping hand. Younger responds similarly. Some rules require elder to propose at least one discard when holding weak five; others allow standing pat to conceal strength.',
      },
      {
        title: 'Marking the King and Queen',
        content:
          'If you hold king and queen of trump together, you may mark the marriage by announcing or silently showing after exchange depending on variant. Marking commits you to reveal both cards during play to claim bonus if each wins a trick.',
      },
      {
        title: 'Play of Tricks',
        content:
          'Elder leads to first trick. Second player must follow suit if able and must win the trick if possible when holding trump in a plain lead under strict écarté rules. Trick winner leads next; five tricks total decide the hand.',
      },
      {
        title: 'Scoring Tricks',
        content:
          'Take three tricks score one point; take all five score two. Taking fewer than three gives opponent the difference scoring. Points accrue on a linear track to five for game win.',
      },
      {
        title: 'Marriage Bonus',
        content:
          'If marked king-queen of trump each win a trick, score one additional point for the marriage. If either is forced into losing trick before declaration, bonus may be lost. Unmarked marriages score nothing.',
      },
      {
        title: 'Veto and Carte Blanche',
        content:
          'Some classical rules let dealer veto elder\'s exchange once per game or score carte blanche for hand without courts before exchange. These flourishes appear in Victorian manuals more than modern club play.',
      },
      {
        title: 'Rubber and Match',
        content:
          'Winning five points wins one game; best-of-three games form a rubber with rubber bonus. Écarté emphasizes positional elder advantage across multiple deals rather than single-hand luck.',
      },
    ],
    winCondition: 'First to 5 points wins game. Écarté uses rubber scoring in classical play.',
    tags: ['2-player', 'trick-taking', 'classic', 'french'],
    playerMin: 2, playerMax: 2, deckType: 'skat32',
    sourceUrl: 'https://www.pagat.com/piquet/ecarte.html', sourceName: 'Pagat.com',
    difficulty: 'intermediate', estimatedMinutes: 30,
  },
  {
    slug: 'freecell',
    name: 'FreeCell',
    summary: 'Solitaire where all cards are visible. Use four free cells and four foundations to build up by suit.',
    setup:
      'Use a standard 52-card deck shuffled and dealt face up into eight tableau columns: four columns receive seven cards and four receive six, all visible so no hidden cards remain. Above the tableau place four empty free cells (hold one card each temporarily) and four empty foundation piles (build ace through king by suit). All cards are known from the start, distinguishing FreeCell from Klondike. Deal number 11982 is the famous Windows layout; any random deal works for casual play.',
    rules: [
      {
        title: 'Tableau Building',
        content:
          'Build tableau columns downward in alternating colors (red on black and vice versa). Rank decreases by one as you stack (king on queen, queen on jack). Any single card or legal multi-card sequence may move to an empty column.',
      },
      {
        title: 'Free Cells',
        content:
          'Each free cell holds at most one card at a time. Cards in free cells may move to tableau or foundations when legal. Empty free cells increase how many cards you can move as a block in one action.',
      },
      {
        title: 'Foundations',
        content:
          'Foundations build upward in suit from ace to king. Only one card may be placed at a time unless automated helpers in digital versions move stacks. Completing all four foundations wins the deal.',
      },
      {
        title: 'Supermove Formula',
        content:
          'You may move a run of N cards together only if enough empty spaces exist: empty free cells plus empty tableau columns must allow the theoretical maximum move length (generally (1 + empty cells) × 2^(empty columns) adjusted variants). Apps enforce this automatically.',
      },
      {
        title: 'Empty Columns',
        content:
          'Emptying a tableau column creates valuable space for king-led sequences or temporary storage during reorganizations. Do not fill empty columns casually; reserve them for critical king moves.',
      },
      {
        title: 'Planning and Sequences',
        content:
          'Because all cards are visible, success depends on planning rather than luck. Identify blocking low cards buried under long runs early. Move aces and twos to foundations when safe without stranding needed intermediates.',
      },
      {
        title: 'Unwinnable Deals',
        content:
          'Most random FreeCell deals are solvable; a small fraction is proven impossible under perfect play. Computer solvers classify deal numbers; humans retry rather than reshuffle in challenge mode.',
      },
      {
        title: 'Undo and Competition',
        content:
          'Physical play allows unlimited careful undo by tracking moves. Online leaderboards score move count and time. Competitive FreeCell treats minimum moves as par like golf.',
      },
      {
        title: 'Variants',
        content:
          'Baker\'s Game builds tableau down in same suit instead of alternating colors, increasing difficulty. Eight Off adds more free cells. Sea Towers deals fewer columns with deeper stacks.',
      },
    ],
    winCondition: 'Move all cards to foundations. Most deals are solvable — unlike Klondike luck factor.',
    tags: ['solitaire', '1-player', 'patience', 'skill'],
    playerMin: 1, playerMax: 1, deckType: 'standard52',
    sourceUrl: 'https://www.pagat.com/patience/freecell.html', sourceName: 'Pagat.com',
    difficulty: 'intermediate', estimatedMinutes: 10,
  },
];
