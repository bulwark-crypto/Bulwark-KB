# Secure Home Node Installation

## Video Guide

To help you with the installation of your Secure Home Node, we have created a video guide.

[Part 1](https://www.youtube.com/watch?v=GGQz9hNGbKg) explains how to connect your Secure Home node to your network.

<iframe width="560" height="315" src="https://www.youtube.com/embed/GGQz9hNGbKg?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

[Part 2](https://www.youtube.com/watch?v=zraHnU-Phak) shows you how to install and activate your Secure Home Node.

<iframe width="560" height="315" src="https://www.youtube.com/embed/zraHnU-Phak?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Requirements
To connect your node, you need either a network router with a free RJ-45 port and an ethernet cable or a router running a 2.4Ghz Wi-fi network. If you want to connect via Wi-fi, you will also need either a monitor that supports HDMI (along with a HDMI cable) and a keyboard, or a microSD card reader that works with your computer.

## Connecting your SHN to your network
To connect your home node, you have two options: ethernet and Wi-fi.

### Connecting via ethernet
Simply plug in an ethernet cable running to your router into the Raspberry Pi before you connect the power cable. Once you've done that, proceed to [Finding your SHN on your network](#finding-your-shn-on-your-network).

### Connecting via Wi-fi
To set up Wi-fi, you can either connect your SHN to a monitor and keyboard **OR** use a microSD card reader.

#### Monitor & Keyboard
Connect your monitor to the Raspberry Pi with an HDMI cable and plug in a USB keyboard. Connect power to the Raspberry Pi, wait for it to boot up, then log in with the default credentials - user "pi", password "raspberry"

Once you are logged in, run the command
```
sudo raspi-config
```
You will see a graphical interface. First, select "Network Options", then "Wi-fi". In the following screens, select your country (this is necessary in order to use the correct frequencies), then enter your Wi-fi SSID (it's name) and the password. Once you are done, select "Finish" and restart your Raspberry Pi. Then proceed to [Finding your SHN on your network](#finding-your-shn-on-your-network).

#### microSD card reader
Put the microSD card from the Raspberry Pi into your card reader and connect it with your computer. In the root directory of the SD card, create a text file called _wpa_supplicant.conf_ and add the following text to it:
```
country=YOURCOUNTRYCODE
ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev update_config=1
network={
       ssid="YOURNETWORKSSID"
       psk="YOURNETWORKPASSWORD"
       key_mgmt=WPA-PSK
    }
```

Replace _YOURCOUNTRYCODE_ with the [two letter ISO code](https://en.wikipedia.org/wiki/ISO_3166-1#Current_codes) of your country, _YOURNETWORKSSID_ with the name of your wireless network and _YOURNETWORKPASSWORD_ with the password of your wireless network (the password will be encrypted during the installation). Eject the SD card, put it back into your Raspberry Pi and connect the power cable, then proceed to [Finding your SHN on your network](#finding-your-shn-on-your-network)

## Finding your SHN on your network
Next, you need to find the IP address your SHN has been assigned by your router. How you do this depends on your operating system.

### Windows
Download the [Adafruit Pi Finder](https://github.com/adafruit/Adafruit-Pi-Finder/releases) for Windows and run it. It will detect your Raspberry Pi and allow you to connect by clicking the "Terminal" button. Proceed to [Installation](#installation).

### macOS
Open Terminal.app and run the following command:
```
ping raspberrypi.local -c1 | head -1 | awk -F " " '{print $3}'
```
You should see a single line containing the IP address of your home node.

If you don't get an address, use the Linux command below.

### Linux
Open a shell and run the following command:
```
arp -na | grep -i b8:27:eb | head -1 | awk -F ' ' '{print $2}'
```
You should see a single line containing the IP address of your home node.

## Installation
Now you're ready to install! Using [Putty](https://www.putty.org/) or a terminal, connect to your SHN using the address you found in the last step and the username "pi" - the default password is "raspberry" - don't worry, we will change this in a bit.

Once you are logged in, run this line:

```
bash <( wget -qO - https://raw.githubusercontent.com/bulwark-crypto/shn/master/prepare.sh )
```

The installer will prepare some things, then ask you to change your password. After that, your Raspberry will reboot.
Wait for a minute, log into your Raspberry again, then run this command:

```
sudo bash shn.sh
```

Now the Secure Home Node will be installed. After a while, you will see the following line:

```
I will open the getinfo screen for you in watch mode now, close it with CTRL + C once we are fully synced.
```

Then you will see the status of bulwarkd syncing. Once the sync is complete (when the number of blocks displayed is up to the current block height), press `Ctrl+c`
to finish the installation. You will be shown some information, among that the configuration line you need to add your your _masternode.conf_ on your local wallet. Press Enter to restart one more time.

While the Raspberry Pi is rebooting, add the line you got from the script to _masternode.conf_, restart your wallet, open the debug console and start your masternode with the command

```
startmasternode alias false <mymnalias>
```

where _<mymnalias\>_ is the name of your masternode, TORNODE by default.

Congratulations, you're done!


## Proper Shutdown

In the event that you need to shut down your Secure Home Node to move it or something similar, you want to smoothly shut it down to avoid any issues like corruption of chaindata.
To shut down your Secure Home Node, run the following command.

```
sudo shutdown now
```