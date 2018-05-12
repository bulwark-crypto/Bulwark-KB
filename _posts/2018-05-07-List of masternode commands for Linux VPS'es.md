INCOMPLETE LIST-NEED DETAILS



---
layout: post
title:  "List of masternode commands for Linux VPS'es"
category: Official Information
tags: Masternodes, Troubleshooting


Bulwark Putty Commands -

#### bulwark-cli masternodecurrent

#### ps aux | grep bulwark

#### bulwarkd &

#### bulwark-cli getinfo
#### bulwarkd -daemon
#### nano ~/.bulwark/bulwark.conf
#### cd .bulwark dir

#### bulwark-cli masternode status
Display's the status of your masternode which is very useful in troubleshooting.

#### bulwarkd -reindex -deamon

#### pkill -9 bulwarkd
#### bulwark-cli stop
#### killall -9 bulwarkd

#### bulwark-cli getpeerinfo | grep synced_headers
#### bulwark-cli getmasternodecount
#### bulwark-cli getmininginfo
#### ./bulwarkd -reindex
#### ./bulwarkd -daemon

#### Ctrl+C if stuck with a >

#### rm -rf /home/$USER/.bulwark/blocks /home/$USER/.bulwark/database
 /home/$USER/.bulwark/chainstate /home/$USER/.bulwark/peers.dat

#### while true; do date; bulwark-cli getinfo |grep block; echo; sleep 60; done  - returns block height every 60 sec
#### If your bulwark-cli is stored in the .bulwark folder then yes you do type - cd .bulwark

#### tail -f ~/.bulwark/debug.log

#### rm -rf Bulwark-MN-Install && git clone https://github.com/bulwark-crypto/Bulwark-MN-Install.git && cd Bulwark-MN-Install && bash update_node.sh
Use this command to update your masternode to the latest version listed on the official Bulwark Github.
---
