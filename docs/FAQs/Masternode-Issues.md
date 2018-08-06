# Masternode Issues

All commands are assuming you are running your Masternode on an Ubuntu Linux 16.04 VPS. Running a MN locally on a Windows or Mac PC, while possible, is not officially supported, mostly for security purposes.

#### To check your masternode is active and working:
* In your local wallet: Verify that you see status "ENABLED" in your masternode tab, and that the Active timer is increasing.
* On your VPS: Run bulwark-cli masternode status, it should say "Masternode successfully started"

#### If you are getting a "Could not connect to server" error when running commands on your VPS
* It has likely crashed for some reason and simply needs to be re-started using `systemctl start bulwarkd`
* Follow that up by re-starting your node in your local wallet with `startmasternode alias false yourmnalias` where `yourmnalias` is the name of your masternode as defined in your masternode.conf.
* If you would like to see if it crashed due to low system memory, run `dmesg | egrep -i 'killed process'` on your VPS.

#### If your masternode has stopped syncing during setup or update
* CTRL+C to get back to the command line
* Run `bulwark-cli getinfo` to ensure that you have successfully updated to version 1030100
    * If you are on the correct version, run the refresh command found on [The Official Bulwark Github](https://github.com/bulwark-crypto/Bulwark-MN-Install)
    * If you are not, run the update command found on  [The Official Bulwark Github](https://github.com/bulwark-crypto/Bulwark-MN-Install)