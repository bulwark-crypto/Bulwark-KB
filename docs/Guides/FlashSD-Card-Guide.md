# How to flash your SD

* Go to [etcher](https://etcher.io/) and download their Windows Version.
* Then go to [Raspberrypi.org](https://www.raspberrypi.org/downloads/raspbian/) and download "Raspian Stretch Lite".
* Insert the SD Card and start etcher.
* Go to settings and deactivate "auto-unmount on success".
* Unzip the raspian.zip and tell etcher to put the image on the SD Card and let it flash.
* As soon as it's done flashing, create a empty file called "ssh" in the root directory of the SD Card and make sure that it's not called ssh.txt or ssh.doc or anything else - just "ssh".
* Then eject the SD Card and put it back into your raspberrypi and connect it to power.
