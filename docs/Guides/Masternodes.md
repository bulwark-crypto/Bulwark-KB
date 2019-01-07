# Bulwark Masternode Installation

## System requirements

The VPS you plan to install your masternode on needs to have at least 1GB of RAM (2GB for I2P) and 10GB of free disk space. We do not recommend using servers who do not meet those criteria, and your masternode will not be stable. We also recommend you do not use elastic cloud services like AWS or Google Cloud for your masternode - to use your node with such a service would require some networking knowledge and manual configuration.

## Funding your masternode

* First, we will do the initial collateral TX and send exactly 5000 BWK to one of our addresses. To keep things sorted in case we setup more masternodes we will label the addresses we use.

  - Open your BWK wallet and switch to the "Receive" tab.

  - Click into the label field and create a label, I will use MN1

  - Now click on "Request payment"

  - The generated address will now be labelled as MN1 If you want to setup more masternodes just repeat the steps so you end up with several addresses for the total number of nodes you wish to setup. Example: For 10 nodes you will need 10 addresses, label them all.

  - Once all addresses are created send 5000 BWK each to them. Ensure that you send exactly 5000 BWK and do it in a single transaction. You can double check where the coins are coming from by checking it via coin control usually, that's not an issue.

As soon as all 5k transactions are done, we will wait for 15 confirmations. You can check this in your wallet or use the explorer.
It should take around 30 minutes if all transaction have 15 confirmations.


## Masternode.conf generation

After waiting 15 confirmations for the collateral transaction to mature, go to the `Masternodes` tab in your wallet. There you will see a button on the bottom of the wallet that says "configure", click that button to bring up the masternode.conf configuration menu.  
  - Type in the alias you would like to name your masternode in the `Alias Name` field  

  - Paste your VPS IP address in the `VPS Address` field  

  - Then click on `Autofill Privkey` and `Autofill Outputs` to fill in the Privkey, Output and Output ID.  

  - Then click `OK` to automatically enter this information in to your Masternode.conf.

  - Please restart your wallet after you have completed these steps to finalize your masternode.conf


## Installation

SSH (Putty on Windows, Terminal.app on macOS) to your VPS, login as root (**Please note:** It's normal that you don't see your password after typing or pasting it) and run the following command:

```
bash <( curl https://raw.githubusercontent.com/bulwark-crypto/Bulwark-MN-Install/master/install.sh )
```

When the script asks, confirm your VPS IP Address and paste your masternode key.
(You can copy your key and paste into the VPS if connected with Putty by right clicking)

The installer will then present you with a few options.

**PLEASE NOTE**: Do not choose the advanced installation option unless you have experience with Linux and know what you are doing. Advanced mode  will install your masternode under a non-root user called "bulwark" instead of root, so you need to know what that means and how to log in as a different user under Linux. If you don't, things will not work as expected and the Bulwark team CANNOT help you - you will have to restart the installation.

Follow the instructions the script presents you with.

After the basic installation is done, the wallet will sync. You will see the following message:

```
Your masternode is syncing. Please wait for this process to finish.
This can take up to a few hours. Do not close this window.
```
Continue following the instructions as presented.

Once you see "Masternode setup completed." on screen, you are done.

## Video Guide

<div class="video-wrapper">
<iframe width="740" height="416" src="https://www.youtube.com/embed/W1284pD1gTc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>



## Updating your Masternode  

To update your node please run this command and follow the instructions. Please note that this script must be run as root.  

`bash <( curl https://raw.githubusercontent.com/bulwark-crypto/Bulwark-MN-Install/master/update_node.sh )`

## Refreshing your Masternode  

If your masternode is stuck on a block or behaving badly, you can refresh it. Please note that this script must be run as root.

`bash <( curl https://raw.githubusercontent.com/bulwark-crypto/Bulwark-MN-Install/master/refresh_node.sh )`

## Non-interactive installation

You can use the installer in a non-interactive mode by using command line arguments - for example, if you want to automate the installation. This requires that you download the installer and run it locally. Here are the arguments you can pass to `install.sh`:

```text
    -n --normal               : Run installer in normal mode
    -a --advanced             : Run installer in advanced mode
    -i --externalip <address> : Public IP address of VPS
    --bindip <address>        : Internal bind IP to use
    -k --privatekey <key>     : Private key to use
    -f --fail2ban             : Install Fail2Ban
    --no-fail2ban             : Do nott install Fail2Ban
    -u --ufw                  : Install UFW
    --no-ufw                  : Do not install UFW
    -b --bootstrap            : Sync node using Bootstrap
    --no-bootstrap            : Do not use Bootstrap
    -h --help                 : Display this help text.
    --no-interaction          : Do not wait for wallet activation.
    --tor                     : Install TOR and configure bulwarkd to use it
    --i2p                     : Install I2P (Requires 2GB of RAM)
```

If you want to make the installation process fully non-interactive, you need to provide Bulwark with arguments for the mode to use, the external IP, private key, and wether to use fail2ban, UFW and the bootstrap, and then also add the `--no-interaction` parameter. Please not that this will not tell you to activate your masternode from your wallet after the node has finished syncing, so it will not run until you do.

## Installing a masternode with TOR or I2P

During installation, the script will ask you if you want to run your masternode on the TOR or I2P network. If you say "Y" to this, you need to change the IP address in your masternode conf from the IP address of your VPS server to its TOR/I2P hostname. This hostname will be shown to you during the syincing progress. Everything else works just the same as during a normal installation.

## Manually generating information for masternode.conf

Generate your Masternode Private Key

In your wallet, open Tools -> Debug console and run the following command to get your masternode key:

```
masternode genkey
```

Please note: If you plan to set up more than one masternode, you need to create a key with the above command for each one.

Run this command to get your output information:

```
masternode outputs
```

Copy both the key and output information to a text file.

Close your wallet and open the Bulwark Appdata folder. Its location depends on your OS.

* **Windows:** %APPDATA%\\Roaming\\Bulwark
_Press Windows+R and write %appdata%_

* **Linux:** ~/.bulwark/
_Navigate to the .bulwark folder in your home directory_

* **macOS:** ~/Library/Application Support/Bulwark
_Press Cmd+Space, type ~/Library/Application Support/Bulwark and press Enter._

In your appdata folder, open masternode.conf with a text editor and add a new line in this format to the bottom of the file:

```
masternodename ipaddress:52543 genkey collateralTxID outputID
```

An example would be

```
mn1 127.0.0.2:52543 93HaYBVUCYjEMeeH1sBGLALQZE1Y1K6xiqgX37tGBDQL8Xg 2bcd3c84c84f7ea86e4e56834c2927a07f9e1871810b92e0d0324456a67c 0
```

_masternodename_ is a name you choose, _ipaddress_ is the public IP of your VPS, _genkey_ is the output from `masternode genkey`, and _collateralTxID_ & _outputID_ come from `masternode outputs`.

Please note that _masternodename_ must not contain any spaces, and should not contain any special characters.

Restart and unlock your wallet, then continue with the installation guide above.