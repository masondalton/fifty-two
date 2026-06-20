import type { GameSeed } from '@/types/game';

export const phaseAGames: GameSeed[] = [
  {
    slug: 'hearts',
    name: 'Hearts',
    summary:
      'A classic trick-avoidance game where players try to avoid winning hearts and the queen of spades. Shoot the moon to turn the tables on everyone.',
    setup:
      'Hearts uses a standard 52-card deck with no jokers. Four players is the standard arrangement: shuffle thoroughly, deal thirteen cards to each player, and confirm that every card is in play before passing begins. With three players, remove the two of clubs from the deck so forty-eight cards remain, then deal seventeen cards to each player. With five players, remove both the two of clubs and the two of diamonds, leaving forty-eight cards, and deal nine cards to four players and twelve to the fifth (or adjust so all hands are as equal as possible per your table agreement). Choose a dealer for the first hand; deal and play rotate clockwise after each hand. Agree on the target score before starting—one hundred points is traditional, though fifty works well for a shorter session.',
    rules: [
      {
        title: 'Passing Cards',
        content:
          'Before the first trick of each hand, every player selects three cards from their hand and passes them to another player according to a fixed rotation. On the first hand, pass to the player on your left; on the second hand, pass to the right; on the third hand, pass across the table to your partner; on the fourth hand, hold all cards and pass nothing. The four-hand cycle then repeats for the remainder of the game. Cards are passed simultaneously—place your three outgoing cards face down, receive three incoming cards, and add them to your hand before play begins. You may not show your pass selection to anyone until all players have completed the exchange.',
      },
      {
        title: 'Opening Lead and the Two of Clubs',
        content:
          'The player holding the two of clubs must lead it to the first trick of the hand. If the two of clubs was removed in a three- or five-player game, the holder of the lowest remaining club leads instead, by common agreement. The opening lead must be a club; no other suit may be led on the first trick. After the first trick is complete, the winner of each trick leads any card from their hand to the next trick, subject to the rules about leading hearts.',
      },
      {
        title: 'Following Suit',
        content:
          'When a trick is led, each player in clockwise order must play a card of the led suit if they hold one. If a player has no cards of the led suit, they may play any card from their hand, including a heart or the queen of spades. There is no trump suit in Hearts—the highest card of the led suit wins the trick unless the table uses a rare variant that treats hearts as trump after they are broken. A player who revokes (fails to follow suit when able) typically forfeits the hand or receives all penalty points for that deal, depending on house rules.',
      },
      {
        title: 'Winning Tricks and Leading',
        content:
          'The highest card of the led suit captures the trick, and the winner collects the four cards and leads to the next trick. Players may examine tricks they have won, but collected tricks are kept face down in front of the winner. The lead player may choose any legal card, but hearts may not be led until hearts have been broken—that is, until a heart has been played on a trick because someone could not follow the led suit. The queen of spades does not count as breaking hearts. On the final trick of a hand, all remaining cards must be played and the last trick is won normally.',
      },
      {
        title: 'Breaking Hearts',
        content:
          'Hearts are considered unbroken at the start of each hand. A heart played while following suit to a non-heart lead does not break hearts—only a heart discarded because the player was void in the led suit breaks them. Once broken, any player may lead a heart on a subsequent trick. Some tables also require that the queen of spades cannot be dumped on the first trick, even if the player is void in clubs; confirm this restriction before play if your group uses it. Breaking hearts early is often deliberate when a player is attempting to shoot the moon.',
      },
      {
        title: 'Scoring Penalty Cards',
        content:
          'At the end of each hand, players count penalty points from the tricks they captured. Each heart card in a player\'s won tricks scores one point. The queen of spades scores thirteen points regardless of when it was taken. The ace through king of hearts each count individually, so capturing many heart tricks accumulates quickly. The ten, jack, king, and ace of spades carry no penalty unless your table uses an optional variant. Record each player\'s hand score and add it to their running total on a score sheet.',
      },
      {
        title: 'Shooting the Moon',
        content:
          'If one player captures all thirteen hearts plus the queen of spades in a single hand, that player has shot the moon. Instead of adding twenty-six points to their own score, the shooter chooses one of two options: subtract twenty-six points from their own total, or add twenty-six points to every opponent\'s total while scoring zero for the hand themselves. The choice is announced after the hand is scored and before the next deal. Shooting the moon is rare and usually requires concealing intent until hearts are broken and opponents are forced to take penalty cards.',
      },
      {
        title: 'End of Game and Winning',
        content:
          'The game continues hand after hand with deal and pass rotation advancing clockwise until at least one player\'s cumulative score reaches or exceeds the agreed target, traditionally one hundred points. When the target is reached, the player with the lowest total score wins. If two or more players tie for lowest, those players share the win or play additional hands until the tie breaks, by agreement. Some groups stop immediately when someone hits the target; others finish the current round so all players receive the same number of deals.',
      },
      {
        title: 'Three-Player Hearts',
        content:
          'With three players, the two of clubs is removed and seventeen cards are dealt to each participant. Passing still follows the left-right-hold cycle, but with three players the third hand pass is often treated as hold rather than across, since there is no fixed partner seat. The holder of the two of clubs—or the lowest club if removed—opens the first trick. Shooting the moon requires capturing all hearts and the queen of spades as usual, worth twenty-six points. Three-player Hearts tends to be more volatile because each player holds over one-third of the deck.',
      },
      {
        title: 'Optional House Rules',
        content:
          'Many tables adopt small adjustments for variety or balance. Spot hearts assigns different point values to specific heart cards rather than one point each. Harsh scoring adds five points per heart instead of one. No-pass hands, where every fourth hand skips passing, appear in some digital implementations. Jenna\'s rule requires passing three cards on every hand with no hold round. Agree on any optional rules before the first deal so scoring and passing expectations stay consistent throughout the session.',
      },
    ],
    winCondition:
      'Lowest total score when any player reaches the agreed target (usually 100) wins. Avoid points — the goal is to take as few penalty cards as possible.',
    tags: ['trick-taking', 'shedding', '4-player', 'classic', 'avoidance'],
    playerMin: 3,
    playerMax: 5,
    deckType: 'standard52',
    sourceUrl: 'https://www.pagat.com/reverse/hearts.html',
    sourceName: 'Pagat.com',
    difficulty: 'beginner',
    estimatedMinutes: 30,
  },
  {
    slug: 'spades',
    name: 'Spades',
    summary:
      'Partnership trick-taking game where spades are always trump. Teams bid how many tricks they will take and score by meeting their contract.',
    setup:
      'Spades requires a standard 52-card deck and exactly four players seated in fixed partnerships, with partners sitting directly across from each other. Determine partnerships by drawing cards, mutual agreement, or a cut for high card. Choose a dealer for the first hand; the deal passes clockwise after each hand. Shuffle thoroughly and deal thirteen cards to each player, one at a time or in packets according to local custom. Players pick up and sort their hands before the bidding phase begins. Agree in advance on target score (five hundred is standard), nil and blind-nil allowances, bag limits, and whether a minimum bid of one is required when holding spades. Spades are always trump and outrank all other suits regardless of what is led.',
    rules: [
      {
        title: 'Bidding',
        content:
          'After the deal, each player bids the number of tricks they expect to win, from zero (nil) through thirteen. Bids proceed clockwise, typically starting with the player to the dealer\'s left. Each player makes one bid, which may not be changed once the next player has spoken. Partners\' bids are combined to form the team contract—the total number of tricks the partnership must capture to score positively. A team that bids four and three needs seven tricks combined. There is no requirement that individual bids reflect actual holdings, but intentional underbidding to accumulate bags is considered poor sportsmanship at most tables.',
      },
      {
        title: 'Nil and Blind Nil',
        content:
          'A nil bid declares that the player will capture zero tricks during the hand. If successful, the partnership receives a bonus—commonly fifty or one hundred points—while the partner\'s tricks still count toward the team contract. If the nil bidder takes even one trick, the team receives a penalty of equal magnitude to the bonus. Blind nil, when allowed, is declared before looking at the hand and carries a larger bonus and penalty. The nil bidder\'s partner usually bids normally and tries to win enough tricks for the contract while covering cards that might force the nil bidder to take a trick.',
      },
      {
        title: 'Opening Lead',
        content:
          'The player to the dealer\'s left leads the first card of the hand. Spades may not be led on the first trick unless the leader holds only spades. On later tricks, the winner of the previous trick leads any card from their hand. Leading spades before the suit has been broken is legal only when the leader has no cards of any other suit. The opening lead sets the led suit for the trick, and all other players must follow that suit if able.',
      },
      {
        title: 'Following Suit and Playing Spades',
        content:
          'Each player must follow the led suit if they hold a card of that suit. If void in the led suit, a player may play any card, including a spade. Spades are trump and beat all cards of the led suit. When more than one spade is played on a trick, the highest spade wins. If no spades are played, the highest card of the led suit wins. Players may trump at any time they are void in the led suit, even on the first trick, though spades themselves may not be led until broken.',
      },
      {
        title: 'Breaking Spades',
        content:
          'Spades are unbroken until a player who cannot follow the led suit plays a spade on a trick. After that moment, spades are broken and any player may lead a spade on a subsequent trick. Leading a spade when holding other suits is legal only after the break. Some tables treat the first spade played as broken even if it does not win the trick; others require that a spade actually captures a trick. Clarify this detail before play if your group has not established a convention.',
      },
      {
        title: 'Trick-Taking Order',
        content:
          'Tricks are played clockwise, one card per player per trick. Each trick produces exactly four cards, and the winner leads the next trick. There are thirteen tricks in every hand. Players may not inspect previous tricks except the most recently completed one, depending on house rules. Communication between partners during play is restricted to the bid and to legal card play—signals, comments about remaining cards, or intentional hesitation are forbidden in tournament-style Spades.',
      },
      {
        title: 'Scoring Contracts',
        content:
          'If a partnership meets or exceeds its combined bid, it scores ten points for each bid trick plus one point for each overtrick, called a bag. If the partnership falls short of its bid, it loses ten points for each bid trick regardless of how many tricks were actually won. Nil bonuses and penalties are applied separately after the team contract is resolved. For example, a team that bid seven and took eight scores seventy-one points plus any nil adjustment, and also accumulates one bag.',
      },
      {
        title: 'Bags and Bag Penalties',
        content:
          'Each overtrick beyond the team bid counts as one bag and scores one point in addition to the contract score. Bags accumulate across hands on a team\'s bag counter. When a team reaches ten bags— or another agreed threshold—they typically lose one hundred points and their bag count resets to zero. Some tables cap bags at nine without automatic penalty, while others subtract ten points per bag. Bag management is a core strategic element: teams that consistently exceed their bids by wide margins can lose despite winning individual hands.',
      },
      {
        title: 'Failed Nil and Partnership Scoring',
        content:
          'When a nil bidder takes a trick, the nil penalty is applied in addition to any contract failure on the same hand. A partner who bid three and took five still contributes overtricks to the team bag count even while the nil side of the score is penalized. Both partnerships score independently each hand. Scores may go negative. There is no limit to how far a team can fall behind except the practical limit of reaching the target score before the opponents.',
      },
      {
        title: 'Winning the Match',
        content:
          'Play continues until one partnership reaches or exceeds the agreed target score, usually five hundred points. If both teams cross five hundred on the same hand, the higher score wins; if still tied, additional hands are played until the tie breaks. Some groups require a winning margin of two points or more. Match play often uses a fresh shuffle and deal for each hand with no carryover of cards between hands, only cumulative score and bag count.',
      },
    ],
    winCondition:
      'First partnership to reach 500 points wins. If both reach 500 on the same hand, highest score wins.',
    tags: ['trick-taking', 'partnership', '4-player', 'bidding', 'classic'],
    playerMin: 4,
    playerMax: 4,
    deckType: 'standard52',
    sourceUrl: 'https://www.pagat.com/boston/spades.html',
    sourceName: 'Pagat.com',
    difficulty: 'intermediate',
    estimatedMinutes: 45,
  },
  {
    slug: 'gin-rummy',
    name: 'Gin Rummy',
    summary:
      'Two-player rummy where players draw and discard to form melds (sets and runs). Knock or go gin when deadwood is low.',
    setup:
      'Gin Rummy uses a standard 52-card deck shuffled and dealt by alternating players each hand. The non-dealer receives the first card; each player is dealt ten cards, one at a time or in batches of two or five according to local custom. The remaining thirty-two cards are placed face down as the stock pile. The dealer turns the top card of the stock face up beside it to begin the discard pile; if the upcard is a spade, some tables treat the first knock limit differently in Oklahoma variants, but standard Gin ignores this. Players sort their hands and the non-dealer plays first. Agree before the first hand on target score (one hundred is standard), whether ace is low only or also high in runs, and the exact gin and undercut bonus values.',
    rules: [
      {
        title: 'Turn Structure',
        content:
          'On each turn, a player first draws one card—either the top card of the stock (face down) or the top card of the discard pile (face up)—and then completes the turn by discarding one card face up onto the discard pile. A player who draws from the discard pile may not discard the same card on that turn. The discard pile shows only the top card clearly; older discards are stacked beneath and may not be inspected. Turns alternate until one player knocks, goes gin, or the stock is reduced to two cards.',
      },
      {
        title: 'Valid Melds',
        content:
          'Melds are combinations of three or more cards placed face up at the end of a hand. A set consists of three or four cards of the same rank—three kings, for example. A run consists of three or more consecutive cards of the same suit, such as the five, six, and seven of hearts. Aces are low in standard Gin Rummy: ace-two-three is valid, but queen-king-ace is not unless your table explicitly allows ace-high runs. The same card cannot belong to two melds simultaneously.',
      },
      {
        title: 'Deadwood',
        content:
          'Any cards in a player\'s hand that are not part of a meld at the end of the hand are deadwood. Each deadwood card scores its pip value: face cards count ten, aces count one, and numbered cards count their face value. During play, players mentally track deadwood totals to decide when knocking is advantageous. Laying off—adding cards to an opponent\'s melds—is not permitted until after an opponent knocks, and never after a gin declaration.',
      },
      {
        title: 'Knocking',
        content:
          'A player whose deadwood totals ten points or fewer may knock instead of discarding on their turn. Knocking ends the play phase: the knocker reveals their entire hand, arranged into melds with deadwood separated. The opponent then reveals their hand and may lay off any cards that fit the knocker\'s melds—adding the four of diamonds to a knocker\'s five-six-seven of diamonds run, for instance. After layoffs, both players count remaining deadwood.',
      },
      {
        title: 'Going Gin',
        content:
          'If a player can arrange all ten cards into melds with zero deadwood, they may declare gin on their turn instead of knocking or discarding. Gin ends the hand immediately without a discard. The opponent may not lay off any cards against a gin hand. Going gin earns a bonus in addition to the deadwood difference. Some players announce gin verbally; others simply spread a fully melded hand face up on the table.',
      },
      {
        title: 'Scoring a Hand',
        content:
          'After a knock, the knocker scores the difference between the two deadwood totals. If the knocker had six points of deadwood and the opponent has nineteen after layoffs, the knocker scores thirteen points. If the opponent\'s deadwood is equal to or less than the knocker\'s, the opponent has undercut the knocker and scores the difference plus a bonus—commonly ten or twenty-five points. A gin hand scores the full value of the opponent\'s deadwood plus a gin bonus, usually twenty-five points.',
      },
      {
        title: 'The Stock and Wall',
        content:
          'If the stock is reduced to two cards and neither player has knocked or gone gin, the hand ends in a draw with no score. Some tables call this the wall or stalemate. Neither player receives points, and the same dealer redeals. When drawing from the stock, if the final face-down card is drawn without a knock, the hand also ends in a draw. The discard pile may grow quite large during a hand; only the top card is ever available for drawing.',
      },
      {
        title: 'Game Bonus and Match Play',
        content:
          'When one player\'s cumulative score reaches or exceeds the agreed target—typically one hundred points—that player wins the game. Some tables award a game bonus of one hundred points to the overall winner of a multi-game match. Others play single games to one hundred with no bonus. Match scoring is recorded on paper or a score sheet with running totals after each hand. There is no limit to how many hands a game may take if undercuts and low deadwood keep scores close.',
      },
      {
        title: 'Etiquette and Legal Play',
        content:
          'Players may not expose cards from their hand except when knocking or going gin. Taking excessive time to draw or discard is discouraged in timed settings. If a player draws two cards by mistake or discards without drawing, the error is corrected by agreement—usually by restoring the prior game state if remembered, or by declaring a misdeal if the mistake is discovered late. Deliberately counting cards visible in the discard pile is legal; memorizing discards is part of skilled play.',
      },
      {
        title: 'Undercut and Big Gin',
        content:
          'An undercut occurs when the defending player\'s deadwood after layoffs is less than or equal to the knocker\'s deadwood. The defender scores the difference plus the undercut bonus. Big gin, a variant term, refers to gin achieved without drawing on the final turn—going gin on the deal itself is impossible, but gin on the eleventh turn before the opponent ever knocks is sometimes celebrated as big gin with an extra bonus in house rules. Confirm whether your table recognizes big gin before play.',
      },
    ],
    winCondition: 'First player to reach 100 points (or agreed target) wins the game.',
    tags: ['rummy', '2-player', 'melding', 'classic'],
    playerMin: 2,
    playerMax: 2,
    deckType: 'standard52',
    variations: [
      {
        id: 'oklahoma-gin',
        name: 'Oklahoma Gin',
        summary: 'The first upcard sets the maximum deadwood allowed to knock.',
        setup:
          'Oklahoma Gin uses the same deal as standard Gin Rummy: ten cards each, stock and discard pile. The critical difference is that the rank of the first turned-up card—the upcard that starts the discard pile—sets the maximum deadwood a player may have when knocking. Before the non-dealer\'s first turn, note the upcard rank and announce the knock limit for the hand. If the upcard is a spade, some tables double the knock limit; confirm whether your group uses spade doubling before the first hand.',
        rules: [
          {
            title: 'Knock Limit from the Upcard',
            content:
              'The first face-up card on the discard pile determines how many deadwood points a player may have when knocking. Number cards set the limit equal to their pip value: a seven allows knocking with seven or fewer deadwood points. Face cards and tens set a limit of ten. An ace sets the limit to one, making knocking extremely difficult and gin the primary path to score. The limit applies to both players equally and may change every hand based on the new upcard.',
          },
          {
            title: 'Spade Doubling',
            content:
              'In the most common Oklahoma variant, if the upcard is a spade, the knock limit is doubled. An upcard of the seven of spades would allow knocking with fourteen deadwood; a spade face card or ten would allow knocking with twenty. Not all tables use spade doubling—some treat a spade upcard like any other suit. Establish this rule before play because it dramatically affects hand strategy and how aggressively players draw from the discard pile.',
          },
          {
            title: 'Drawing the Upcard',
            content:
              'The non-dealer may draw the upcard on their first turn if they want it, just as in standard Gin. If taken, they discard a different card to complete the turn. If neither player draws the upcard before it is buried under later discards, the knock limit remains fixed from that card regardless of subsequent discards. Some Oklahoma variants prohibit knocking on the first turn even if the upcard is a high rank.',
          },
          {
            title: 'Gin and Knock Scoring',
            content:
              'Scoring follows standard Gin Rummy: knockers score deadwood difference, gins score opponent deadwood plus a bonus, and undercuts award the difference plus a bonus to the defender. The gin bonus in Oklahoma is typically twenty-five points. Because low knock limits on ace upcards make gin more common, ace-up hands often produce larger swings. Match play still goes to one hundred points unless otherwise agreed.',
          },
          {
            title: 'Strategic Implications',
            content:
              'Oklahoma Gin rewards careful attention to the upcard before the first draw. High upcards encourage early knocking; ace upcards push both players toward building full gin hands. Spade doubling on a mid-rank upcard creates unusually permissive knocking thresholds that can speed up hands. Defensive discards matter more because leaving cards that help an opponent knock at a high limit can be costly.',
          },
          {
            title: 'Tie Hands and the Wall',
            content:
              'As in standard Gin, if the stock dwindles to two cards without a knock or gin, the hand is a tie and neither player scores. The same dealer typically redeals. Some Oklahoma tables require that the upcard for the new hand be turned before players pick up their dealt cards, so the knock limit is known from the start of each deal.',
          },
        ],
        winCondition: 'First to 100 points wins.',
      },
      {
        id: 'hollywood-gin',
        name: 'Hollywood Gin',
        summary: 'Three simultaneous scores tracked like Hollywood-style columns.',
        setup:
          'Hollywood Gin uses standard Gin Rummy dealing and meld rules but tracks three separate game scores simultaneously, written in columns on a score sheet. Column one represents the first game to one hundred points; column two begins when column one finishes; column three begins when column two finishes. All three columns remain active once opened—a single hand\'s score may be applied to one, two, or all three columns depending on which games are in progress. Agree before starting on whether a game bonus applies when closing out a column.',
        rules: [
          {
            title: 'Three Columns Explained',
            content:
              'Picture three vertical score tracks side by side. When the session starts, only column one is open. Points from each hand are added to column one until someone reaches one hundred. At that moment, column one is won and frozen, and column two opens on the next deal. When column two is won, column three opens. After all three columns are active, a single hand\'s result is recorded in every column that has not yet been won.',
          },
          {
            title: 'Starting Each Column',
            content:
              'The winner of column one does not necessarily deal first in column two; dealing continues to alternate normally. Some tables reset both players\' scores to zero in column two; others carry a handicap based on the margin of victory in column one. Standard Hollywood rules reset each new column to zero for both players. The physical score sheet is essential—trying to track three games from memory leads to disputes.',
          },
          {
            title: 'Scoring Hands Across Columns',
            content:
              'When only column one is active, hand scores go only to column one. When columns one and two are both active, each hand\'s point total is added to both columns simultaneously. When all three columns are open, every scored hand updates all three columns at once. A knock worth fifteen points adds fifteen to each open column. This multiplication effect means late-session hands can decide multiple games at once.',
          },
          {
            title: 'Winning Individual Columns',
            content:
              'A column is won when a player reaches or exceeds one hundred points in that column during a hand that applies to it. Once won, that column is closed and receives no further updates. The other open columns continue. A player may win column one while trailing badly in column three, which keeps endgame tension high even after the first game is decided.',
          },
          {
            title: 'Match Victory',
            content:
              'The overall Hollywood Gin match is won by the player who takes two of the three columns. Winning all three is a clean sweep; winning two columns after losing the first is the most common outcome in competitive play. If each player wins one column, the third column winner decides the match. Some tables play sudden-death hands if columns split one-one with column three tied near one hundred.',
          },
          {
            title: 'Game Bonus in Hollywood',
            content:
              'Some groups award a one-hundred-point game bonus inside each column when a player reaches exactly one hundred or wins the column by a wide margin. Others omit the bonus to keep column totals closer to raw hand scores. If game bonuses are used, they apply only to the column being closed, not to still-active columns. Confirm bonus rules before the first deal.',
          },
          {
            title: 'Standard Gin Rules Apply',
            content:
              'Dealing, drawing, discarding, melding, knocking, gin, undercuts, and layoffs follow standard Gin Rummy in Hollywood scoring. Oklahoma knock limits are not used unless the table explicitly combines Hollywood columns with Oklahoma upcard rules—a rare hybrid. Each hand is played to completion before points are distributed to the appropriate columns.',
          },
        ],
        winCondition: 'Win two of the three columns (house rules vary).',
      },
    ],
    sourceUrl: 'https://www.pagat.com/rummy/gin.html',
    sourceName: 'Pagat.com',
    difficulty: 'intermediate',
    estimatedMinutes: 30,
  },
  {
    slug: 'cribbage',
    name: 'Cribbage',
    summary:
      'Classic two-player game combining pegging on a board with forming 15s, pairs, runs, and flushes from a six-card hand.',
    setup:
      'Cribbage uses a standard 52-card deck and a cribbage board with pegs for scoring to 121 points. Two players sit facing each other; determine the first dealer by cutting for low card. Deal six cards face down to each player, one at a time alternately. Each player then discards exactly two cards face down to form the crib, which belongs to the dealer and will score as a third hand at the show. The non-dealer cuts the remaining deck; the dealer turns up the cut card as the starter (or turn-up). If the starter is a jack, the dealer pegs two points for "his heels" before pegging begins. With three or four players, five cards are dealt instead of six, one card is discarded to the crib by each player, and partnerships may be used.',
    rules: [
      {
        title: 'The Crib',
        content:
          'The crib is a separate four-card hand assembled from two discards by each player. It scores for the dealer at the show, combined with the starter card. Non-dealers try to discard cards that work poorly together—often splitting pairs and avoiding fifteens—while dealers benefit from complementary discards. After the show, the crib is shuffled back into the deck for the next deal. In three- and four-handed games, each player contributes one card and the dealer\'s crib still receives four cards total.',
      },
      {
        title: 'The Starter Card',
        content:
          'The starter is a single card cut from the deck and placed face up after the crib discards. It counts as a fifth card for every hand and the crib during the show, but it is not used during pegging. If the starter is a jack, the dealer immediately pegs two points. If a player holds the jack of the same suit as the starter, that jack scores one point for "nobs" (or "his nobs") during the show—not during pegging.',
      },
      {
        title: 'Pegging Order and Play',
        content:
          'During pegging, non-dealer plays first, laying one card face up and announcing its pip value. Players alternate, keeping a running total from zero to a maximum of thirty-one. Face cards count ten; aces count one. The running total resets to zero when no one can play without exceeding thirty-one, or when the total reaches exactly thirty-one. Players say "Go" when they cannot play; the opponent pegs one point for the go and may continue playing if able.',
      },
      {
        title: 'Scoring During Pegging',
        content:
          'Points pegged during play include: fifteens (two points when the running total hits fifteen), pairs (two for a pair, six for three of a kind, twelve for four of a kind), runs of three or more cards in sequence regardless of suit order played (one point per card), and exactly thirty-one (two points). The final card played before a reset scores one point for "last" if the total is under thirty-one. These combinations are scored immediately as they occur.',
      },
      {
        title: 'The Show: Non-Dealer First',
        content:
          'After pegging, players score their hands in order: non-dealer first, then dealer, then the crib. Each hand uses its four held cards plus the starter as a fifth. Count all combinations simultaneously—a single card may contribute to a fifteen and a pair in the same scoring. Announce fifteens (two each), pairs (two per pair), runs (one per card in the run), flushes, and nobs. Peg the total before the next hand is scored.',
      },
      {
        title: 'Flushes and Nobs',
        content:
          'A flush of four cards of the same suit in a hand scores four points; if the starter matches the suit, the flush scores five. The crib can only score a flush if all four crib cards plus the starter share a suit—five points total. Nobs scores one point when the jack in a player\'s hand matches the suit of the starter. Flushes do not count during pegging, only in the show.',
      },
      {
        title: 'Runs in the Show',
        content:
          'Runs of three or more consecutive ranks score one point per card, using any suit mixture in the hand plus starter. A double run—such as three-three-four-five—scores both the three-card run and the pair of threes for eight points total. Triple runs and quadruple runs extend this principle. Identify every distinct run and pair combination; experienced players often count runs before fifteens to avoid missing overlapping scores.',
      },
      {
        title: 'Muggins',
        content:
          'Muggins is an optional rule allowing an opponent to peg any points you fail to claim in your own hand, crib, or pegging sequence before the next player scores. If the dealer undercounts a hand by three points and the non-dealer catches the error before pegging moves on, the non-dealer pegs those three points. Muggins rewards accurate counting and attentive play. Agree before the game whether muggins is in effect.',
      },
      {
        title: 'Winning and Skunks',
        content:
          'The first player to peg exactly 121 points or more wins the game. Since pegging is incremental, it is possible to win mid-hand during pegging or the show. A skunk occurs when the loser has not reached 91 points when the winner crosses 121; some tables count skunks in match play. A double skunk—loser below 61—is a greater humiliation in league scoring. Match formats may require winning two out of three games to one hundred twenty-one.',
      },
      {
        title: 'Three- and Four-Player Cribbage',
        content:
          'With three players, deal five cards each and one card face down to a dummy crib hand that rotates to the next dealer each deal, or use individual cribs per variant rules. With four players in partnerships, partners sit across and combine pegging scores on one board track per team. Five-card deals and single-card crib discards are standard in both cases. Pegging order proceeds clockwise; partnership communication during discards is limited to legal card play.',
      },
    ],
    winCondition: 'First player to peg 121 points wins. Points are scored during pegging and the show.',
    tags: ['2-player', 'scoring', 'classic', 'pegging'],
    playerMin: 2,
    playerMax: 4,
    deckType: 'standard52',
    sourceUrl: 'https://www.pagat.com/adders/cribbage.html',
    sourceName: 'Pagat.com',
    difficulty: 'intermediate',
    estimatedMinutes: 30,
  },
  {
    slug: 'crazy-eights',
    name: 'Crazy Eights',
    summary:
      'Simple shedding game where players match rank or suit. Eights are wild and can be played anytime.',
    setup:
      'Crazy Eights uses a standard 52-card deck without jokers unless your table adds them as extra wild cards. Shuffle and deal five cards to each player when three or more are at the table; with two players, deal seven cards each for a longer hand. Place the remaining cards face down as the stock pile in the center. Turn the top card of the stock face up beside it to start the discard pile. If the starter is an eight, bury it in the stock and turn another card. Agree before play on draw rules (draw one versus draw until playable), whether eights force the next player to skip after naming a suit, and any special card meanings for twos, queens, kings, or aces.',
    rules: [
      {
        title: 'Basic Play',
        content:
          'Players take turns in clockwise order. On your turn, play one card face up onto the discard pile if it matches the top card by rank or by suit. A seven of hearts may be played on a seven of spades or on any heart. If you have no legal play, draw from the stock according to your table\'s rule—either one card per turn or cards until you can play or the stock is exhausted. When the stock is empty and you cannot play, pass your turn.',
      },
      {
        title: 'Wild Eights',
        content:
          'An eight may be played on any card regardless of rank or suit, even when you hold other playable cards—playing an eight is always legal on your turn. When you play an eight, name a suit that the next player must match; the eight itself does not change the active suit for subsequent plays. The next player must match the named suit or play another eight and name a new suit. Some tables require that you must play an eight if it is your only legal move.',
      },
      {
        title: 'Drawing from the Stock',
        content:
          'In the most common version, a player who cannot play draws one card from the stock and their turn ends whether or not the drawn card is playable. In draw-until-playable variants, keep drawing until you receive a playable card or the stock runs out. Drawn cards are added to the hand, not played immediately unless the variant allows playing a drawn card on the same turn. When the stock is depleted, play continues with passing only.',
      },
      {
        title: 'Special Card: Twos',
        content:
          'Many house rules assign a draw penalty to twos: when a two is played, the next player must draw two cards and forfeit their turn, unless they play another two, which passes a cumulative draw-four to the following player. This stacking rule mirrors Uno-style penalties and is not part of the original Crazy Eights but appears frequently in casual play. Confirm whether twos stack and whether playing a two after drawing is allowed.',
      },
      {
        title: 'Special Card: Queens and Kings',
        content:
          'Queens as skip cards cause the next player in rotation to lose their turn entirely. Kings as reverse cards change direction of play from clockwise to counterclockwise or back; with two players, a reverse effectively acts as a skip. These special meanings apply only when agreed before the game. When multiple special cards appear in one house-rules set, their effects resolve in the order played—usually skip before reverse, or as the table decides.',
      },
      {
        title: 'Special Card: Aces',
        content:
          'Some groups treat aces as wild suit changers similar to eights but without the free-play-on-anything privilege—an ace might change the active suit without requiring the next player to match a specific rank. Other tables use aces as skip or draw-one cards. Because ace rules vary widely, write them down before the first deal when teaching new players. Standard Pagat Crazy Eights does not assign special ace behavior.',
      },
      {
        title: 'Winning a Round',
        content:
          'The first player to empty their hand by playing or discarding their final card wins the round. If the stock is exhausted and all players pass in succession, the hand may end with the player holding the fewest cards declared winner, or play continues until someone sheds all cards—establish this before starting. Winners often score points based on cards remaining in opponents\' hands in multi-round games.',
      },
      {
        title: 'Multi-Round Scoring',
        content:
          'In scored Crazy Eights, each face card remaining in a loser\'s hand counts ten points, eights count fifty, and pip cards count their face value. The first player to reach a target score—often fifty or one hundred—loses the match and the lowest score wins. Alternatively, play single rounds with no scoring for a quick filler game. Track scores on paper between rounds while shuffling and redealing.',
      },
      {
        title: 'Two-Player Considerations',
        content:
          'With two players and seven-card hands, special cards that skip or reverse have heightened impact because the same opponent is affected every time. Draw penalties accumulate quickly in two-player stacking variants. Some two-player tables reduce the hand size to five for faster rounds. The fundamental match-and-shed logic remains unchanged regardless of player count.',
      },
      {
        title: 'Penalties and Fouls',
        content:
          'Playing an illegal card—one that matches neither rank nor suit and is not a wild eight—requires taking back the card and drawing a penalty card or losing a turn, by agreement. Failing to name a suit when playing an eight usually means the next player may demand a replay or choose the suit themselves. Honest play moves quickly; Crazy Eights is often played casually, but penalty consistency prevents arguments in longer sessions.',
      },
    ],
    winCondition: 'First player to empty their hand wins the round. Play multiple rounds or single hand.',
    tags: ['shedding', 'family', 'beginner', '2-7-players'],
    playerMin: 2,
    playerMax: 7,
    deckType: 'standard52',
    sourceUrl: 'https://www.pagat.com/eights/crazy8s.html',
    sourceName: 'Pagat.com',
    difficulty: 'beginner',
    estimatedMinutes: 15,
  },
  {
    slug: 'egyptian-ratscrew',
    name: 'Egyptian Ratscrew',
    summary:
      'Fast-paced slapping game where players take turns playing cards and race to slap valid combinations like doubles or sandwiches.',
    setup:
      'Egyptian Ratscrew—also called Egyptian War, Slaps, or Snap—uses a standard 52-card deck shuffled and dealt evenly face down to all players. No one may look at their cards before play begins. Two to six players work well; with more than six, split into two games or add a second deck. Players arrange their cards in a face-down stack in front of them without reordering after the deal. Choose a dealer or simply deal clockwise from shuffled cards until the deck is exhausted; leftover cards by one or two are acceptable or redealt by agreement. Before the first flip, agree on which slap patterns are legal—doubles, sandwiches, marriage, and top-bottom matching are the most common—and whether false slaps carry a penalty.',
    rules: [
      {
        title: 'Turn Order and Flipping',
        content:
          'Play proceeds clockwise. On your turn, flip the top card of your stack face up onto the central pile without looking at it beforehand. Announce the rank if your table requires verbal calls—"jack," "four," and so on. After placing the card, your turn ends and the next player flips. The central pile grows as a single face-up stack; players do not pick up cards from the pile except by winning a slap.',
      },
      {
        title: 'Slap Targets: Doubles',
        content:
          'The most universal slap pattern is a double: two consecutive cards of the same rank on top of the central pile. When a player flips a card that matches the rank of the card immediately below it, anyone may slap the pile. The first hand to contact the pile wins all cards in it, adds them face down to the bottom of their stack, and resumes play by flipping next. Cards are never shuffled when added to the bottom.',
      },
      {
        title: 'Slap Targets: Sandwiches',
        content:
          'A sandwich occurs when two cards of the same rank appear with exactly one different card between them on the pile—queen, five, queen, for example. When the second matching card is flipped, the sandwich is complete and players may slap. Some tables allow only consecutive doubles and not sandwiches; confirm before play. Sandwiches require remembering one card back, which adds memory pressure in fast games.',
      },
      {
        title: 'Slap Targets: Marriage and Special Patterns',
        content:
          'Marriage slaps trigger when a queen and king appear consecutively in either order on the pile. Other house patterns include top-bottom match (first and last card in the pile share a rank), tens (two tens in a row), and four-of-a-kind slaps when four same-rank cards appear in sequence across turns. Jacks, queens, and kings sometimes have dedicated rules—such as a jack requiring the next player to flip one card silently. Write down custom patterns when teaching the game.',
      },
      {
        title: 'Winning a Slap',
        content:
          'When multiple players slap simultaneously, the hand closest to the bottom of the pile—often judged as the hand that touched first—wins the cards. Some groups use a referee to decide contested slaps. The winner takes the entire central pile, shuffles it to the bottom of their personal stack without looking at individual cards, and immediately flips the next card to continue play. Winning a large pile can swing the game dramatically.',
      },
      {
        title: 'False Slap Penalties',
        content:
          'Slapping when no valid pattern is present is a false slap. The standard penalty is placing one or two cards from the top of your stack face up on the bottom of the central pile, or discarding one card to the bottom of your own stack, depending on house rules. Repeated false slaps in some groups eliminate the player immediately. Penalties keep players from slapping randomly on every flip.',
      },
      {
        title: 'Running Out of Cards',
        content:
          'A player who exhausts their stack is not immediately eliminated if they can still slap. They remain in the game with no cards to flip on their turn—when their turn arrives, they skip flipping but may still participate in slaps. If they win a slap, they regain cards and resume flipping. A player with no cards who cannot win a slap before others finish is out. Some tables eliminate players the moment their stack empties.',
      },
      {
        title: 'Face Cards and Challenge Rounds',
        content:
          'A popular variant assigns special behavior to face cards: when a jack, queen, or king is flipped, the next player must flip one, two, or three additional cards respectively without slapping in between, increasing the chance of a double on the buried cards. If those extra flips produce no pattern, play continues normally. Ace slaps or ten slaps may also trigger multi-flip penalties. These rules vary widely by region.',
      },
      {
        title: 'Burning and Stale Piles',
        content:
          'If the central pile grows very large with no slaps, some tables burn the bottom card—remove it from play—to prevent infinite stalemates. Others cap the pile and force a showdown flip where the next double wins everything automatically. Burning is optional and should be agreed in advance. In tournament play, stale piles are rare because doubles occur frequently with many cards exposed.',
      },
      {
        title: 'Winning the Game',
        content:
          'The last player holding cards—or the first to collect the entire deck, depending on your table\'s elimination rule—wins. Games are short and often played best-of-three or five for a session. Because luck and reflexes dominate, Egyptian Ratscrew is popular as a warm-up or party game rather than a serious competitive format. Shuffle thoroughly between games to redistribute face cards evenly.',
      },
    ],
    winCondition: 'Collect all cards — last player with cards wins.',
    tags: ['speed', 'party', 'slap', '2-6-players'],
    playerMin: 2,
    playerMax: 6,
    deckType: 'standard52',
    sourceUrl: 'https://www.pagat.com/war/egyptian.html',
    sourceName: 'Pagat.com',
    difficulty: 'beginner',
    estimatedMinutes: 10,
  },
  {
    slug: 'speed',
    name: 'Speed',
    summary:
      'Two-player reflex game where both players simultaneously play ascending or descending cards onto shared center piles.',
    setup:
      'Speed uses a standard 52-card deck divided into two equal 26-card halves, one half for each player. Each player shuffles their half and deals themselves a five-card hand face up or face down per preference—most tables deal the hand face down and pick up to five after setup. The remaining twenty-one cards in each half form a face-down stock pile on that player\'s side. Between both players, leave space for two shared center piles where cards will be played during the game. Neither center pile has a starting card; play begins when both players simultaneously flip one card from their stock onto each center pile to seed them. Agree whether ace is high, low, or wraps both directions before the first deal.',
    rules: [
      {
        title: 'Simultaneous Play',
        content:
          'Both players act at the same time with no strict turn order. You may play cards from your hand onto either center pile whenever a legal play exists. A legal play is one rank higher or one rank lower than the top card of the center pile—suits are irrelevant. If one pile shows a seven, you may play a six or an eight on it. Play as many cards as you can as fast as you can; there is no limit to cards played per action window.',
      },
      {
        title: 'Ace High and Low',
        content:
          'Aces wrap around both ends of the rank sequence in standard Speed: an ace may be played on a two or on a king, and both a two and a king may be played on an ace. This wrap makes every rank potentially playable at all times and prevents deadlocks on single ranks. Some tables treat ace as low only (above two, below three); confirm before play because it changes endgame tactics.',
      },
      {
        title: 'Replenishing Your Hand',
        content:
          'Whenever you have fewer than five cards in hand and cards remain in your stock, draw from your stock until your hand returns to five cards or your stock is empty. Replenishment happens at any time, not only at the end of a play sequence. Both players may replenish simultaneously. Keep your hand hidden from your opponent if playing competitively, though Speed is often played with visible hands for learning.',
      },
      {
        title: 'The Speed Call',
        content:
          'When neither player can play on either center pile, both players shout "Speed!" and simultaneously flip one new card from their stock onto each center pile, covering the old top cards. Play resumes immediately. If flips still produce no legal moves, repeat the Speed call. The flip is not optional when stuck—without fresh center cards, the game cannot progress.',
      },
      {
        title: 'Winning a Deal',
        content:
          'The first player to play all cards from both hand and stock wins the deal. The opponent may have cards remaining; those count as losses in match scoring. Some tables require that you win by playing your last card legally onto a center pile, not by merely exhausting cards during a Speed flip. After a deal, shuffle all cards and redeal for the next round.',
      },
      {
        title: 'Fouls and contested play',
        content:
          'Playing a card that is neither one higher nor one lower than the pile top is a foul; the card is returned and the opponent may gain a brief pause advantage. Grabbing a pile while the opponent is mid-play is resolved by whoever had a legal card in motion first—Speed etiquette favors calling fouls immediately. Deliberately blocking an opponent\'s view is poor form but not illegal in casual play.',
      },
      {
        title: 'Spit: Related Layout',
        content:
          'Spit is a closely related game using a different layout: each player builds five tableau piles (spit piles) with one to five cards and plays from the exposed ends onto shared center piles using the same one-higher-one-lower rule. Spit uses fifteen-card reserve stacks rather than twenty-one. The Speed call in Spit replaces blocked center piles with fresh flips from the reserves. Many players learn Speed first and graduate to Spit for added complexity.',
      },
      {
        title: 'Strategy and Card Counting',
        content:
          'Experienced players track which ranks have been heavily played to anticipate future Speed calls. Holding multiple cards that can bridge a gap—keeping both a five and a seven when a six is showing on a pile—creates flexibility. Playing from hand before replenishing can starve your opponent of useful flips if your stock tops are poor. Speed rewards pattern recognition under time pressure more than deep calculation.',
      },
      {
        title: 'Match Formats',
        content:
          'Casual Speed is often single-deal; competitive sessions play to a best-of-five or seven deals. Some award the win only if you clear hand and stock while the opponent still holds five or more cards—a "skunk" deal. Because deals last under two minutes, Speed works well as a filler between longer games or as a warm-up for reflex-heavy party games.',
      },
    ],
    winCondition: 'First player to play all cards from hand and stock wins.',
    tags: ['speed', '2-player', 'reflex'],
    playerMin: 2,
    playerMax: 2,
    deckType: 'standard52',
    sourceUrl: 'https://www.pagat.com/patience/speed.html',
    sourceName: 'Pagat.com',
    difficulty: 'beginner',
    estimatedMinutes: 5,
  },
  {
    slug: 'klondike',
    name: 'Klondike (Solitaire)',
    summary:
      'The classic patience game: build four foundations from ace to king while maneuvering tableau columns in alternating colors.',
    setup:
      'Klondike uses a single standard 52-card deck shuffled thoroughly. Deal seven tableau piles from left to right: the first pile receives one card face up, the second receives two cards with one face up, continuing until the seventh pile has seven cards with its top face up and six face down beneath. The remaining twenty-four cards form the stock pile, placed face down above or beside the tableau. Leave room above the tableau for four foundation piles, one per suit, starting empty. Choose draw-one or draw-three from the stock before beginning; draw-three is traditional in many computer versions but draw-one is easier for beginners. All cards begin face down except the dealt face-up tableau tops.',
    rules: [
      {
        title: 'Tableau Building',
        content:
          'The seven tableau columns are built downward in alternating colors—red on black and black on red—with ranks descending consecutively. A red nine may be placed on a black ten. Only a king may fill an empty column space. When a face-down card is exposed by moving cards away, flip it face up immediately; that card becomes available for play. Single cards or properly built sequences may move together between columns.',
      },
      {
        title: 'Moving Sequences',
        content:
          'A sequence of face-up cards in valid alternating-color descending order may be moved as a unit onto another column if the destination top card is one rank higher and opposite color. You may not move a partial sequence that breaks the alternating pattern. Empty columns accept only kings, either alone or leading a valid sequence. There is no limit to sequence length as long as the build rules hold throughout.',
      },
      {
        title: 'Foundation Piles',
        content:
          'Four foundation piles sit above the tableau, one per suit. Each foundation begins with an ace and builds upward in suit to king: ace of hearts, two of hearts, through king of hearts. Only one card may be moved to a foundation at a time in standard Klondike—no moving entire sequences directly to foundations. Any exposed ace may start its foundation; any next card in suit may be added when it becomes available.',
      },
      {
        title: 'Stock and Waste: Draw One',
        content:
          'In draw-one rules, turn the top card of the stock face up onto a waste pile. The waste top is always playable to tableau or foundations. When the stock empties, pick up the waste pile, turn it face down without shuffling, and reuse it as stock. Unlimited passes through the stock are allowed in the most forgiving rules; some variants limit recycling to once or three times total.',
      },
      {
        title: 'Stock and Waste: Draw Three',
        content:
          'In draw-three rules, turn three cards from stock to waste at once, exposing only the top third as playable. When stock runs out, combine waste with stock for another pass. Because bottom waste cards are buried, draw-three is significantly harder and fewer deals are winnable. Many digital implementations deal draw-three by default; switching to draw-one improves win rate for practice.',
      },
      {
        title: 'Available Moves Priority',
        content:
          'There is no required move order—you choose among legal moves freely. Common strategy suggests moving tableau cards before drawing from stock, exposing hidden cards early, and building foundations evenly rather than completing one suit while blocking others. Moving a card from a foundation back to tableau is forbidden in standard rules. Every move should aim to expose face-down cards and create empty columns for kings.',
      },
      {
        title: 'Empty Columns and Kings',
        content:
          'Creating an empty column is valuable because only kings can occupy it, and kings can be moved with their attached sequences. Do not rush to fill an empty column with a king that blocks better builds elsewhere. Sometimes transferring a king to an empty column exposes a face-down card in its former column. Plan two or three moves ahead when a king becomes available.',
      },
      {
        title: 'Winning and Losing',
        content:
          'You win when all fifty-two cards rest on the four foundations, each complete from ace through king. You lose—or rather reach an impasse—when no legal moves remain and foundations are incomplete. Not every deal is winnable even with perfect play, especially in draw-three. Restart by reshuffling and redealing, or use the same layout to practice finding the winning sequence.',
      },
      {
        title: 'Vegas Scoring',
        content:
          'Vegas Klondike assigns dollar values: pay fifty-two to start, earn five for each card moved to foundations, and receive a bonus for completing all four suits. Draw-three Vegas often pays only for cards that reach foundations without recycling the waste more than a set number of times. Vegas scoring turns solitaire into a gambling exercise and is popular in physical casino settings and some apps.',
      },
      {
        title: 'Common Variants',
        content:
          'Double Klondike uses two decks and eight foundation piles with two complete tableau sets. Agnes Sorel allows any card, not just kings, in empty spaces. Easthaven deals differently but uses similar building rules. When learning, stick to standard Klondike with draw-one and unlimited passes until wins feel routine before increasing difficulty with draw-three or Vegas rules.',
      },
    ],
    winCondition: 'Move all 52 cards to the four foundations.',
    tags: ['solitaire', '1-player', 'patience', 'classic'],
    playerMin: 1,
    playerMax: 1,
    deckType: 'standard52',
    sourceUrl: 'https://www.pagat.com/patience/klondike.html',
    sourceName: 'Pagat.com',
    difficulty: 'beginner',
    estimatedMinutes: 10,
  },
  {
    slug: 'spider-solitaire',
    name: 'Spider Solitaire',
    summary:
      'Build descending sequences in suit within ten tableau columns. Complete king-to-ace runs remove from play.',
    setup:
      'Spider Solitaire requires two standard 52-card decks shuffled together for 104 cards total. Deal fifty-four cards into ten tableau columns: the first four columns receive six cards each, and the remaining six columns receive five cards each. In every column, only the top card is dealt face up; all others are face down. The remaining fifty cards form the stock, placed face down to the side. Leave space above or beside the tableau for eight foundation slots where completed sequences will be stored—foundations are not built card-by-card like Klondike but receive entire king-through-ace runs at once. Choose difficulty before dealing: one-suit Spider uses only spades (or one suit duplicated across both decks), two-suit uses two suits, and four-suit uses all four suits.',
    rules: [
      {
        title: 'Tableau Building Rules',
        content:
          'Build tableau columns downward in rank regardless of suit in the standard four-suit game—any nine may be placed on any ten. In one-suit and two-suit variants, some tables require same-suit builds only, which is easier strategically. Face-up sequences may move together if they form a valid descending run. When a face-down card is uncovered, flip it face up immediately. Empty columns may be filled with any single card or valid sequence.',
      },
      {
        title: 'Moving Sequences',
        content:
          'Move one or more face-up cards that form a consecutive descending sequence from one column to another if the destination top card is exactly one rank higher. Suit matching is not required for movement in four-suit Spider, but completed removals require same-suit runs. Long sequences are valuable because they expose buried cards and consolidate columns. You may move a sequence to an empty column freely.',
      },
      {
        title: 'Dealing from Stock',
        content:
          'When you cannot or choose not to make further moves, deal one face-up card from the stock onto the top of each of the ten columns. All ten columns must contain at least one card before dealing; empty columns must be filled before a deal if your variant requires it, or may remain empty in lenient rules. Dealing does not require that no moves exist—some players deal prematurely and hurt their position. Each deal adds ten cards and often disrupts planned sequences.',
      },
      {
        title: 'Completing and Removing Runs',
        content:
          'When a full descending sequence from king down through ace appears in a single suit within one column, remove it from the tableau and place it on the foundation area. That column may now be empty or retain cards above where the run began. Eight complete suited runs are required to win—one for each ace through king pair in two decks. Removed runs cannot be returned to play.',
      },
      {
        title: 'Empty Columns',
        content:
          'Empty columns are among Spider\'s most powerful resources. Any single card or legal sequence may move into an empty slot. Creating empties by building long runs and clearing kings early opens maneuvering room. Avoid dealing from stock while holding an empty column you could use, unless no productive moves remain. Expert play often revolves around timing empty-column creation.',
      },
      {
        title: 'One-Suit Spider',
        content:
          'One-suit Spider uses both decks but treats all cards as the same suit for building and removal purposes—typically all spades. Runs still remove at king-through-ace, but color and suit mismatches within columns do not matter. Win rates are high and the game suits beginners learning Spider mechanics before adding suit complexity. Dealing and column counts remain identical to standard Spider.',
      },
      {
        title: 'Two-Suit Spider',
        content:
          'Two-suit Spider divides the decks into two suits—commonly spades and hearts—each duplicated across both decks. Building still allows any card on any higher rank, but completed removals require king-through-ace in a single suit. Mixed-suit sequences on the tableau block removal until split by careful moves. Two-suit sits between one-suit and four-suit in difficulty and is a common computer default.',
      },
      {
        title: 'Four-Suit Spider',
        content:
          'Four-suit Spider uses all four suits from both decks and is the hardest standard variant. Because sequences on the tableau may mix suits freely but removals require pure suited runs, mixed builds are dead weight until dismantled. Win rate is low without careful planning and conservative stock deals. Most expert Spider players consider four-suit the canonical challenge.',
      },
      {
        title: 'Winning and Impasses',
        content:
          'You win when eight complete king-through-ace suited runs have been removed and no cards remain in tableau or stock. You lose when no legal moves remain and the stock is empty with incomplete removals. Not every deal is winnable. Undo features in digital versions allow exploring alternate move orders; physical play teaches commitment to each decision.',
      },
      {
        title: 'Strategy Overview',
        content:
          'Prioritize exposing face-down cards, building toward same-suit stacks even when mixed builds are temporarily necessary, and maintaining at least one empty column before dealing from stock. Avoid burying low cards under mismatched high sequences. Deal only when productive moves are exhausted. Spider rewards patience and structural planning more than Klondike\'s foundation-chasing speed.',
      },
    ],
    winCondition: 'Remove all eight complete suited runs (two decks).',
    tags: ['solitaire', '1-player', 'patience', '2-deck'],
    playerMin: 1,
    playerMax: 1,
    deckType: 'double52',
    sourceUrl: 'https://www.pagat.com/patience/spider.html',
    sourceName: 'Pagat.com',
    difficulty: 'intermediate',
    estimatedMinutes: 15,
  },
];
