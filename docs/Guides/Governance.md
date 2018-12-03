# How to vote and submit proposals

### Submitting a proposal

1. You’ll want to do some preparation before submitting your proposal to ensure you can clearly and concisely explain what you’re planning on doing with the coins. 
You'll want to start a thread on the [Official Bulwark Community Forum](https://community.bulwarkcrypto.com/c/proposals) to link in the `URL` section. Follow the instructions there to build out the plan for your proposal.

To begin the submission process, enter `mnbudget prepare` in to the Debug Console in your Bulwark Wallet. This will show you all of the details needed in order to submit the proposal.  
   * **Proposal-name** : This is going to be the name of your proposal. It has a 20 character limit, so make it count!  
   * **URL** : This field allows you to submit a URL to an expanded explanation of your proposal. We have a section on our Community Forum specifically for discussion of proposals. Linking to a post in this section is the easiest way to spread the details about your proposal. The more detail you can go in to about how the funds will be handled and where they will be stored, the more likely you will be to convince people that they should vote for you!  
   * **payment-count** : This field denotes the number of payments you are requesting. You can request a one-time payment, or several smaller, recurring payments if your project will require ongoing funding.  
   * **Block-start** : This field denotes the Super-Block that you’d like your proposal to start paying on if it is accepted. This information can be found by typing `getnextsuperblock` in your Debug Console  
   * **Bulwark-address** : This is the field in which you put the Bulwark address that you’d like to receive the superblock payout with.  
   * **Monthly-payment** : The amount of coins you’d like to receive every month.  

2. Once you have gathered the information requested, you can build the string you will enter to prepare your proposal.
```
preparebudget <Proposal-name><URL><payment-count><Block-start><Bulwark-address><Monthly-payment>
```

Run the command after you piece it together, and your debug console will give you a hash output that corresponds to your newly prepared proposal, aptly called the "Preparation Hash"  

3. The next step, if no errors are returned after step 2, is to submit the proposal for voting.
```
submitbudget <Proposal-name><URL><payment-count><Block-start><Bulwark-address><Monthly-payment><preparation hash>
```

4. Record the hash given to you after running `submitbudget` and store it somewhere safe, this will be needed for others to vote on your proposal. This string is known as the "Vote Hash"

5. Piece together the string needed to vote on your proposal.
```
mnbudgetvote many <vote hash> yes
```
The above command will use all of the masternodes defined in your masternode.conf to vote `yea`
```
mnbudgetvote many <vote hash> no”
```
This command will use all of the masternodes defined in your masternode.conf to vote `nay`

6. You can use `"mnbudget getinfo <Proposal-Name>” to check the status of your proposal at any time

Congratulations! Your proposal is now ready to be spread to the community! Happy voting!


### Voting on a proposal
1. Open the debug console of your local wallet
2. Find the vote hash for the proposal you'd like to vote on. The [Official Bulwark Community Forum](https://community.bulwarkcrypto.com/c/proposals) will likely be the comprehensive place to find proposals and discussion about them
3. Use the following commands to vote for the proposal;
    * `mnbudgetvote many <vote hash> yes` will use all the eligible masternodes defined in your masternode.conf to vote `yea` for the specified proposal
    * `mnbudgetvote many <vote hash> no` will use all the eligible masternodes defined in your masternode.conf to vote `nay` for the specified proposal

