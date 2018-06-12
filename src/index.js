import './assert/style/common.css';
import san,{DataTypes} from 'san';
import sanMaze from './components/san-maze.san'

const MyApp = san.defineComponent({
    template: `<div style="width:100%;height:750px;margin-top:20px;">
                    <div>
                        <san-maze></san-maze>
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