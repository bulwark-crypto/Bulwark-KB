# Bulwark-Staking-Install

## Disclaimer

**This script might contain bugs or errors. Use it at your own risk.**

This script is configured to install staking functionality with the utmost security and safety for your funds. Please ensure that the passwords you choose are a minimum of 16 characters with upper and lower case as well as numbers and symbols to help protect against brute force attacks.

Performing any acts not expressly provided by the script will render your staking wallet incapable of the Bulwark team being able to provide tech support. Additionally, maintenance and coin safety are the sole responsibility of the user.

If you do not expressly follow the script and the associated instructions, there is a very real chance your coins will be rendered inaccessible. Bulwark takes no responsibility for any coins that are lost or stolen.

## Before you start

Due to the higher security needs of a staking server (compared to a masternode), this script is **FOR ADVANCED USERS ONLY**. Please read the entire guide before you proceed.

This script will try to create a safe environment for remote staking by hardening the remote server you stake on. It will also help you with choosing a good user password. In total, you will set up two different passwords:

1. An account password for the user you log in with
2. A wallet password for your Bulwark staking wallet

Please make sure that both follow [common guidelines](https://en.wikipedia.org/wiki/Password_strength#Common_guidelines) for secure passwords. **A staking server holds the actual coins you stake, and if it gets compromised, your funds can be stolen.**

## Overview

The installation will assumes a freshly installed Ubuntu 16.04 VPS or Raspberry Pi with Raspian Stretch Lite. It will install dependencies and needed software for the installation, set up a user account that you can use to log into the server (logging in as root will be deactivated for security reasons), apply various patches to make the server more secure, then reboot it.

At the end of the script, you will be informed that there will be an error about a changed host key the next time you log in. See [this paragraph](#REMOTE-HOST-IDENTIFICATION-HAS-CHANGED) on how to fix that.

After the reboot, you can log in with the new account and activate staking.

## Installation

To get started, run this script:

```bash
bash <( curl https://raw.githubusercontent.com/bulwark-crypto/Bulwark-Staking-Install/master/setup.sh )
```

## Generating an SSH key (Optional)

We strongly recommend you use an SSH key to secure your server. Use a strong password for your key, then add the public key to `/home/bulwark/.ssh/authorized_keys`. After you've confirmed the key words, you will also want to set `PasswordAuthentication` and `UsePAM` to `no` in `etc/ssh/sshd_config`.

- Windows: Follow [this guide](https://www.ssh.com/ssh/putty/windows/puttygen). Make sure you save your private key locally. Also note that you need to need the public key in an OpenSSH format, not in the format Putty uses. When your key is generated, you will see a window labelled "Public key for pasting into OpenSSH authorized_keys file" - that's the key you want to add to the server.

- Linux & macOS: Run the following command in a shell (Terminal.app for macOS, any shell for Linux): `ssh-keygen`
  Pick a good password and save the key in the default location. To show your public key, run `cat ~/.ssh/id_rsa.pub`

## REMOTE HOST IDENTIFICATION HAS CHANGED

During the installation, the staking script will change the order of the SSH host keys for security reasons. As a result, the next time you log into your VPS or Raspberry Pi, you will get the following warning:

```text
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@    WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!     @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
```

While this looks alarming, it is not dangerous (in this case). Here's how to get rid of it:

- Windows: When Putty asks, "Do you want to continue with the connection?", say "Yes".
- Linux & macOS: In a shell, run `ssh-keygen -R <host>`, where `<host>` is the IP or hostname of your staking server.

## Useful Commands

- Start the wallet - `systemctl start bulwarkd`
- Stop the wallet - `systemctl stop bulwarkd`
- Restart the wallet - `systemctl restart bulwarkd`
- Upload a debug log for devs/mods to look at (copy/paste us the output it gives!) - `curl --upload-file ~/.bulwark/debug.log https://transfer.sh/debug.log`
- Unlock your wallet for staking - `bulwark-decrypt`
- Find out if staking is working - `bulwark-cli getstakingstatus`
- See your current balance - `bulwark-cli getbalance`
- Find out information about your wallet - `bulwark-cli getinfo`
- Change the split-threshold for your staking transactions (default 2000) - `setstakesplitthreshold <# to split at>`

## Refreshing the wallet

Most issues with the wallet can be resolved by running the below:

`bash <( curl https://raw.githubusercontent.com/bulwark-crypto/Bulwark-Staking-Install/master/refresh.sh )`

This is like a "factory reset" button.

## Updating the wallet

To update your wallet to the latest version of Bulwark, please run the below:

`bash <( curl https://raw.githubusercontent.com/bulwark-crypto/Bulwark-Staking-Install/master/update.sh )`

## Troubleshooting

To make sure your wallet is staking, the 1st step is to use the following command:

```bash
bulwark-cli getstakingstatus`
```

This should hopefully look like this:

```text
{
    "validtime" : true,
    "haveconnections" : true,
    "walletunlocked" : true,
    "mintablecoins" : true,
    "enoughcoins" : true,
    "mnsync" : true,
    "staking status" : true
}
```

But let's go through how to fix each line.

### "Validtime"

This should always be true, this just shows that the POS period is active for the coin.

### "Haveconnections"

This makes sure you have valid peers, if this is showing as false I'd recommend the following command:

```bash
rm -Rf ~/.bulwark/peers.dat
```

and then running:

```bash
systemctl restart bulwarkd
```

### "Walletunlocked"

This means your wallet isn't unlocked, just run the below:

```bash
bulwark-decrypt
```

This will unlock your wallet for staking only for a long time period.

### "Mintablecoins"

This is asking if your transaction is old enough to be staked. It takes 60 minutes for a transaction to be able to be staked. Just wait and this should correct to true.

### "Enoughcoins"

This is making sure you have more than 1 BWK in the wallet. If this is appearing false there are a wide number of potential problems. It's best to come ask us in Discord or Telegram linked on our [website](https://bulwarkcrypto.com/) if you have issues with this.

### "Mnsync"

This just makes sure your wallet is fully synced, if you appear to be fully synced I'd recomment typing:

```bash
bulwark-cli mnsync reset
```

and then closing the wallet with

```bash
systemctl stop bulwarkd
```

After this, wait a minute, then open it again with:

```bash
systemctl start bulwarkd
```

then wait 10 minutes more, before unlocking the wallet with the command:

```bash
bulwark-decrypt
```

### Staking status

Staking status should be true, when staking=1 in your bulwark.conf, and when all other options are also true.

If you find yourself in a situation where this is false while all other indicators are true, type the below:

```bash
cat ~/.bulwark/bulwark.conf
```

and confirm the output from this command includes "staking=1".

If it does, follow the below steps:

```bash
systemctl stop bulwarkd
```

After this, wait a minute, then open it again with:

```bash
systemctl start bulwarkd
```

then wait 10 minutes more, before unlocking the wallet with the command:

```bash
bulwark-decrypt
```

Then, after a few more minutes of the network accepting your stakes, you should find everything to be true when you run

```bash
bulwark-cli getstakingstatus
```
