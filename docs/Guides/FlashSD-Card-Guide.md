# How to flash your SD

1. Go to [etcher](https://etcher.io/) and download the version for your OS.
2. Go to [raspberrypi.org](https://www.raspberrypi.org/downloads/raspbian/) and download "Raspian Stretch Lite".
3. Insert the SD card and start etcher.
4. Go to settings and deactivate "auto-unmount on success".
5. Unzip the raspian.zip and tell etcher to put the image on the SD Card. Let it flash.
6. As soon as it's done, create an empty file called "ssh" in the root directory of the SD Card.
7. Make sure the file is not called ssh.txt or ssh.doc or anything else - just "ssh".
8. Eject the SD card, put it back into your raspberrypi and connect it to power.
