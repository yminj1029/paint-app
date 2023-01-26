import { observable } from "mobx"

const paintToolStore = observable({
    //stae
    paintTool: 'pen',
    
    //action
    changePaintTool(tool) {
        this.paintTool = tool; 
    }

})

export default paintToolStore;