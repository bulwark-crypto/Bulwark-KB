# Staking Troubleshooting FAQ

##### I'm running the staking script and getting an EOF error, what do I do?
This error is caused when you use characters in your password like spaces, line breaks, and quotation marks (both single and double.)  
To avoid this error, please refrain from using the above characters in your password.

##### The script says I'm not allowed to use this password, what is wrong?
Nothing is wrong. In the interest of making your new wallet as secure as possible, we opted to use Cracklib, a library of common words and phrases that are very easy for bruteforce attacks to penetrate. This means that your password cannot contain simple words like "cat" and "dog" or simple strings like "1234" or "qwerty".