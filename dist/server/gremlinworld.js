export default class GremlinWorld {
    constructor() {
        GremlinWorld.numGremlins = 0;
        this.dt = 0;
        this.timeOfLastUpdate = performance.now();
        console.log('calling gremlinWorld constructor');
    }
    addGremlin(gremlin) {
        GremlinWorld.numGremlins++;
    }
    removeGremlin() {
        GremlinWorld.numGremlins--;
    }
    createGremlinWorldPackage() {
        console.log(GremlinWorld.numGremlins);
    }
}
GremlinWorld.numGremlins = 0;
