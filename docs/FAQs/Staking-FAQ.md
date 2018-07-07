# Staking FAQ

##### Q: When did Staking/PoS(Proof of Stake) start?

A: Staking began on block 182700, the 1st block to be rewarded to a staker was block 182701.

The transition to Proof of Stake happened on the 20th of June at 11:49 PM (UTC).

##### Q: Does my wallet need to be opened in order to receive staking rewards?

A: Yes, your wallet needs to be opened and unlocked for staking.

##### Q: Do I need to put anything in my Bulwark.conf to enable staking?

A: No, the wallet has a "Enable Staking" button on the bottom, which you will need to press to enable staking.

##### Q: How much BWK do I need to stake?

A: The minimum denomination of BWK you can submit to stake is 1 BWK. Each BWK on top of this increases your chance to find the next block and gain the reward + fees.

##### Q: Whats the most efficient amount to stake every day?

A: There is no "most efficient amount" to stake. The reason for this, is much like for mining there isn't a "most efficient" hashrate, the more Bulwark you stake, the more rewards you will receive. Similarly, by staking very few coins (or having a lower hashrate) doesn't mean you are being inefficient, it means it will just take you longer to find blocks. In theory, staking even 1 BWK will get you a reward proportionally to your share of the total number of staked coins over time.

##### Q: How long do coins have to mature before they can be staked?

A: To be eligible for staking, coins must have 67 confirmations, which takes roughly 100 minutes. Also, the transaction that sent them must be older than 60 minutes.

#### Q: What is `Stakesplit` and what does it do?

A: Your `Stakesplit` value, which you can find by running `getstakesplitthreshold` in your local wallets debug console, is the quantity limit of coins at which your wallet will automatically split them up in to two smaller inputs. The default value is 2000, meaning that if you have an input of 2000 BWK or more it will automatically be split into two inputs of 1000 BWK when it receives a staking reward.

#### Q: How can I change the default `stakesplitthreshold`?

A: You can change it via the debug console in your local wallets debug console with the command `setstakesplitthreshold x`, where x is the value you would like your new `stakesplitthreshold` to be.
