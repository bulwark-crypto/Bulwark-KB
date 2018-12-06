# Governance FAQ  

##### Q: What commands are there related to governance?  
A: 
  prepare            - Prepare proposal for network by signing and creating tx  
  submit             - Submit proposal for network  
  vote-many          - Vote on a Bulwark initiative with all masternodes  
  vote-alias         - Vote on a Bulwark initiative with a single masternode  
  vote               - Vote on a Bulwark initiative/budget  
  getvotes           - Show current masternode budgets  
  getinfo            - Show current masternode budgets  
  show               - Show all budgets  
  projection         - Show the projection of which proposals will be paid the next cycle  
  check              - Scan proposals and remove invalid  
  nextblock          - Get next superblock for budget system  

##### Q: When is the cutoff for voting on a superblock

A: Your votes must be in 1920 blocks before the superblock, which is approximately 48 hours 

##### Q: How many votes does a proposal need to pass?

A: A proposal needs to have 10% of the total masternodes on the network voting `yea`, after the number of masternodes voting `nay` is subtracted.  
An example, if we assume that there are 1000 active masternodes on the network.  
A proposal would need at least 100 more `yea` than `nay` votes to pass.  
A passing vote would be something like `200 yea` and `90 nay`, bringing the effective total of `yea` votes to 110. In this example, the proposal had both the minimum number of votes met, and has a total number of `yea` votes above the minimum
A failing vote would be something like `150 yea` and `75 nay`, bringing the effective total of `yea` votes to 75. In this example, the proposal does not meet the minimum number of `yea` votes and would not pass.

##### Q: What stops someone from taking the same collateral, making a node, voting, and shutting it down to make a new one, and spam voting for or against a specific proposal?

A: Every 14 blocks all of the votes are checked for each proposal and in the process it checks to see if the masternode is currently in the list of active masternodes. If it is not in the list at the time then the vote is marked as invalid and is not counted. If the masternode then comes back online, the next 14th block check will move the vote to valid.  There is not a direct removal of invalid votes with missing masternodes, but over time the vote is left out of the incremental sync that happens every 960 blocks and new nodes that sync budgets should not receive invalid votes.