# How to vote and submit proposals

## Submitting a proposal through the GUI

1. You’ll want to do some preparation before submitting your proposal to ensure you can clearly and concisely explain what you’re planning on doing with the coins, and as with all other things, ensure that you're using the latest version of the [Official Bulwark Wallet](https://github.com/bulwark-crypto/Bulwark/releases)
You'll want to start a thread on the [Official Bulwark Community Forum](https://community.bulwarkcrypto.com/c/proposals) to link in the `URL` section. Follow the instructions there to build out the plan for your proposal.

To begin the submission process, you'll need to gather the following information in order to submit the proposal.  
   * **Proposal-name** : This is going to be the name of your proposal. It has a 20 character limit, so make it count!  
   * **URL** : This field allows you to submit a URL to an expanded explanation of your proposal. We have a section on our Community Forum specifically for discussion of proposals. Linking to a post in this section is the easiest way to spread the details about your proposal. The more detail you can go in to about how the funds will be handled and where they will be stored, the more likely you will be to convince people that they should vote for you!  
   * **payment-count** : This field denotes the number of payments you are requesting. You can request a one-time payment, or several smaller, recurring payments if your project will require ongoing funding.  
   * **Block-start** : This field denotes the Super-Block that you’d like your proposal to start paying on if it is accepted. This information can be found by typing `getnextsuperblock` in your Debug Console  
   * **Bulwark-address** : This is the field in which you put the Bulwark address that you’d like to receive the superblock payout with.  
   * **Monthly-payment** : The amount of coins you’d like to receive every month.  

After gathering the information listed above, you'll want to navigate to the `Proposals` tab shown in the screenshot below.  
Click the `Create` button. Please make sure that you have at least 5 BWK in your wallet to pay the proposal creation fee.
![proptab](https://kb.bulwarkcrypto.com/assets/images/governancemultisendscreenshot1.png "multisendscreenshot1.png")  
After you have filled out the fields shown in the screenshot below with the appropriate information, click `Submit Proposal`
![propfields](https://kb.bulwarkcrypto.com/assets/images/multisendscreenshot1.png "multisendscreenshot1.png")
Your proposal is now submitted! Now, get out there and gather support for it!

## Submitting a proposal through the debug terminal
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

5. After waiting 6 confirmations for the proposal submission fee to confirm, piece together the string needed to vote on your proposal.
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

## Voting on a proposal through the GUI
Voting through the new GUI is quite simple, simply click on the proposal you would like to vote on and then click one of the three buttons at the bottom of the interface, `Vote Yes` `Vote No` or `Vote Abstain`
![proptab](https://kb.bulwarkcrypto.com/assets/images/governancemultisendscreenshot1.png "multisendscreenshot1.png") 
If you would like to learn more about a specific proposal, you can right click on it to copy the URL that the creator supplied which will ideally be a link to a more detailed source of information on the proposal. If it is not a relevant link, then you may want to be wary of voting yes on it.
As with all things in crypto; verify, don't trust

## Voting on a proposal through the debug console
1. Open the debug console of your local wallet
2. Find the vote hash for the proposal you'd like to vote on. The [Official Bulwark Community Forum](https://community.bulwarkcrypto.com/c/proposals) will likely be the comprehensive place to find proposals and discussion about them
3. Use the following commands to vote for the proposal;
    * `mnbudgetvote many <vote hash> yes` will use all the eligible masternodes defined in your masternode.conf to vote `yea` for the specified proposal
    * `mnbudgetvote many <vote hash> no` will use all the eligible masternodes defined in your masternode.conf to vote `nay` for the specified proposal

