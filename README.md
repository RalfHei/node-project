**Projektipäevad 3-5.veebruar 2021**
Jututuba - Node Chat keskkonna arendus.

**Meeskond**
JavaScript
_Ralf Heinloo Ta-19_
_Kevin Reinov TAK-19_
_Kris Kristofer Burk TAK-18_
_Risto Siimer TAK-19_

HTML/CSS Figma
_Merlin Praks TA-20_
_Terje Volke TA-20_
_Kadi Remmelgas-Luka TA-20_

Projekti disain ja prototüüpimine:


Prjoekt:




--------------------------------

**How to run**

This how to explains how to run this project on Ubuntu server.

1. Update your system
```
sudo apt update && sudo apt -y upgrade
```
2. Install the most recent version of Nodejs and npm (node packet manager). We use this repository because the normal Ubuntu repository has very old version.
```
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install -y nodejs
```
3. Test Nodejs
```
node -v
```
4. Test npm
```
npm -v
```
5. Install nodemon globally
```
sudo npm install -g nodemon
```
6. Install Redis
```
sudo apt install redis-server
```
7. Update redis.conf file. Find `supervised no` line and change to `supervised systemd` since Ubuntu uses the systemd init system.
```
sudo nano /etc/redis/redis.conf
```
8. Start Redis
```
sudo service redis-server start
```
9. Clone the repository
```
git clone https://github.com/kuressaareametikool/node-project
```
10. Change directory to project folder
```
cd node-project
```
11. Install modules
```
npm install
```
12. Run server
```
nodemon server.js
```
