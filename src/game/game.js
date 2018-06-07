export default class Game {
    constructor (maze) {
        this.maze = maze;
        this.map = maze.map;
        this.start = maze.map[maze.start.x][maze.start.y];
        this.end = maze.map[maze.end.x][maze.end.y];
    }

    /**
     * 开始游戏，设置起始点为起点
     */
    startGame () {
        this.start.isCurrent = true;
        this.current = this.start;
    }

    moveUp () {
        console.log("left");
        let res = undefined;
        if(this.current.x - 1 >= 0 && this.map[this.current.x - 1][this.current.y].isWall === false){
            // this.current.isCurrent = false;
            // this.map[this.current.x - 1][this.current.y].isCurrent = true;
            this.current = this.map[this.current.x - 1][this.current.y];
            res = {x:this.current.x, y:this.current.y}
        }
        this.judge();
        return res;
    }

    moveDown () {
        console.log("right");
        let res = undefined;
        if(this.current.x + 1 <= this.map[0].length && this.map[this.current.x + 1][this.current.y].isWall === false){
            // this.current.isCurrent = false;
            // this.map[this.current.x + 1][this.current.y].isCurrent = true;
            this.current = this.map[this.current.x + 1][this.current.y];
            res = {x:this.current.x, y:this.current.y}
        }
        this.judge();
        return res;
    }

    moveLeft () {
        console.log("up");
        let res = undefined;
        if(this.current.y - 1 >= 0 && this.map[this.current.x][this.current.y - 1].isWall === false){
            // this.current.isCurrent = false;
            // this.map[this.current.x][this.current.y - 1].isCurrent = true;
            this.current = this.map[this.current.x][this.current.y - 1];
            // console.log(this.current);
            res = {x:this.current.x, y:this.current.y}
        }
        this.judge();
        return res;
    }

    moveRight () {
        let res = undefined;
        if(this.current.y + 1 <= this.map.length  && this.map[this.current.x][this.current.y + 1].isWall === false){
            // this.current.isCurrent = false;
            // this.map[this.current.x][this.current.y + 1].isCurrent = true;
            this.current = this.map[this.current.x][this.current.y + 1];
            res = {x:this.current.x, y:this.current.y}
        }
        this.judge();
        return res;
    }

    judge () {
        let {x, y} = this.current;
        if(x === this.end.x && y === this.end.y) {
            alert("You win!");
            return true;
        }else {
            return false;
        }
    }

    getTrueNeighborhood (x, y) {
        let upNode = undefined,
            downNode = undefined,
            leftNode = undefined,
            rightNode = undefined;

        if (x - 1 > -1  && !this.map[x - 1][y].isVisited) {
            leftNode = this.map[x - 1][y];
        }
        if (x + 1 < this.colLength && !this.map[x + 1][y].isVisited) {
            rightNode = this.map[x + 1][y];
        }
        if (y - 1 > -1 && !this.map[x][y - 1].isVisited) {
            downNode = this.map[x][y - 1];
        }
        if (y + 1 < this.rowLength && !this.map[x][y + 1].isVisited) {
            upNode = this.map[x][y + 1];
        }
        return {
            upNode,
            downNode,
            leftNode,
            rightNode
        }
    }

    getCurrent () {
        return this.current;
    }

}