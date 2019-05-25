import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import {Drawer, Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import SideBar from "./SideBarComponent";


export default class HeaderComponent extends Component {


    closeDrawer() {
        this._drawer._root.close()
    }

    openDrawer() {
        this._drawer._root.open()
    }

    render() {
        const styles = StyleSheet.create({
            container: {
                flex: 1,
                backgroundColor: 'green',
            },
            textContent: {
                fontSize: 20,
                color: 'red',
            },
            header:{
                backgroundColor: '#1a1a1a',

            }
        });



        return (
            <Drawer
                ref={(ref) => { this._drawer = ref; }}
                content={< SideBar navigator={this._navigator} />}
                onClose={() => this.closeDrawer()} >



                <Container style={styles.container} >
                    <Header style ={styles.header}>
                        <Left>
                            <Button transparent  onPress={()=> this.openDrawer()}>
                                <Icon style={{ color: "#ff521d" }}  name='menu' />
                            </Button>
                        </Left>
                        <Body>
                            <Title>SmartHome</Title>
                        </Body>
                        <Right>
                            <Button transparent>
                                <Icon style={{ color: "#ff521d" }} name='notifications' />
                            </Button>
                            <Button transparent>
                                <Icon style={{ color: "#ff521d" }} name='person' />
                            </Button>
                        </Right>
                    </Header>
                </Container>
            </Drawer>
        );


    }



}
