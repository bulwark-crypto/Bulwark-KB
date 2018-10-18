# Useful SHN Commands

##### If you need the output line to paste in to your masternode.conf
`echo TORNODE "$(sudo cat /var/lib/tor/hidden_service/hostname):52543 $(sudo grep -Po '(?<=masternodeprivkey=).*' /home/bulwark/.bulwark/bulwark.conf)" "$YOURTXINHERE"`

