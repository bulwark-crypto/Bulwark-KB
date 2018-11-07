# Docker Masternode Installation

This guide will show you the simplest way to install and run a Bulwark masternode using Docker. The following setup is assumed:

- Server or KVM VPS running Ubuntu 16.04 or newer
- At least 1GB RAM and 10GB HDD/SSD per masternode
- One IPv4 or IPv6 address per masternode

For in-depth information about using Bulwark with Docker, please see [this article](/FAQs/Docker-FAQ/).

## How to install masternodes with Docker

### Prerequisites

Before you install your Docker masternode(s), please make sure you have prepared the following:

- 5000 BWK collateral for each masternode

- A unique masternode key for each node, you can generate them by running `masternode genkey` in the debug console of your wallet.

- A unique IPv4 or IPv6 address configured on the server/VPS for each masternode - please check with your provider on how to configure additonal addresses if you need them.

### Preparing the collateral

First, we will do the initial collateral TX and send exactly 5000 BWK to one of our addresses for each masternode.

- Open your BWK wallet and switch to the "Receive" tab.

- Click into the label field and create a label, for example: "MN1"

- Now click on "Request payment"

The generated address will now be labelled as MN1. If you want to setup more masternodes just repeat the steps so you end up with several addresses for the total number of nodes you wish to setup. Example: For 10 nodes you will need 10 addresses, label them all.

Once all addresses are created send 5000 BWK each to them. Ensure that you send **exactly** 5000 BWK and do it in a single transaction for each masternode. You can double check where the coins are coming from by checking it via coin control.

As soon as all 5k transactions are done, we will wait for 15 confirmations. You can check this in your wallet or use the explorer. It should take around 30 minutes.

### masternode.conf

After you have made sure you have all the prerequisite information and your collateral(s), the next step is to edit your masternode.conf file - you can do so by clicking _Open Masternode Configuration File_ in the Tools menu of your wallet, or by opening the masternode.conf file you find in your Bulwark data folder in your preferred text editor. The location of your data folder depends on your operating system:

- **Windows:** _%appdata%\Bulwark\\_
- **Linux:** _~/.bulwark/_
- **macOS:** _~/Library/Application Support/Bulwark/_

In the masternode.conf file, add a line for each masternode you want to setup. The line must look like this:

```text
masternodename ipaddress:52543 genkey collateralTxID outputID
```

An example would be

```text
mn1 127.0.0.2:52543 93HaYBVUCYjEMeeH1sBGLALQZE1Y1K6xiqgX37tGBDQL8Xg 2bcd3c84c84f7ea86e4e56834c2927a07f9e1871810b92e0d0324456a67c 0
```

_masternodename_ is a name you choose, _ipaddress_ is the public IP of your VPS, _genkey_ is the output from `masternode genkey`, and _collateralTxID_ & _outputID_ come from `masternode outputs`.

Please note that _masternodename_ must not contain any spaces, and should not contain any special characters. After you have completed this step, restart your wallet to load the new masternode configuration.

### Installation script

To start the installation process, run this line on your VPS:

```text
bash <(wget -qO- https://raw.githubusercontent.com/kewagi/Bulwark-Docker/master/bulwark/scripts/ubuntu-docker-mn.sh)
```

The script will first ask you to confirm that you want to install, then set up Docker and all additional tools. After that is done, it will create a special configuration file called `docker-compose.yml` that you can use to start, stop and update your masternode. To create this file, the script will ask for

- _The name of the masternode_
  This can be anything you want, but the name must not contain any empty or special characters.

- _The IP of the node_
  This can be an IPv4 or IPv6 address that is configured on the server. Each masternode must have a unique IP address.

- _The masternode key_
  You generate this in your wallet debug console by running _masternode genkey_. Each masternode must have a unique key.

After you have set up a node, the script will ask if you want to add another one. Continue until you have entered the data of all the masternodes you want to run on this server. In the directory you ran the script in, you will now have a directory called `bulwark-mn` containing the configuration file. To start your newly configured masternodes, run these two commands:

```text
cd bulwark-mn
docker-compose up -d
```

Your masternode(s) will now start up and sync - the initial sync will take a while, and needs to finish before you can activate from your wallet. To see the status of the running nodes, you can run the following command:

```text
docker container ls
```

Under the NAMES column, you will see the internal name of each masternode running. You need this name to communicate with your node. For example, if you wanted to check the current block height of a node, you would run the following command:

```text
docker container exec -it NAME bulwark-cli getblockcount
```

Replace NAME with the listed name of the node you want to query. All other bulwark-cli commands also work this way.

Once your masternodes are fully synced, you will activate them from your wallet.

### Wallet activation

Unlock your wallet, go to the masternodes tab and click **START MISSING**. Your nodes will now be activated, the status should switch to ENABLED and after about 15 to 20 minutes, the timer should start going up. Your node(s) will now need 24 hours to fully activate. Congratulations, you're done!

### Further information

For information on how to use, update and troubleshoot your Docker masternodes, see the [FAQ](/FAQs/Docker-FAQ/).
