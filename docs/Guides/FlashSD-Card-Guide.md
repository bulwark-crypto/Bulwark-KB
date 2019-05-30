# How to flash your SD Card

1. Go to [etcher](https://etcher.io/) and download the version for your OS.
2. Go to [raspberrypi.org](https://www.raspberrypi.org/downloads/raspbian/) and download "Raspian Stretch Lite".
3. Insert the SD card and start etcher.
4. Go to settings and deactivate "auto-unmount on success".
5. Unzip the Raspbian.zip file that you downloaded.
6. Click "select image" and select the Raspbian Stretch Lite ISO you just unzipped.
7.  Select your SD card as the drive to be flashed, then click flash.
7. As soon as it's done, create an empty file called "ssh" in the root directory of the SD Card.
8. Make sure the file is not called ssh.txt or ssh.doc or anything else - just "ssh".
9. Eject the SD card, put it back into your raspberrypi and connect it to power.
