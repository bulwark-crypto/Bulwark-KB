# Staking Troubleshooting FAQ

##### I'm running the staking script and getting an EOF error, what do I do?
This error is caused when you use characters in your password like spaces, line breaks, and quotation marks (both single and double.)  
To avoid this error, please refrain from using the above characters in your password.

##### The script says I'm not allowed to use this password, what is wrong?
Nothing is wrong. In the interest of making your new wallet as secure as possible, we opted to use Cracklib, a library of common words and phrases that are very easy for bruteforce attacks to penetrate. This means that your password cannot contain simple words like "cat" and "dog" or simple strings like "1234" or "qwerty".

##### Every status except "staking status" is true, why?
A simple restart of your wallet could fix this. You have to wait for the wallet to fully synchronize before unlocking to stake.
Another reason could be, that you have no inputs with at least 100 BWK (You can check your inputs via Coin Control in the "Send" tab. You activate the coin control features by going to Settings>Options>Wallet>Enable coin control features.) or your inputs don't have 475 confirmations.