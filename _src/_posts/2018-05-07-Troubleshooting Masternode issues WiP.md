WORK IN PROGRESS---



layout: post
title:  "Troubleshooting Masternode issues"
category: Official Information
tags: Official Info, Troubleshooting, Masternodes, VPS
---
# Troublshooting various issues with your Masternode
### All commands are assuming you are running your Masternode on an Ubuntu Linux 16.04 VPS. Running a MN locally on a Windows or Mac PC, while possible, is not officially supported, mostly for security purposes.

#### To check your masternode is active and working:
* In your local wallet: Verify that you see status "ENABLED" in your masternode tab, and that the Active timer is increasing.
* On your VPS: Run bulwark-cli masternode status, it should say "Masternode successfully started"

####
