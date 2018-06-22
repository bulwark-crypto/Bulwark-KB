# Staking FAQ

##### Q: When does staking begin?

A: Staking begins on block 182700, the 1st block to be rewarded to a staker will be block 182701.

This is estimated to be on the 20th of June, around 8pm (UTC+2), but this time can change dependent on development decisions or block times.

To calculate the estimated time to POS: ((182701-<current block height>)*1.5)/60=hours to POS

##### Q: Does my wallet need to be opened in order to receive staking rewards?

A: Yes, your wallet needs to be opened and unlocked for staking.

##### Q: Do I need to put anything in my Bulwark.conf to enable staking?

A: No, the wallet v1.3.0 has a "Enable Staking" button on the bottom, which you will need to press to enable staking.

##### Q: How much BWK do I need to stake?

A: The minimum denomination of BWK you can submit to stake is 1 BWK. Each BWK on top of this increases your chance to find the next block and gain the reward + fees.

##### Q: Whats the most efficient amount to stake every day?

A: There is no "most efficient amount" to stake. The reason for this, is much like for mining there isn't a "most efficient" hashrate, the more Bulwark you stake, the more rewards you will receive. Similarly, by staking very few coins (or having a lower hashrate) doesn't mean you are being inefficient, it means it will just take you longer to find blocks. In theory, staking even 1 BWK will get you a reward proportionally to your share of the total number of staked coins over time.

##### Q: How long do coins have to mature before they can be staked?

To be eligible for staking, coins must have 66 confirmations, which takes roughly 100 minutes. Also, the transaction that sent them must be older than 60 minutes.

---------------------------------------------------------------------

__**Staking Troubleshooting:**__

To make sure your wallet is staking, the 1st step is to use the following command:

`bulwark-cli getstakingstatus` 

This should hopefully look like this:

`{
    "validtime" : true,
    "haveconnections" : true,
    "walletunlocked" : true,
    "mintablecoins" : true,
    "enoughcoins" : true,
    "mnsync" : true,
    "staking status" : true
}`

But let's go through how to fix each line.

---------------------------------------------------------------------

**"Validtime"**

This should always be true, this just shows that the POS period is active for the coin.

---------------------------------------------------------

**"Haveconnections"**

This makes sure you have valid peers, if this is showing as false I'd recommend the following command:

`rm -Rf ~/.bulwark/peers.dat`

and then running:

`systemctl restart bulwarkd`

---------------------------------------------------------------------

**"Walletunlocked"**

This means your wallet isn't unlocked, just run the below:

`bulwark-cli walletpassphrase '<YOUR PASSWORD>' 99999999 true`

This will unlock your wallet for staking only for a long time period. Unlocking for staking only means your funds are safe even if a malicious entity got access to your VPS.

--------------------------------------------------------

**"Mintablecoins"**

This is asking if your transaction is old enough to be staked. It takes 60 minutes for a transaction to be able to be staked. Just wait and this should correct to true.

---------------------------------------------------------------------

**"Enoughcoins"**

This is making sure you have more than 1 BWK in the wallet. If this is appearing false there are a wide number of potential problems. It's best to come ask us in Discord or Telegram linked on our website (<https://bulwarkcrypto.com/>) if you have issues with this.

---------------------------------------------------------------------

**"Mnsync"**

This just makes sure your wallet is fully synced, if you appear to be fully synced I'd recomment typing:

`bulwark-cli mnsync reset`

and then closing the wallet with

`systemctl stop bulwarkd`

After this, wait a minute, then open it again with:

`systemctl start bulwarkd`

then wait 10 minutes more, before unlocking the wallet with the command:

`bulwark-cli walletpassphrase '<YOUR PASSWORD>' 99999999 true`

---------------------------------------------------------------------

**"Staking status"**

Staking status should be true, when staking=1 in your bulwark.conf, and when all other options are also true.

If you find yourself in a situation where this is false while all other indicators are true, type the below:

`cat ~/.bulwark/bulwark.conf`

and confirm the output from this command includes "staking=1".

If it does, follow the below steps:

`systemctl stop bulwarkd`

After this, wait a minute, then open it again with:

`systemctl start bulwarkd`

then wait 10 minutes more, before unlocking the wallet with the command:

`bulwark-cli walletpassphrase '<YOUR PASSWORD>' 99999999 true`

Then, after a few more minutes of the network accepting your stakes, you should find everything to be true when you run

`bulwark-cli getstakingstatus`

---------------------------------------------------------------------
