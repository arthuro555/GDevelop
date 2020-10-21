gdjs.evtTools.discord = {
  client: null,
};

gdjs.evtTools.discord.ClientClass = class ClientClass {
  connected = false;
  activityCache = null;
  rpc = null;
  clientId = 0;

  constructor(clientId) {
    if (typeof clientID === undefined) {
      console.error('Invalid client id: ', clientId);
      return;
    }
    let Discord = null;

    try {
      Discord = require('discord-rpc');
    } catch (e) {
      console.log('Module not found, trying to import from main process...');
    }

    if (Discord === null) {
      try {
        Discord = require('electron').remote.require('discord-rpc');
      } catch (e) {
        console.error('Module still not found, disabling rich presence.');
      }
    }

    if (Discord === null) return;

    this.rpc = new Discord.Client({ transport: 'ipc' });
    this.clientId = clientId;

    this.rpc
      .login({ clientId })
      .then(() => {
        this.connected = true;

        this.rpc.subscribe('ACTIVITY_JOIN', ({ secret }) => {
          this.onjoin(secret);
        });
        this.rpc.subscribe('ACTIVITY_SPECTATE', ({ secret }) => {
          this.onspectate(secret);
        });
        this.rpc.subscribe('ACTIVITY_JOIN_REQUEST', (user) => {
          this.onjoinrequest(user);
        });

        if (this.activityCache) {
          this.rpc.setActivity(this.activityCache).catch(this.onerror);
          this.activityCache = null;
        }
      })
      .catch(this.onerror);
  }

  onerror(e) {
    console.error(e);
  }

  onjoin() {}
  onspectate() {}
  onjoinrequest() {}

  updatePresence(d) {
    if (this.rpc === null) return;
    if (this.connected) {
      this.rpc.setActivity(d).catch(this.onerror);
    } else {
      this.activityCache = d;
    }
  }

  reply(user, response) {
    if (this.rpc === null) return;
    switch (response) {
      case 'YES':
        rpc.sendJoinInvite(user).catch(this.onerror);
        break;
      case 'NO':
      case 'IGNORE':
        rpc.closeJoinRequest(user).catch(this.onerror);
        break;
      default:
        this.onerror('Unknown response: ', response);
    }
  }

  disconnect() {
    if (this.rpc === null) return;
    rpc.destroy().catch(this.onerror);
  }

  getRPC() {
    return rpc;
  }
};

gdjs.registerFirstRuntimeSceneLoadedCallback((runtimeScene) => {
  gdjs.evtTools.discord.client = new gdjs.evtTools.discord.ClientClass(
    parseInt(
      runtimeScene
        .getGame()
        .getExtensionProperty('DiscordRichPresence', 'DiscordAppId'),
      10
    )
  );
});

gdjs.evtTools.discord.updateRichPresence = function (
  state,
  details,
  startTimestamp,
  endTimestamp,
  largeImageKey,
  largeImageText,
  smallImageKey,
  smallImageText,
  partyId,
  partySize,
  partyMax,
  matchSecret,
  spectateSecret,
  joinSecret,
  instance
) {
  if (gdjs.evtTools.discord.client === null) return;
  gdjs.evtTools.discord.client.updatePresence({
    state,
    details,
    startTimestamp,
    endTimestamp,
    largeImageKey,
    largeImageText,
    smallImageKey,
    smallImageText,
    partyId,
    partySize,
    partyMax,
    matchSecret,
    spectateSecret,
    joinSecret,
    instance,
  });
};
