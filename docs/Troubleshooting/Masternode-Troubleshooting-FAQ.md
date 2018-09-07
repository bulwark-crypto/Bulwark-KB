# Masternode Troubleshooting

##### Is my Masternode working?

 **To check if your Masternode is active and working:**

1. In your local wallet: Verify that you see the status "ENABLED" in your Masternode tab, and that the Active timer is increasing.
2. On your VPS: Run `bulwark-cli masternode status`, it should say "Masternode successfully started".

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

##### My wallet says my masternode is active, but the node itself still returns `