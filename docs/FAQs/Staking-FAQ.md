# Staking FAQ

##### Q: When did Staking/PoS(Proof of Stake) start?

A: Staking began on block 182700, the 1st block to be rewarded to a staker was block 182701.

The transition to Proof of Stake took place on the 20th of June at 11:49 PM (UTC).

##### Q: Does my wallet need to be opened in order to receive staking rewards?

A: Yes, your wallet needs to be opened and unlocked for staking. We recommend checking the "unlock for staking and anonymization only" box, so that your wallet will be able to stake, but transactions cannot be initiated. This lowers the chances of an attacker being able to empty your staking wallet if they gain access to it while its staking.

##### Q: Does my computer need to be on in order to stake?

A: Yes, it needs to be fully on and awake in order to be staking. Turning it off or closing your wallet will mean you are not staking, thus ineligible for rewards

##### Q: Do I need to put anything in my Bulwark.conf to enable staking?

A: No, you just need to unlock the wallet for staking only (by ticking the box right next to your password field and typing in your password.).

##### Q: How much Bulwark do I need to stake?

A: The minimum input size to stake is 100 BWK

##### Q: Whats an Input?

A: An input is a transaction in which you received coins as it is represented on the blockchain, also called a UTXO or Unspent Transaction Output. Every time you receive coins, regardless of wether or not you have received coins with that address before, a new input is created.

##### Q: How do I create an input?

A: Creating an input is as simple as sending a transaction to yourself.  
    1. Open coin control and select the coins you wish to combine by checking the box found on the left of the menu. Please note that the total amount of coins in the input must be over 100 BWK if you wish to enable this input for staking.  
    2. Paste the address you wish to send the coins to in the "Pay To" field.  
    3. Copy the amount of coins found in the "After Fee" field in to the "Amount" field under "Pay To" and "Label".  
    4. Confirm the information and send the transaction.  
    5. When the coins reach 475 confirmations, they will be eligible for staking.  

##### Q: Where can I see my Input size?

A: You can see your input size by opening coin control.

##### Q: Where can I find coin control?

A: First of all you have to activate coin control. You can do that by going to your wallet, pressing on settings (which is on the top left of your wallet) and then on options, after that you have to check "enable coin control". After these steps you will be able to see the coin control button in the "send" tab.

##### Q: How long do coins have to mature before they can be staked?

A: To be eligible for staking, coins must have 475 confirmations, which takes roughly 12 hours.

##### Q: What amount of Bulwark do I need to receive a stake reward every day?

A: Currently you need roughly 6000 Bulwark to receive a staking reward daily, according to the calculator on [The Official Bulwark Block Explorer](https://explorer.bulwarkcrypto.com) 

##### Q: What is `stakesplit` and what does it do?

A: Your `stakesplit` value, which you can find by running `getstakesplitthreshold` in your local wallets debug console, is the quantity of coins which your wallet will automatically split inputs down to. The default value is 2000, meaning that if you have an input of 4000 BWK or more it will automatically be split into two inputs of 2000 BWK when it receives a staking reward. Your wallet **MUST** be unlocked when a reward is received for this to take effect.

##### Q: How can I change the default `stakesplitthreshold`?

A: You can change it via the debug console in your local wallets debug console with the command `setstakesplitthreshold x`, where x is the value you would like your new `stakesplitthreshold` to be.Your wallet **MUST** be unlocked when a reward is received for `stakesplit` or `autocombine` to take effect.

##### Q: What about `autocombinerewards`?

A: `autocombinerewards true x` will enable a feature that will automatically combine all masternode rewards you receive in to one input within the address they are received with, up to the amount that you specify with `x`. So, if you want your minimum input size to be 1000 Bulwark, then you would want to run the command in your debug console as follows: `autocombinerewards true 1000`. Your wallet **MUST** be unlocked when a reward is received for this to take effect. Please note, if you run more than one masternode with more than one address, this will not combine the rewards between them.

##### Q: Can i use both `autocombinerewards` and `setstakesplitthreshold` together to automate my input sizes?

A: For the most part, yes. You would be able to set a range using the two of them that will keep your inputs inside of that range.
For example: `autocombinerewards true 750` and `stakesplitthreshold 1000` will combine all your inputs for a given address that are actively staking below 750 Bulwark until they are over 750 Bulwark, but will split them in to two separate inputs when the inputs reach 2000 Bulwark. Your wallet **MUST** be unlocked when a reward is received for this to take effect.

##### "What is an orphan Block?" Or, "Why do I have a gray staking/masternode reward that isn't getting confirmations?"

A: An orphan block is what happens when two parties solve a block at the same time. The network then comes to consensus about who solved the block first. That party receives the block reward as if nothing had happened, and the other party is shown that they did not receive the reward in the form of a greyed out transaction that never receives confirmations.
