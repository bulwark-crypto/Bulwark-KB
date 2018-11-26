# If your Debug Console will not open:

### These steps will fix issues caused by going from a 2 monitor setup to a 1 monitor setup.

##### 1. Download our [RegFix.zip](https://kb.bulwarkcrypto.com/assets/Downloads/regfix.zip) file and unzip it.

#####   1a. Verify that it has the following lines, nothing more and nothing less, by right clicking the script and opening it in a text editor such as Notepad on Windows.

```[HKEY_CURRENT_USER\Software\Bulwark\Bulwark-Qt]```  

Moves to the Bulwark Directory

`nOptionsDialogWindowPos=-`  

Find this value that positions the Options Window and delete it

`nOptionsDialogWindowSize=-`  

Find this value that dictates the size of the Options Window and delete it

`nRPCConsoleWindowPos=-`  

Find this value that positions the Debug Console Window and delete it

`nRPCConsoleWindowSize=-` 

Find this value that dictates the size of the Debug Console Window and delete it

##### 2. Close the text editor and run the script

##### 3. You will be asked several times if you understand what this script does and if you actually want to run it. If you have completed step 1a and verified the scripts contents, press yes to these checks.

##### 4. When it is done, you will be asked to confirm that it is done, click OK.
