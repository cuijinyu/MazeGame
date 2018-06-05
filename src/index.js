import './assert/style/common.css';
import san,{DataTypes} from 'san';
import sanMaze from './components/san-maze.san'

const MyApp = san.defineComponent({
    template: `<div>
                    <san-maze></san-maze>
                    <div class="controller">
                        <el-Button type="standard"></el-Button>
                    </div>
                </div>`,
    components:{
        'san-maze':sanMaze,
    },
    initData() {

    }
});
const myApp = new MyApp();
myApp.attach(document.getElementById("app"));