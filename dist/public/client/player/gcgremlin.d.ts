import Vec2 from '../math/gcVec2.js';
export default class gcGremlin {
    readonly gremlinID: string;
    readonly name: string;
    readonly freg: boolean;
    pos: Vec2;
    targetPos: Vec2;
    private centerPos;
    aimingPos: Vec2;
    private sprite;
    constructor(id: string, name: string, startingPos: Vec2, freg: boolean);
    getPosition(): Vec2;
    updateAimingPos(newPos: Vec2): void;
    update(dt: number): void;
    render(ctx: CanvasRenderingContext2D): void;
}
