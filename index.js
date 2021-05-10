const fs = require('fs-extra');
module.exports = {
    Handler: function(api, logger) {
        api.on('ready', () => {
            logger.Info('ready!');
            logger.Info('This plugin will automatically back up your BdsPp world for you!');
        });
        api.onTimer("15m", () => {
            const name = 'backup-' + Date.now();
            fs.copySync('../../worlds/main', '../../worlds/' + name);
            logger.Info("I backed the World. The file name is '" + name + "'.");
        });
    },
    Version: '1.0.0'
}
