# How to properly shut down a Masternode

**In order to shutdown your masternode you have to destroy your VPS and close your wallet.**

1. Go to your VPS providers website and navigate to your "server info" page, or equivalent page for your provider.
2. Find the option to "Destroy Server" and click it, most will prompt you to ensure you want to do so.
3. Go to your Bulwark folder, which should be in your [%appdata%](https://kb.bulwarkcrypto.com/Guides/AppData-Guide/)
4. Navigate to your Masternode.conf and open it
5. Delete the line in your Masternode.conf for the masternode you're trying to shut down.
   - The format of the line will be `masternodealias ipaddress genkey collateralTxID outputID`

Afterwards your Masternode will be properly shut down and your coins will be unlocked.
