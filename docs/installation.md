---
sidebar_position: 1
---

# Installation

First thing. I want to say thank to [SoxZz5](https://gitlab.com/soxzz) for his [OpenRP](https://gitlab.com/soxzz/openrp/-/tree/main/orp) package
Offical guide to installing ProjectStarboy .
Make sure you have successfully installed and setup your database before you start!

## Requirements

<!-- Get started by **creating a new site**.

Or **try Docusaurus immediately** with **[docusaurus.new](https://docusaurus.new)**. -->

- [MongoDB](https://www.mongodb.com/try/download/community)
- [NodeJS](https://nodejs.org/dist/v18.14.1/node-v18.14.1-x64.msi)
- [Setting up a Vanilla FXServer](https://docs.fivem.net/docs/server-manual/setting-up-a-server-vanilla/)

## Download

### Using Git

<!-- - [Node.js](https://nodejs.org/en/download/) version 16.14 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies. -->

```bash
cd resources
https://github.com/Lorraxs/ProjectStarboy
```

### Manually

- Download [ProjectStarboy](https://github.com/Lorraxs/ProjectStarboy/archive/refs/heads/main.zip)

## Install

- Extract ProjectStarboy
- Place it into the `Resources` folder in your server
- Edit or create your server.cfg to look similar to this

```bash
  ## You CAN edit the following:
  endpoint_add_tcp "0.0.0.0:30120"
  endpoint_add_udp "0.0.0.0:30120"
  sv_maxclients 4
  sv_master ""

  ## You MAY edit the following:
  sets locale "vi-VN"
  sv_hostname "Project Starboy"
  sv_licenseKey "***"
  set steam_webApiKey "******"
  sets sv_projectName "^Project Starboy"
  sets sv_projectDesc "Project Starboy"
  sets tags "roleplay, pvp, free to styles, deployer"
  load_server_icon logo.png
  set sv_enforceGameBuild 2802

  set server_host "fivem"
  set server_type "development"
  set gamename "gta5"

  ensure mapmanager
  ensure chat
  ensure spawnmanager
  ensure sessionmanager
  ensure basic-gamemode
  ensure hardcap
  ensure rconlog
  ensure ProjectStarboy

  add_ace builtin.everyone command.forecast allow
  add_ace builtin.everyone command.mytime allow
  add_ace builtin.everyone command.myweather allow
  add_ace builtin.everyone command.weathersync allow


  ## Add system admins
  add_ace group.admin command allow # allow all commands
  add_ace group.admin command.quit deny # but don't allow quit

  add_ace resource.lr-core command.add_ace allow
  add_ace resource.lr-core command.add_principal allow
  add_ace resource.lr-core command.remove_principal allow
  add_ace group.admin hypnonema allow


```

## Finally run server

- All database are auto generated
