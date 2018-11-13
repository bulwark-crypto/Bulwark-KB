# Useful SHN Commands

**The following commands assume that you used the default locations and settings for various files, directories, and user information. They may not work as listed if you have set up your Secure Home Node without our scripts.**

##### If you need the output line to paste in to your masternode.conf
`echo TORNODE "$(sudo cat /var/lib/tor/hidden_service/hostname):52543 $(sudo grep -Po '(?<=masternodeprivkey=).*' /home/bulwark/.bulwark/bulwark.conf)" "$YOURTXINHERE"`

##### To properly shut down your Secure Home Node
`sudo shutdown now`

##### To refresh the chaindata of your Secure Home Node
`bash <( curl https://raw.githubusercontent.com/bulwark-crypto/shn/master/refresh_node.sh )`

##### To get a link to your debug.log file to assist with troubleshooting
`sudo curl --upload-file /home/bulwark/.bulwark/debug.log https://transfer.sh/debug.log`