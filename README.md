Bulwark Knowledgebase
&middot;
[![GitHub license](https://img.shields.io/github/license/bulwark-crypto/Bulwark-KB.svg)](https://github.com/bulwark-crypto/Bulwark-KB/blob/master/COPYING) [![Build Status](https://travis-ci.org/bulwark-crypto/Bulwark-KB.svg?branch=master)](https://travis-ci.org/bulwark-crypto/Bulwark-KB) [![Discord](https://img.shields.io/discord/374271866308919296.svg)](https://discord.me/bulwarkcrypto) ![powered by MkDocs](https://img.shields.io/badge/powered_by-MkDocs-pink.svg)
=====
![Example of a Knowledgebase Article](https://i.imgur.com/JUbNCTb.png "Example of a Knowledgebase Article")
Example of a Knowledgebase Article


![Example of Knowledgebase Search](https://i.imgur.com/8aRpG1F.png "Example of Knowledgebase Search")
Example of Knowledgebase Search


## How to run

#### Installing Python

Install [Python] by downloading an installer appropriate for your system from
[python.org] and running it.

!!! Note

    If you are installing Python on Windows, be sure to check the box to have
    Python added to your PATH if the installer offers such an option (it's
    normally off by default).

    ![Add Python to PATH](img/win-py-install.png)

[python.org]: https://www.python.org/downloads/

#### Installing pip

If you're using a recent version of Python, the Python package manager, [pip],
is most likely installed by default. However, you may need to upgrade pip to the
lasted version:

```bash
pip install --upgrade pip
```

If you need to install [pip] for the first time, download [get-pip.py].
Then run the following command to install it:

```bash
python get-pip.py
```

#### Installing MkDocs

Install the `mkdocs` package using pip:

```bash
pip install mkdocs
```

#### Running KB

```bash
$ mkdocs serve
INFO    -  Building documentation...
INFO    -  Cleaning site directory
[I 160402 15:50:43 server:271] Serving on http://127.0.0.1:8000
[I 160402 15:50:43 handlers:58] Start watching changes
[I 160402 15:50:43 handlers:60] Start detecting changes
```

Open up `http://127.0.0.1:8000/` in your browser, and you'll see the default
home page being displayed.

To grab a list of documents for the page index, run this in the docs directory:

```bash
for file in `find *`; do if [ -f $file ]; then echo "- '$file': '$file'"; fi; done
```
