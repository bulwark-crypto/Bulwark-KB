# Docker FAQ

##### Q: What is Docker?

A: Taken from [opensource.com](https://opensource.com/resources/what-docker):

> Docker is a tool designed to make it easier to create, deploy, and run applications by using containers. Containers allow a developer to package up an application with all of the parts it needs, such as libraries and other dependencies, and ship it all out as one package. By doing so, thanks to the container, the developer can rest assured that the application will run on any other Linux machine regardless of any customized settings that machine might have that could differ from the machine used for writing and testing the code.

##### Q: What is an image? What's a container or a volume?

A: Here's a short explanation:

- **Image:** A template for a unit of software that is used to generate containers.
- **Container:** A standard unit of software that packages up code and all its dependencies so the application runs quickly and reliably from one computing environment to another.
- **Volume:** Persistent storage attached to a container. It keeps existing even when the container is destroyed.

##### Q: What's the difference between a container and a VM?

A: See [this answer on Stack Overflow](https://stackoverflow.com/a/16048358) for a good, technical explanation.

##### Q: What are the requirements for using Docker?

A: Docker runs on most flavors of Linux, BSD, macOS 10.11 and above, multiple cloud hosting providers and Windows 10 Professional. It runs on X86_64 and ARM architectures, and a few others. If you want to run your containers on a VPS, make sure that it uses KVM as the virtualization technology, since OpenVZ does not support Docker (yet).

##### Q: How do I install Docker on my system?

A: There are guides available for [Amazon AWS](https://docs.docker.com/docker-for-aws/), [Microsoft Azure](https://docs.docker.com/docker-for-azure/), [CentOS](https://docs.docker.com/install/linux/docker-ce/centos/), [Debian](https://docs.docker.com/install/linux/docker-ce/debian/), [Fedora](https://docs.docker.com/install/linux/docker-ce/fedora/), [Ubuntu](https://docs.docker.com/install/linux/docker-ce/ubuntu/), [macOS](https://docs.docker.com/docker-for-mac/install/) and [Windows 10](https://docs.docker.com/docker-for-windows/install/). If you need to install Docker on Ubuntu 14.04, follow these [instructions](https://docs.docker.com/install/linux/docker-ce/ubuntu/).

##### Q: Can I run multiple masternodes on a single server?

A: Yes, provided you have enough RAM (assume 1GB per node). However, every single node will need its own unique IP address. This can either be an IPv4 or IPv6 addresses. Many hosters offer multiple IPv4 addresses as a paid option, some provide you with a complete IPv6 subnet containing hundreds or thousands of addresses.

##### Q: How do I create just the docker-compose.yml file?

A: We have a stand-alone tool that just creates the docker-compose.yml file for you. Here's how you run it:

```text
bash <(wget -qO- https://raw.githubusercontent.com/kewagi/Bulwark-Docker/master/bulwark-node/scripts/compose-gen.sh)
```

##### Q: Which image should I use to run Bulwark nodes with Docker?

A: The Docker image you want to use is _bulwarkcrypto/bulwark:latest_

##### Q: How does the entrypoint script work?

A: The entrypoint script passes anything you add to the docker run statement as a [parameter](https://kb.bulwarkcrypto.com/Information/Running-Bulwark/#command-line-arguments) to bulwarkd.

##### Q: Can I edit the bulwark.conf inside a Bulwark container?

A: Yes, every container comes with the nano text editor pre-installed. You can run it via `docker container exec`:

```text
docker container exec -it NAME nano /home/bulwark/.bulwark/bulwark.conf
```

Please remember you need to restart the container for any changes to take effect.

##### Q: How can I run commands inside a container?

A: To run a command like `bulwark-cli` inside a container, you need to know the name of the container. You can find out by running this inside the directory containing the docker-compose.yml file:

```text
docker-compose ps
```

Then, to run a command inside a container called NAME, you would run

```text
docker container exec -it NAME <command>
```

For example, to get information about the Bulwark server inside the container _bulwarkmn1_, you could run

```text
docker container exec -it bulwarkmn1 bulwark-cli getinfo
```

##### Q: How do I check if my masternodes are working?

A: Run this command inside the directory containing the docker-compose.yml file:

```text
docker-compose ps
```

This lists various information about your masternode(s), among them their health status. The health check runs every 10 minutes to ensure bulwarkd is still active and reachable within the container.

##### Q: How do I update my nodes?

A: Updating your node(s) to a new version of Bulwark is very easy with Docker:

```text
docker-compose down
docker-compose pull
docker-compose up
```

Run these commands inside the directory containing the docker-compose.yml file.

##### Q: How do I shut down my nodes?

A: Run this command inside the directory containing the docker-compose.yml file:

```text
docker-compose down
```

This shuts down all your masternodes.

##### Q: How do I clear the chaindata for all my nodes?

A: Run this command inside the directory containing the docker-compose.yml file:

```text
docker-compose down -v
docker-compose up -d
```

This shuts down all your masternodes and deletes their stored chaindata, then brings them back up, forcing them to resync.

##### Q: How do I clear the chaindata for one specific node?

A: To clear the chaindata for just a single masternode when you run multiple nodes on the server, you need to find the name of the corresponding volume. By default, this is _bulwark-mn_NAMEOFNODE_. To check, you can use the `docker volume ls` command. Assuming your node is called NAME, you'd run these commands to clear the chaindata for one specific node:

```text
docker container stop NAME
docker container rm NAME
docker volume rm bulwark-mn_NAME
docker-compose up -d
```

Run these commands inside the directory containing the docker-compose.yml file.
