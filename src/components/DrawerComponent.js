import React, { Component } from 'react';
import { Drawer } from 'native-base';
import SideBar from './SideBarComponent';


export default class DrawerComponent extends Component {


    closeDrawer() {
        this._drawer._root.close()
    }

    openDrawer() {
        this._drawer._root.open()
    }



    render(){
        return(
            <Drawer
                ref={(ref) => { this._drawer = ref; }}
                content={<SideBar navigator={this._navigator} />}
                onClose={() => this.closeDrawer()} > // Main View
            </Drawer>
        )
    }

}