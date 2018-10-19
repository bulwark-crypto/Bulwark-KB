# Staking FAQ

##### Q: When did Staking/PoS(Proof of Stake) start?

A: Staking began on block 182700, the 1st block to be rewarded to a staker was block 182701.

The transition to Proof of Stake happened on the 20th of June at 11:49 PM (UTC).

##### Q: Does my wallet need to be opened in order to receive staking rewards?

A: Yes, your wallet needs to be opened and unlocked for staking.

##### Q: Does my computer need to be on in order to stake?

A: Yes, it needs to be fully on and awake in order to be staking. Turning it off or closing your wallet will mean you are not staking, thus ineligible for rewards

##### Q: Do I need to put anything in my Bulwark.conf to enable staking?

A: No, the wallet has a "Enable Staking" button on the bottom, which you will need to press to enable staking.

##### Q: How much Bulwark do I need to stake?

A: The minimum input size to stake is 100 BWK

##### Q: Whats an Input?

A: An input is a transaction in which you recieved coins as it is represented on the blockchain. Every time you recieve coins, regardless of wether or not you have recieved coins with that address before, a new input is created.

##### Q: How long do coins have to mature before they can be staked?

A: To be eligible for staking, coins must have 475 confirmations, which takes roughly 12 hours.

##### Q: What amount of Bulwark do I need to receive a stake reward every day?

A: Currently you need roughly 6000 Bulwark to receive a staking reward daily, according to the calculator on [The Official Bulwark Block Explorer](https://explorer.bulwarkcrypto.com) 

##### Q: What is `stakesplit` and what does it do?

A: Your `stakesplit` value, which you can find by running `getstakesplitthreshold` in your local wallets debug console, is the quantity limit of coins at which your wallet will automatically split them up in to two smaller inputs. The default value is 2000, meaning that if you have an input of 4000 BWK or more it will automatically be split into two inputs of 2000 BWK when it receives a staking reward. Your wallet **MUST** be unlocked when a reward is received for this to take effect.

##### Q: How can I change the default `stakesplitthreshold`?

A: You can change it via the debug console in your local wallets debug console with the command `setstakesplitthreshold x`, where x is the value you would like your new `stakesplitthreshold` to be.Your wallet **MUST** be unlocked when a reward is received for this to take effect.

##### Q: What about `autocombinerewards`?

A: `autocombinerewards true x` will enable a feature that will automatically combine all masternode rewards you receive in to one input, up to the amount that you specify with `x`. So, if you want your minimum input size to be 1000 Bulwark, then you would want to run the command in your debug console as follows: `autocombinerewards true 1000`. Your wallet **MUST** be unlocked when a reward is received for this to take effect.

##### Q: Can i use both `autocombinerewards` and `setstakesplitthreshold` together to automate my input sizes?

A: For the most part, yes. You would be able to set a range using the two of them that will keep your inputs inside of that range.
For example: `autocombinerewards true 750` and `stakesplitthreshold 1000` will combine all your inputs for a given address that are actively staking below 750 Bulwark until they are over 750 Bulwark, but will split them in to two separate inputs when the inputs reach 2000 Bulwark. Your wallet **MUST** be unlocked when a reward is received for this to take effect.

##### "What is an orphan Block?" Or, "Why do I have a gray staking/masternode reward that isn't getting confirmations?"

A: An orphan block is what happens when two parties solve a block at the same time. The network then comes to consensus about who solved the block first. That party recieves the block reward as if nothing had happened, and the other party is shown that they did not recieve the reward in the form of a greyed out transaction that never recieves confirmations.
