# How to flash your SD

1. Go to [etcher](https://etcher.io/) and download their Windows Version.
2. Then go to [Raspberrypi.org](https://www.raspberrypi.org/downloads/raspbian/) and download "Raspian Stretch Lite".
3. Insert the SD Card and start etcher.
4. Go to settings and deactivate "auto-unmount on success".
5. Unzip the raspian.zip and tell etcher to put the image on the SD Card and let it flash.
6. As soon as it's done flashing, create a empty file called "ssh" in the root directory of the SD Card and make sure that it's not called ssh.txt or ssh.doc or anything else - just "ssh".
7. Then eject the SD Card and put it back into your raspberrypi and give it power.

Now you are done.
