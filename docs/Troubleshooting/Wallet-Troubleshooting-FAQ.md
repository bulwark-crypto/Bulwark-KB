# Wallet Syncing Issues

##### Why is my wallet not syncing? 

1. Make sure you are running the latest wallet version from [the Official Bulwark Github](https://github.com/bulwark-crypto/Bulwark/releases) and your wallet is closed.
2. Head over to the Bulwark folder (How to do that is explained below).
3. Delete all files except wallet.dat, bulwark.conf, masternode.conf and the backups folder.
4. Open your wallet

##### My wallet is taking a very long time to sync, what can I do?

* You can attempt to sync using the officially supplied bootstrap, instructions for which can be found in [The Bootstrap Article](https://kb.bulwarkcrypto.com/Information/Bootstrap/)
    * Unzip the bootstrap and place it in your Appdata folder for Bulwark
* You can enable UPnP Port Mapping to help with possible networking issue
    1. Open the *Settings* tab
    2. Click the *Network* tab
    3. Click the checkbox that says "Map port using UPnP"


##### Q: I am getting weird errors/crashes when opening up my wallet. What can I do?

A: First, check out the [Bulwark Knowledgebase Guide](http://kb.bulwarkcrypto.site/FAQs/General-Wallet-Issues/) and see if this fixes your problem. If it doesn't, head to our [Discord](https://discord.me/bulwarkcrypto) and ask for help there.

##### Q: I'm getting `Failed reading from database. pcoinsTip best block is not correct` when I try to start my wallet, what do I do?

A: Like most other wallet errors, the best way to proceed is to resync your wallet.

* Make sure you are running the latest wallet version from [the Official Bulwark Github](https://github.com/bulwark-crypto/Bulwark/releases) and your wallet is closed.
* Now you head over to the Bulwark folder (How to do that is explained below).
* Delete all files except wallet.dat, bulwark.conf, masternode.conf and the backups folder.
* Open your wallet

#### How to find your Bulwark folder:

**Windows:** Press `Windows+R` and write `%appdata%`

**macOS:** Press `Command+Space` to open Spotlight, write `~/Library/Application Support/Bulwark` and press Enter.

**Linux:** Open `~/.bulwark/`

For an expanded explanation on what is contained in the *Bulwark* folder, please read the article titled [Default Data Locations](https://kb.bulwarkcrypto.com/Information/Default-Data-Locations/)

##### How do I enable coin control?

In the *settings* tab, option the *options* menu, and go to the *wallet* tab. Check the box next to *enable coin control features.* There will now be a button in the *send* tab that says *open coin control*.

##### How do I update my local wallet?

Simply download and unzip the latest wallet from [the Official Bulwark Github](https://github.com/bulwark-crypto/Bulwark/releases) and replace the previous versions executable files with the updated ones. 