# Masternode Troubleshooting

##### Is my Masternode working?

 **To check if your Masternode is active and working:**

1. In your local wallet: Verify that you see the status "ENABLED" in your Masternode tab, and that the Active timer is increasing.
2. On your VPS: Run `bulwark-cli masternode status`, it should say "Masternode successfully started".

##### I'm already running one Masternode in my local wallet, how do I set up a second?

* Through the GUI available in wallet version 2.1.0 and onward, you can simply fill out the information as you would with any other node and the configurator will take care of formatting for you.  
* If you would like to build the masternode.conf manually, you simply need to move to a new line and fill it out following the same formatting as the first masternode.

##### My Masternode has stopped syncing, what can I do?

1. The recommended course of action is to run the refresh script we supply on [The Official Bulwark Github](https://github.com/bulwark-crypto/Bulwark-MN-Install#refreshing-node) 
    * `bash <( curl https://raw.githubusercontent.com/bulwark-crypto/Bulwark-MN-Install/master/refresh_node.sh )`

##### If your masternode has stopped syncing during setup or update
* CTRL+C to get back to the command line
* Run `bulwark-cli getinfo` to ensure that you have successfully updated to version 1030100
    * If you are on the correct version, run the refresh command found on [The Official Bulwark Github](https://github.com/bulwark-crypto/Bulwark-MN-Install)
    * If you are not, run the update command found on  [The Official Bulwark Github](https://github.com/bulwark-crypto/Bulwark-MN-Install)

##### I am getting a "Could not connect to server" error when running commands on my VPS, what do I do?
* It has likely crashed for some reason and simply needs to be re-started using `systemctl start bulwarkd`
* Follow that up by re-starting your node in your local wallet with `startmasternode alias false yourmnalias` where `yourmnalias` is the name of your masternode as defined in your masternode.conf.
* If you would like to see if it crashed due to low system memory, run `dmesg | egrep -i 'killed process'` on your VPS.

##### My wallet says my masternode is active, but the node itself still returns `Waiting for Remote Activation` errors and the active timer is not moving. What do I do?
There are several things that can cause this, but the most common is an error in your local masternode.conf.
* Ensure that there are no extra spaces or line breaks in your configuration file.
* Ensure that the IP address you have specified is correct

##### My Masternode is going missing after an update or spork but not giving me an error code.
Your node likely needs to be refreshed. If it was installed using out setup script, run the following command;
`bash <( curl https://raw.githubusercontent.com/bulwark-crypto/Bulwark-MN-Install/master/refresh_node.sh )`
* For more information on the refresh process, please refer to the [Article on refreshing](https://kb.bulwarkcrypto.com/Guides/Refresh-Guide/) for more information

##### I'm getting a "Block height out of range" error, what do I do?
* Your node needs to be refreshed. If it was installed using the Bulwark Masternode Setup script, please run the following command;
`bash <( curl https://raw.githubusercontent.com/bulwark-crypto/Bulwark-MN-Install/master/refresh_node.sh )`
* For more information on the refresh process, please refer to the [Article on refreshing](https://kb.bulwarkcrypto.com/Guides/Refresh-Guide/) for more information

##### My masternode says that I have an "Incorrect RPC user or password"
* An error of some kind occurred while running the script. Please run the [Refresh Script](https://kb.bulwarkcrypto.com/Guides/Refresh-Guide/) for your device  

##### My Masternode keeps crashing, what do I need to do?
* Please consult the following flowchart to try and find your answer. If you cannot fix your issue, please join us on either the [Official Bulwark Discord](https://discord.me/bulwarkcrypto) or the [Official Telegram Channel](https://t.me/bulwarkcrypto) for further help  
![Bulwark Knowledgebase](https://kb.bulwarkcrypto.com/assets/images/nodecrash.png "nodecrash.png")