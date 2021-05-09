const fs = require('fs-extra');
module.exports = {
    Handler: function(api, logger){
        api.on('ready', () => {
            logger.Info('ready!');
            logger.Info('This plugin will automatically back up your BdsPp world for you! You need the built-in plugin \'ecchi\'.');
        });
        api.on('ecchi.15minuteEvent', () => {
            const name = 'backup-' + Date.now();
            fs.copySync('../../worlds/main', '../../worlds/' + name);
            logger.Info("I backed the World. The file name is '" + name + "'.");
        });
    },
    Version: '1.0.0'
}