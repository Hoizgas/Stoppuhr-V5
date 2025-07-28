// Beispielhafter Adapter ohne native Module
const utils = require('@iobroker/adapter-core');
class Stoppuhr extends utils.Adapter {
    constructor(options) {
        super({
            ...options,
            name: 'stoppuhr',
        });
        this.on('ready', this.onReady.bind(this));
        this.on('unload', this.onUnload.bind(this));
    }
    async onReady() {
        this.log.info('Stoppuhr Adapter gestartet');
        // Hier kann man z.B. auf Daten vom ESP32 reagieren
    }
    onUnload(callback) {
        try {
            this.log.info('Adapter gestoppt');
            callback();
        } catch (e) {
            callback();
        }
    }
}
if (require.main !== module) {
    module.exports = (options) => new Stoppuhr(options);
} else {
    new Stoppuhr();
}