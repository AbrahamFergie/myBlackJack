# myBlackJack
Description

Create a blackjack to be played in a web browser based on the command line version available here: https://github.com/AbrahamFergie/BlackJack

Context

This goal will teach the difference between synchronous and asynchronous applications.

Specifications

List of specifications (specs) for the completed goal. These are declarative sentences (statements) describing some quality or behavior of the final product.

Blackjack:

 [] Dealer and Player characters Dealer Logic:
 [] Dealer gives out cards in specific order
 [] Dealer gives out:
 [] one card face up to player
 [] one card face up to Dealer
 []one card face up to player
 []one card face up to Dealer
 []shuffle the deck
 []Dealer plays, hitting while 16 or under (17 or more, dealer stays)
 []If dealer hits and busts, player wins
 []Player Logic:
 []if player gets Blackjack right at the start (Natural), player wins
 []Repeat hit or stay until player chooses to stay:
 []Player chooses to hit or stay
 []if player goes over 21, player busts
 []Backend Game Logic:
 []Compare player total to dealer total, highest wins
 []If player wins, players get their bet back, doubled
 []Repeat until player chooses to stay:
 []Player chooses to hit or stay
 []If hits and bust (go over 21), automatically loses
 []New Features
 []if player gets Blackjack right at the start (Natural), player wins
 []Repeat hit or stay until player chooses to stay:
 []P[]layer chooses to hit or stay
 []if player goes over 21, player busts
 []Backend Game Logic:
 []Compare player total to dealer total, highest wins
 []If player wins, players get their bet back, doubled
 []Repeat until player chooses to stay:
 []Player chooses to hit or stay
 []If hits and bust (go over 21), automatically loses
 []New Features
 []Betting
 []Place a bet at the beginning of the hand.
 []Handle bets for additional circumstances (double down, split, etc.)
 []Multiple players
 []Hot Seat Multiplayer
 []AI Players
 []New Game Rules
 []Double Down
 []Split/Resplit
 []Insurance
