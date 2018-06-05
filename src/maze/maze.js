export default class Maze {
    /**
     *
     * @param map
     * @param start
     * @param end
     */
    constructor (map,start,end) {
        this.map = map;
        this.start = start;
        this.end = end;
    }

    /**
     * 随机prim算法，生成迷宫
     */
    initMaze () {
        let visitedList = [];// 被访问过的节点
        this.colLength = this.map.length;
        this.rowLength = this.map[0].length;

        this.map[this.start.x][this.start.y].isVisited = true;
        this.map[this.end.x][this.end.y].isVisited = true;
        this.map[this.start.x][this.start.y].isWall = false;
        this.map[this.end.x][this.end.y].isWall = false;

        // let startNeighbors = this.getTrueNeighborhood(this.start.x, this.start.y);
        // let endNeighbors = this.getTrueNeighborhood(this.end.x, this.end.y);
        //
        // for(let s in startNeighbors) {
        //     console.log(startNeighbors[s]);
        //     if(startNeighbors[s] !== undefined) {
        //         startNeighbors[s].isWall = false;
        //     }
        // }
        //
        // for(let s in endNeighbors) {
        //     console.log(startNeighbors[s]);
        //     if(endNeighbors[s] !== undefined) {
        //         endNeighbors[s].isWall = false;
        //     }
        // }

        let currentNode = this.map[this.random(this.rowLength - 1)][this.random(this.colLength - 1)];

        currentNode.isVisited = true;
        currentNode.isWall = false;
        visitedList.push(currentNode);

        while (currentNode.isVisited) {
            let neighbors = this.getNeighborhood(currentNode.x, currentNode.y);
            let neighborArray = [];

            for(let i in neighbors) {
                if(neighbors[i] !== undefined) {
                    neighborArray.push(neighbors[i]);
                }
            }

            //  如果当前节点周围有未被访问的节点
            if (neighborArray.length !== 0) {
                let tempNeighborNode = neighborArray[this.random(neighborArray.length)];
                this.map[(currentNode.x + tempNeighborNode.x) / 2][(currentNode.y + tempNeighborNode.y) / 2].isWall = false;    //  打通当前节点和被选中邻居节点之间的墙壁

                tempNeighborNode.isVisited = true;
                visitedList.push(tempNeighborNode);
                currentNode = tempNeighborNode;
                currentNode.isWall = false;
            }else {
                /**
                 * 如果没有未被访问的节点
                 */

                currentNode = visitedList[this.random(visitedList.length)];
                if(!currentNode) {
                    //如果visitedList为空时，跳出循环
                    break;
                }
                currentNode.isVisited = true;
                currentNode.isWall = false;

                for (let i = 0;i < visitedList.length;i ++) {
                    if (currentNode.x === visitedList[i].x && currentNode.y === visitedList[i].y) {
                        visitedList.splice(i,1);
                    }
                }
            }

        }
    }

    /**
     * BFS广度优先搜索，搜寻路线
     */
    findPath () {

    }

    /**
     * 生成随机点
     * @param i
     * @returns {number}
     */
    random (i) {
        return Math.floor(Math.random() * i)
    }

    /**
     * 获取某个节点的真实旁节点，为start和end准备
     * @param x
     * @param y
     * @returns {{upNode: undefined, downNode: undefined, leftNode: undefined, rightNode: undefined}}
     */
    getTrueNeighborhood (x, y) {
        let upNode = undefined,
            downNode = undefined,
            leftNode = undefined,
            rightNode = undefined;

        if (x - 1 > 0  && !this.map[x - 1][y].isVisited) {
            leftNode = this.map[x - 1][y];
        }
        if (x + 1 < this.colLength && !this.map[x + 1][y].isVisited) {
            rightNode = this.map[x + 1][y];
        }
        if (y - 1 > 0 && !this.map[x][y - 1].isVisited) {
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

    /**
     * 获得某个节点的相邻节点
     * @param x
     * @param y
     * @returns {{upNode: *, downNode: *, leftNode: *, rightNode: *}}
     */
    getNeighborhood (x, y) {
        let upNode = undefined,
            downNode = undefined,
            leftNode = undefined,
            rightNode = undefined;

        if (x - 2 > 1  && !this.map[x - 2][y].isVisited) {
            leftNode = this.map[x - 2][y];
        }
        if (x + 2 < this.colLength - 1 && !this.map[x + 2][y].isVisited) {
            rightNode = this.map[x + 2][y];
        }
        if (y - 2 > 1 && !this.map[x][y - 2].isVisited) {
            downNode = this.map[x][y - 2];
        }
        if (y + 2 < this.rowLength - 1 && !this.map[x][y + 2].isVisited) {
            upNode = this.map[x][y + 2];
        }
        return {
            upNode,
            downNode,
            leftNode,
            rightNode
        }
    }

    getMap () {
        return this.map;
    }
}