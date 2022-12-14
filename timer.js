

class Timer {
    constructor() {
        this.gameTime = 0;
        this.maxStep = 0.05;
        this.lastTimestamp = 0;
    };

    tick() {
        let current = Date.now();
        let delta = (current - this.lastTimestamp) / 1000; 
        this.lastTimestamp = current;

        let gameDelta = Math.min(delta, this.maxStep);
        this.gameTime += gameDelta;
        return gameDelta;
    };
};
