# Zerocoin FAQ


##### Q: What is the Zerocoin Protocol? 

A: The Zerocoin Protocol is a privacy protocol that can be applied to cryptocurrency, utilizing advanced cryptography to hide the transaction history of any coin that has been passed through the "Zerocoin system"

##### Q: How does it work?

A: In simple terms, the Zerocoin Protocol combines all the zBWK that has been minted from their BWK balance into set denominations and uses them to send when a spend is initiated. When you want to initiate a spend, your wallet sends a zero-knowledge proof to the blockchain that allows the zBWK to be converted back to BWK and sent to the target address all in a single step. 

##### Q: Security Levels? What are these?

A: A Security Level of 1, for example, would take all of the minted coins in the block chain before your mint was added to the block chain, and would then add any coins that were minted within the next 10 blocks as well. A Security Level of 3 would do the same thing, except add the next 30 blocks worth of mints. A Security Level of 100 will add the maximum amount of mints up to the current end of the block chain.

##### Q: What are denominations, and why can I only mint zBWK in specific amounts?

A: Specific denominations are used to decrease the time it takes to approve your mint on the blockchain. Since every mint needs to have 2 more mints come after it before it is verified, allowing people to mint any amount they like would potentiall lock coins in a perpetual state of "confirming". Utilizing specified denominations nearly eliminates the risk that minted coins will never be confirmed. The denominations used by zBWK are: 1, 5, 10, 50, 100, 500, and 1000. We made the decision to remove the 5000 denomination that PIVX utilizes to increase liquidity at the expense of large zBWK transactions requiring more spends. We feel that the benefit to users with smaller balances outweighs the potential downside to extremely large users. 

##### Q: How is this better than Obfuscation or CoinJoin?

A: To quote our blog post on our release of Zerocoin; "Firstly, the effectiveness of PrivateSend is dictated by how many people are currently taking part in the obfuscation process, therefore it can take weeks to obfuscate large balances depending on the liquidity at the time. Zerocoin massively cuts down on this time by not requiring there to be multiple people taking part in the mixing process."

Another core problem is recent research results with regards to how safe CoinJoin-based systems (such as PrivateSend) actually are. Studies have revealed that merchant cookies and cluster intersection attacks when combined can actually reveal the identity of who purchased X item online, and can even result in unidentified people linking your person to your public key. One of the 1st points we make in our whitepaper is that we intend to adopt best-practices to ensure Bulwark is as good if not better than all other privacy offerings on the market, and implementing Zerocoin is in perfect alignment with this."

##### Q: So how do I convert BWK to zBWK?

A: Its very easy. Simply go to the `privacy` tab in your wallet, enter an amount in the `mint zerocoin` text box, click `mint zerocoin` and the minting process will begin.

##### Q: How do I send zBWK?

A: Same as you would any other transaction. Enter the address you'd like to send coins to and your wallet will handle the rest.
