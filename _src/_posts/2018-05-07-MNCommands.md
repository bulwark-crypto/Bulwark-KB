---
layout: post
title:  "List of masternode commands for Linux VPS'es"
category: Information
tags:
-Masternodes
-Troubleshooting
-Commands
---

### Bulwark Putty Commands -

`systemctl start bulwarkd`
-Starts the Bulwark Daemon

`systemctl stop bulwarkd`
-Stops the Bulwark Daemon

`systemctl restart bulwarkd`
-Restarts the Bulwark Daemon

`systemctl status bulwarkd`
-Gets the status of the Bulwark Daemon

`bulwark-cli masternode status`
-Gets the status of the Bulwark masternode running on the VPS

`bulwark-cli getinfo`
-Gets general info about the Masternode running on the VPS such as sync height, version, and protocol numbers

`bulwark-cli masternodecurrent`

`ps aux | grep bulwark`

`dmesg | egrep -i 'killed process'`

`bulwarkd &``


`nano ~/.bulwark/bulwark.conf`
`cd .bulwark dir`

`bulwarkd -reindex -deamon`

`pkill -9 bulwarkd`
`bulwark-cli stop`
`killall -9 bulwarkd`

`bulwark-cli getpeerinfo | grep synced_headers`
`bulwark-cli getmasternodecount`
`bulwark-cli getmininginfo`
`./bulwarkd -reindex`
`./bulwarkd -daemon`

`Ctrl+C` if stuck with a >

`rm -rf /home/$USER/.bulwark/blocks /home/$USER/.bulwark/database
 /home/$USER/.bulwark/chainstate /home/$USER/.bulwark/peers.dat`


`rm -rf Bulwark-MN-Install && git clone https://github.com/bulwark-crypto/Bulwark-MN-Install.git && cd Bulwark-MN-Install && bash update_node.sh`
Use this command to update your masternode to the latest version listed on the official Bulwark Github.
---
