import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, StatusBar} from 'react-native';

import {Collapse, CollapseHeader, CollapseBody} from 'accordion-collapse-react-native';
import {Thumbnail, List, ListItem, Separator, Card} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button} from 'react-native-elements';
import {RadioButton} from 'react-native-paper';
import {ScrollView} from 'react-native-gesture-handler';
import Header from '../../../../SharedModule/Header/Header';
import {stylesInheritance} from './styleJudicialcalculations';

export default class inheritance extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            checked1: 'tow',
            checked2: 'three',
            checked3: 'four',
            counter: 0,
            counter1: 0,
            counter3: 0,
            counter5: 0,
        };
    }

    increaseCounter = () => {
        this.setState({counter: this.state.counter + 1});
    };
    decreaseCounter = () => {
        this.setState({counter: this.state.counter - 1});
    };
    increaseCounter1 = () => {
        this.setState({counter1: this.state.counter1 + 1});
    };
    decreaseCounter1 = () => {
        this.setState({counter1: this.state.counter1 - 1});
    };

    render() {
        const {checked} = this.state;
        const {checked1} = this.state;
        const {checked2} = this.state;
        const {checked3} = this.state;
        return (
            <View style={stylesInheritance.container}>

                <StatusBar hidden={false} translucent={true} networkActivityIndicatorVisible={true}
                           backgroundColor={'#333'}
                           barStyle="light-content"/>
                <Header title="ارث" onBackPress={() => {
                    this.props.navigation.goBack();
                }}/>


                <ScrollView>

                    <Text style={{color: 'gray', marginHorizontal: 15, marginTop: 15, fontFamily: 'Vazir-Black'}}>
                        در صورت زنده بودن آقارب حین الفوت متوفی در طبقات سه گانه ارث,گزینه مقابل آن را با علامت تیک مشخص
                        و در صورت تعدد, عدد مربوطه را معین نمایید.
                    </Text>
                    <Card style={{
                        marginLeft: 15,
                        marginRight: 15,
                        marginTop: 20,
                        shadowOpacity: 0.9,
                        borderTopRightRadius: 5,
                        borderTopLeftRadius: 5,
                        shadowRadius: 7.49,
                        elevation: 12,
                    }}>
                        <View style={{
                            backgroundColor: '#067062', height: 25, borderTopRightRadius: 5, borderTopLeftRadius: 5,
                            shadowRadius: 7.49,
                        }}>
                            <Text style={{
                                color: '#fff',
                                marginHorizontal: 15,
                                fontFamily: 'Vazir-Black',
                                alignSelf: 'center',
                            }}>
                                متوفی
                            </Text>
                        </View>
                        <View style={{flexDirection: 'row-reverse', justifyContent: 'space-between', marginTop: 5}}>

                            <View style={{flexDirection: 'row'}}>
                                <Text style={{fontFamily: 'IRANSansMobile(FaNum)'}}>مجرد است</Text>
                                <RadioButton
                                    value="first"
                                    color='#067062'
                                    status={checked === 'first' ? 'checked' : 'unchecked'}
                                    onPress={() => {
                                        this.setState({checked: 'first'});
                                    }}/>

                            </View>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={{fontFamily: 'IRANSansMobile(FaNum)', marginLeft: 50}}>شوهر دارد</Text>
                                <RadioButton
                                    value="three"
                                    color='#067062'
                                    status={checked3 === 'three' ? 'checked' : 'unchecked'}
                                    onPress={() => {
                                        this.setState({checked3: 'three'});
                                    }}/>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row-reverse', justifyContent: 'space-between', marginTop: 10}}>

                            <View style={{flexDirection: 'row'}}>
                                <Text style={{fontFamily: 'IRANSansMobile(FaNum)'}}>زن دارد</Text>
                                <RadioButton
                                    value="four"
                                    color='#067062'
                                    status={checked1 === 'four' ? 'checked' : 'unchecked'}
                                    onPress={() => {
                                        this.setState({checked1: 'tow'});
                                    }}
                                />

                            </View>
                            <View style={{flexDirection: 'row', marginLeft: 20}}>

                                <View style={{flexDirection: 'row'}}>
                                    <Icon
                                        style={{marginRight: 10}}
                                        name='minus-circle'
                                        color='#067062'
                                        // onPress={() => this.decreaseCounter()}
                                        size={20}
                                    />
                                    <Text style={{
                                        fontFamily: 'IRANSansMobile(FaNum)',
                                        color: '#067062',
                                    }}>{this.state.counter5}</Text>
                                    <Icon
                                        style={{marginLeft: 10}}
                                        name='plus-circle'
                                        color='#067062'
                                        // onPress={() => this.increaseCounter()}
                                        size={20}
                                    />
                                </View>
                                <Text style={{fontFamily: 'IRANSansMobile(FaNum)'}}>تعدد زوجه : </Text>
                            </View>
                        </View>

                    </Card>
                    {/* ...................طبق اول...................... */}
                    <Card style={{
                        marginHorizontal: 25,
                        marginRight: 15,
                        marginLeft: 15,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                        marginTop: 20,
                    }}>
                        <Collapse>
                            <CollapseHeader style={{
                                height: 50,
                                backgroundColor: '#067062',
                                borderTopLeftRadius: 10,
                                borderTopRightRadius: 10,
                            }}>
                                <Separator bordered style={{
                                    height: 50,
                                    backgroundColor: '#067062',
                                    borderTopLeftRadius: 10,
                                    borderTopRightRadius: 10,
                                }}>
                                    <View style={{flexDirection: 'row-reverse', justifyContent: 'space-between'}}>
                                        <Text style={{fontFamily: 'Vazir-Black', color: '#fff', marginRight: 10}}>طبق
                                            اول وراث </Text>
                                        <Icon
                                            style={{marginRight: 10}}
                                            name='chevron-down'
                                            color='#fff'
                                            size={20}
                                        />
                                    </View>

                                </Separator>
                            </CollapseHeader>
                            <CollapseBody>
                                <ListItem>
                                    <View style={{flexDirection: 'row'}}>

                                        <View style={{flexDirection: 'row'}}>
                                            <Icon
                                                style={{marginRight: 10}}
                                                name='minus-circle'
                                                color='#067062'
                                                onPress={() => this.decreaseCounter()}
                                                size={25}
                                            />
                                            <Text style={{
                                                fontFamily: 'IRANSansMobile(FaNum)',
                                                color: '#067062',
                                            }}>{this.state.counter}</Text>
                                            <Icon
                                                style={{marginLeft: 10}}
                                                name='plus-circle'
                                                color='#067062'
                                                onPress={() => this.increaseCounter()}
                                                size={25}
                                            />
                                        </View>

                                        <View style={{color: '#067062', marginLeft: 170, marginTop: 3}}>
                                            <Text style={{fontFamily: 'Vazir-Black', color: '#555'}}>فرزند پسر</Text>
                                        </View>
                                    </View>


                                </ListItem>
                                <ListItem>
                                    <View style={{flexDirection: 'row'}}>

                                        <View style={{flexDirection: 'row'}}>
                                            <Icon
                                                style={{marginRight: 10}}
                                                name='minus-circle'
                                                color='#067062'
                                                onPress={() => this.decreaseCounter1()}
                                                size={25}
                                            />
                                            <Text style={{
                                                fontFamily: 'IRANSansMobile(FaNum)',
                                                color: '#067062',
                                            }}>{this.state.counter1}</Text>
                                            <Icon
                                                style={{marginLeft: 10}}
                                                name='plus-circle'
                                                color='#067062'
                                                onPress={() => this.increaseCounter1()}
                                                size={25}
                                            />
                                        </View>

                                        <View style={{color: '#067062', marginLeft: 170, marginTop: 3}}>
                                            <Text style={{fontFamily: 'Vazir-Black', color: '#555'}}>فرزند دختر</Text>
                                        </View>
                                    </View>
                                </ListItem>
                                <ListItem
                                    style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                                    <View style={{flexDirection: 'row'}}>
                                        <View style={{
                                            flexDirection: 'row',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}>
                                            <Text style={{fontFamily: 'Vazir-Black', color: '#555'}}>پدر</Text>
                                            <RadioButton
                                                value="first"
                                                color='#067062'
                                                status={checked === 'first' ? 'checked' : 'unchecked'}
                                                onPress={() => {
                                                    this.setState({checked: 'first'});
                                                }}/>

                                        </View>
                                        <View style={{
                                            flexDirection: 'row',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}>
                                            <Text style={{
                                                fontFamily: 'Vazir-Black',
                                                color: '#555',
                                                marginLeft: 20,
                                            }}> مادر</Text>
                                            <RadioButton
                                                value="second"
                                                color='#067062'
                                                status={checked === 'second' ? 'checked' : 'unchecked'}
                                                onPress={() => {
                                                    this.setState({checked: 'second'});
                                                }}/>
                                        </View>
                                    </View>
                                </ListItem>
                            </CollapseBody>
                        </Collapse>

                    </Card>
                    {/* ...................طبق دوم...................... */}
                    <Card style={{
                        marginHorizontal: 25,
                        marginRight: 15,
                        marginLeft: 15,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                    }}>
                        <Collapse>
                            <CollapseHeader bordered style={{
                                height: 50,
                                backgroundColor: '#067062',
                                borderTopLeftRadius: 10,
                                borderTopRightRadius: 10,
                            }}>
                                <Separator bordered style={{
                                    height: 50,
                                    backgroundColor: '#067062',
                                    borderTopLeftRadius: 10,
                                    borderTopRightRadius: 10,
                                }}>
                                    <View style={{flexDirection: 'row-reverse', justifyContent: 'space-between'}}>
                                        <Text style={{fontFamily: 'Vazir-Black', color: '#fff', marginRight: 10}}>طبق
                                            دوم وراث </Text>
                                        <Icon
                                            style={{marginRight: 10}}
                                            name='chevron-down'
                                            color='#fff'
                                            //   onPress={() => this.decreaseCounter()}
                                            size={20}
                                        />
                                    </View>
                                </Separator>
                            </CollapseHeader>
                            <CollapseBody>
                                <ListItem style={{flexDirection: 'row', justifyContent: 'space-between'}}>

                                    <View style={{flexDirection: 'row'}}>
                                        <Icon
                                            style={{marginRight: 10}}
                                            name='minus-circle'
                                            color='#067062'
                                            onPress={() => this.decreaseCounter()}
                                            size={25}
                                        />
                                        <Text style={{
                                            fontFamily: 'IRANSansMobile(FaNum)',
                                            color: '#067062',
                                        }}>{this.state.counter5}</Text>
                                        <Icon
                                            style={{marginLeft: 10}}
                                            name='plus-circle'
                                            color='#067062'
                                            onPress={() => this.increaseCounter()}
                                            size={25}
                                        />
                                    </View>

                                    <View style={{color: '#067062', marginTop: 3}}>
                                        <Text style={{fontFamily: 'Vazir-Black', color: '#555'}}> خواهر والدین مشترک
                                            (ابوینی)</Text>
                                    </View>
                                </ListItem>
                                <ListItem style={{flexDirection: 'row', justifyContent: 'space-between'}}>

                                    <View style={{flexDirection: 'row'}}>
                                        <Icon
                                            style={{marginRight: 10}}
                                            name='minus-circle'
                                            color='#067062'
                                            //  onPress={() => this.decreaseCounter1()}
                                            size={25}
                                        />
                                        <Text style={{
                                            fontFamily: 'IRANSansMobile(FaNum)',
                                            color: '#067062',
                                        }}>{this.state.counter5}</Text>
                                        <Icon
                                            style={{marginLeft: 10}}
                                            name='plus-circle'
                                            color='#067062'
                                            //  onPress={() => this.increaseCounter1()}
                                            size={25}
                                        />
                                    </View>

                                    <View style={{color: '#067062', marginTop: 3}}>
                                        <Text style={{fontFamily: 'Vazir-Black', color: '#555'}}>برادر والدین مشترک
                                            (ابوینی)</Text>
                                    </View>
                                </ListItem>
                                <ListItem style={{flexDirection: 'row', justifyContent: 'space-between'}}>

                                    <View style={{flexDirection: 'row'}}>
                                        <Icon
                                            style={{marginRight: 10}}
                                            name='minus-circle'
                                            color='#067062'
                                            onPress={() => this.decreaseCounter()}
                                            size={25}
                                        />
                                        <Text style={{
                                            fontFamily: 'IRANSansMobile(FaNum)',
                                            color: '#067062',
                                        }}>{this.state.counter5}</Text>
                                        <Icon
                                            style={{marginLeft: 10}}
                                            name='plus-circle'
                                            color='#067062'
                                            onPress={() => this.increaseCounter()}
                                            size={25}
                                        />
                                    </View>

                                    <View style={{color: '#067062', marginTop: 3}}>
                                        <Text style={{fontFamily: 'Vazir-Black', color: '#555'}}>برادر از طرف پدر
                                            (ابی)</Text>
                                    </View>
                                </ListItem>
                                <ListItem style={{flexDirection: 'row', justifyContent: 'space-between'}}>

                                    <View style={{flexDirection: 'row'}}>
                                        <Icon
                                            style={{marginRight: 10}}
                                            name='minus-circle'
                                            color='#067062'
                                            onPress={() => this.decreaseCounter()}
                                            size={25}
                                        />
                                        <Text style={{
                                            fontFamily: 'IRANSansMobile(FaNum)',
                                            color: '#067062',
                                        }}>{this.state.counter5}</Text>
                                        <Icon
                                            style={{marginLeft: 10}}
                                            name='plus-circle'
                                            color='#067062'
                                            onPress={() => this.increaseCounter()}
                                            size={25}
                                        />
                                    </View>

                                    <View style={{color: '#067062', marginTop: 3}}>
                                        <Text style={{fontFamily: 'Vazir-Black', color: '#555'}}>خواهر از طرف پدر
                                            (ابی)</Text>
                                    </View>
                                </ListItem>
                                <ListItem style={{flexDirection: 'row', justifyContent: 'space-between'}}>

                                    <View style={{flexDirection: 'row'}}>
                                        <Icon
                                            style={{marginRight: 10}}
                                            name='minus-circle'
                                            color='#067062'
                                            onPress={() => this.decreaseCounter()}
                                            size={25}
                                        />
                                        <Text style={{
                                            fontFamily: 'IRANSansMobile(FaNum)',
                                            color: '#067062',
                                        }}>{this.state.counter5}</Text>
                                        <Icon
                                            style={{marginLeft: 10}}
                                            name='plus-circle'
                                            color='#067062'
                                            onPress={() => this.increaseCounter()}
                                            size={25}
                                        />
                                    </View>

                                    <View style={{color: '#067062', marginTop: 3}}>
                                        <Text style={{fontFamily: 'Vazir-Black', color: '#555'}}> خواهر از طرف
                                            پدر(ابی) </Text>
                                    </View>
                                </ListItem>
                                <ListItem style={{flexDirection: 'row', justifyContent: 'space-between'}}>

                                    <View style={{flexDirection: 'row'}}>
                                        <Icon
                                            style={{marginRight: 10}}
                                            name='minus-circle'
                                            color='#067062'
                                            onPress={() => this.decreaseCounter()}
                                            size={25}
                                        />
                                        <Text style={{
                                            fontFamily: 'IRANSansMobile(FaNum)',
                                            color: '#067062',
                                        }}>{this.state.counter5}</Text>
                                        <Icon
                                            style={{marginLeft: 10}}
                                            name='plus-circle'
                                            color='#067062'
                                            onPress={() => this.increaseCounter()}
                                            size={25}
                                        />
                                    </View>

                                    <View style={{color: '#067062', marginTop: 3}}>
                                        <Text style={{fontFamily: 'Vazir-Black', color: '#555'}}>برادر از طرف
                                            مادر(امی)</Text>
                                    </View>
                                </ListItem>

                                <ListItem style={{flexDirection: 'row', justifyContent: 'space-between'}}>

                                    <View style={{flexDirection: 'row'}}>
                                        <Icon
                                            style={{marginRight: 10}}
                                            name='minus-circle'
                                            color='#067062'
                                            onPress={() => this.decreaseCounter()}
                                            size={25}
                                        />
                                        <Text style={{
                                            fontFamily: 'IRANSansMobile(FaNum)',
                                            color: '#067062',
                                        }}>{this.state.counter5}</Text>
                                        <Icon
                                            style={{marginLeft: 10}}
                                            name='plus-circle'
                                            color='#067062'
                                            onPress={() => this.increaseCounter()}
                                            size={25}
                                        />
                                    </View>

                                    <View style={{color: '#067062', marginTop: 3}}>
                                        <Text style={{fontFamily: 'Vazir-Black', color: '#555'}}> خواهر از طرف مادر(امی
                                            )</Text>
                                    </View>
                                </ListItem>
                                <ListItem style={{justifyContent: 'flex-end', alignItems: 'flex-end'}}>

                                    <View
                                        style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                                        <Text style={{fontFamily: 'Vazir-Black', color: '#555'}}> پدربزرگ پدری(جد ابی
                                            ) </Text>
                                        <RadioButton
                                            value="first"
                                            color='#067062'
                                            status={checked === 'first' ? 'checked' : 'unchecked'}
                                            onPress={() => {
                                                this.setState({checked: 'first'});
                                            }}/>

                                    </View>
                                </ListItem>
                                <ListItem style={{justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                                    <View
                                        style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                                        <Text style={{fontFamily: 'Vazir-Black', color: '#555'}}> مادربزرگ پدری(جد ابی
                                            )</Text>
                                        <RadioButton
                                            value="second"
                                            color='#067062'
                                            status={checked === 'second' ? 'checked' : 'unchecked'}
                                            onPress={() => {
                                                this.setState({checked: 'second'});
                                            }}/>
                                    </View>
                                </ListItem>
                                <ListItem style={{justifyContent: 'flex-end', alignItems: 'flex-end'}}>

                                    <View
                                        style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                                        <Text style={{fontFamily: 'Vazir-Black', color: '#555'}}> پدربزرگ مادری(جده امی
                                            ) </Text>
                                        <RadioButton
                                            value="first"
                                            color='#067062'
                                            status={checked === 'first' ? 'checked' : 'unchecked'}
                                            onPress={() => {
                                                this.setState({checked: 'first'});
                                            }}/>

                                    </View>


                                </ListItem>

                                <ListItem style={{justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                                    <View
                                        style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                                        <Text style={{fontFamily: 'Vazir-Black', color: '#555'}}> مادربزرگ مادری(جده
                                            امی )</Text>
                                        <RadioButton
                                            value="second"
                                            color='#067062'
                                            status={checked === 'second' ? 'checked' : 'unchecked'}
                                            onPress={() => {
                                                this.setState({checked: 'second'});
                                            }}/>
                                    </View>
                                </ListItem>
                            </CollapseBody>
                        </Collapse>

                    </Card>
                    {/* ...............طبق سوم........................ */}
                    <Card style={{
                        marginHorizontal: 25, marginRight: 15, marginLeft: 15, shadowOpacity: 0.9,
                        shadowRadius: 7.49,
                        elevation: 12, borderTopLeftRadius: 10, borderTopRightRadius: 10,
                    }}>
                        <Collapse>
                            <CollapseHeader bordered style={{
                                height: 50,
                                backgroundColor: '#067062',
                                borderTopLeftRadius: 10,
                                borderTopRightRadius: 10,
                            }}>
                                <Separator bordered style={{
                                    height: 50,
                                    backgroundColor: '#067062',
                                    borderTopLeftRadius: 10,
                                    borderTopRightRadius: 10,
                                }}>
                                    <View style={{flexDirection: 'row-reverse', justifyContent: 'space-between'}}>
                                        <Text style={{fontFamily: 'Vazir-Black', color: '#fff', marginRight: 10}}>طبق
                                            سوم وراث </Text>
                                        <Icon
                                            style={{marginRight: 10}}
                                            name='chevron-down'
                                            color='#fff'
                                            //   onPress={() => this.decreaseCounter()}
                                            size={20}
                                        />
                                    </View>
                                </Separator>
                            </CollapseHeader>
                            <CollapseBody>
                                <ListItem style={{flexDirection: 'row', justifyContent: 'space-between'}}>

                                    <View style={{flexDirection: 'row'}}>
                                        <Icon
                                            style={{marginRight: 10}}
                                            name='minus-circle'
                                            color='#067062'
                                            onPress={() => this.decreaseCounter()}
                                            size={25}
                                        />
                                        <Text style={{
                                            fontFamily: 'IRANSansMobile(FaNum)',
                                            color: '#067062',
                                        }}>{this.state.counter5}</Text>
                                        <Icon
                                            style={{marginLeft: 10}}
                                            name='plus-circle'
                                            color='#067062'
                                            onPress={() => this.increaseCounter()}
                                            size={25}
                                        />
                                    </View>

                                    <View style={{color: '#067062', marginTop: 3}}>
                                        <Text style={{fontFamily: 'Vazir-Black', color: '#555'}}> دایی والدین مشترک
                                            (ابوینی)</Text>
                                    </View>
                                </ListItem>
                                <ListItem style={{flexDirection: 'row', justifyContent: 'space-between'}}>

                                    <View style={{flexDirection: 'row'}}>
                                        <Icon
                                            style={{marginRight: 10}}
                                            name='minus-circle'
                                            color='#067062'
                                            onPress={() => this.decreaseCounter()}
                                            size={25}
                                        />
                                        <Text style={{
                                            fontFamily: 'IRANSansMobile(FaNum)',
                                            color: '#067062',
                                        }}>{this.state.counter5}</Text>
                                        <Icon
                                            style={{marginLeft: 10}}
                                            name='plus-circle'
                                            color='#067062'
                                            onPress={() => this.increaseCounter()}
                                            size={25}
                                        />
                                    </View>

                                    <View style={{color: '#067062', marginTop: 3}}>
                                        <Text style={{fontFamily: 'Vazir-Black', color: '#555'}}>خاله والدین مشترک
                                            (ابوینی)</Text>
                                    </View>
                                </ListItem>
                                <ListItem style={{flexDirection: 'row', justifyContent: 'space-between'}}>

                                    <View style={{flexDirection: 'row'}}>
                                        <Icon
                                            style={{marginRight: 10}}
                                            name='minus-circle'
                                            color='#067062'
                                            onPress={() => this.decreaseCounter()}
                                            size={25}
                                        />
                                        <Text style={{
                                            fontFamily: 'IRANSansMobile(FaNum)',
                                            color: '#067062',
                                        }}>{this.state.counter5}</Text>
                                        <Icon
                                            style={{marginLeft: 10}}
                                            name='plus-circle'
                                            color='#067062'
                                            onPress={() => this.increaseCounter()}
                                            size={25}
                                        />
                                    </View>

                                    <View style={{color: '#067062', marginTop: 3}}>
                                        <Text style={{fontFamily: 'Vazir-Black', color: '#555'}}>عمو والدین مشترک
                                            (ابوینی)</Text>
                                    </View>
                                </ListItem>
                                <ListItem style={{flexDirection: 'row', justifyContent: 'space-between'}}>

                                    <View style={{flexDirection: 'row'}}>
                                        <Icon
                                            style={{marginRight: 10}}
                                            name='minus-circle'
                                            color='#067062'
                                            onPress={() => this.decreaseCounter()}
                                            size={25}
                                        />
                                        <Text style={{
                                            fontFamily: 'IRANSansMobile(FaNum)',
                                            color: '#067062',
                                        }}>{this.state.counter5}</Text>
                                        <Icon
                                            style={{marginLeft: 10}}
                                            name='plus-circle'
                                            color='#067062'
                                            onPress={() => this.increaseCounter()}
                                            size={25}
                                        />
                                    </View>

                                    <View style={{color: '#067062', marginTop: 3}}>
                                        <Text style={{fontFamily: 'Vazir-Black', color: '#555'}}>عمه والدین مشترک
                                            (ابوینی)</Text>
                                    </View>
                                </ListItem>
                                <ListItem style={{flexDirection: 'row', justifyContent: 'space-between'}}>

                                    <View style={{flexDirection: 'row'}}>
                                        <Icon
                                            style={{marginRight: 10}}
                                            name='minus-circle'
                                            color='#067062'
                                            onPress={() => this.decreaseCounter()}
                                            size={25}
                                        />
                                        <Text style={{
                                            fontFamily: 'IRANSansMobile(FaNum)',
                                            color: '#067062',
                                        }}>{this.state.counter}</Text>
                                        <Icon
                                            style={{marginLeft: 10}}
                                            name='plus-circle'
                                            color='#067062'
                                            onPress={() => this.increaseCounter()}
                                            size={25}
                                        />
                                    </View>

                                    <View style={{color: '#067062', marginTop: 3}}>
                                        <Text style={{fontFamily: 'Vazir-Black', color: '#555'}}>دایی پدر مشترک
                                            (ابی)</Text>
                                    </View>
                                </ListItem>
                                <ListItem style={{flexDirection: 'row', justifyContent: 'space-between'}}>

                                    <View style={{flexDirection: 'row'}}>
                                        <Icon
                                            style={{marginRight: 10}}
                                            name='minus-circle'
                                            color='#067062'
                                            onPress={() => this.decreaseCounter()}
                                            size={25}
                                        />
                                        <Text style={{
                                            fontFamily: 'IRANSansMobile(FaNum)',
                                            color: '#067062',
                                        }}>{this.state.counter}</Text>
                                        <Icon
                                            style={{marginLeft: 10}}
                                            name='plus-circle'
                                            color='#067062'
                                            onPress={() => this.increaseCounter()}
                                            size={25}
                                        />
                                    </View>

                                    <View style={{color: '#067062', marginTop: 3}}>
                                        <Text style={{fontFamily: 'Vazir-Black', color: '#555'}}>خاله پدر مشترک
                                            (ابی)</Text>
                                    </View>
                                </ListItem>
                                <ListItem style={{flexDirection: 'row', justifyContent: 'space-between'}}>

                                    <View style={{flexDirection: 'row'}}>
                                        <Icon
                                            style={{marginRight: 10}}
                                            name='minus-circle'
                                            color='#067062'
                                            onPress={() => this.decreaseCounter()}
                                            size={25}
                                        />
                                        <Text style={{
                                            fontFamily: 'IRANSansMobile(FaNum)',
                                            color: '#067062',
                                        }}>{this.state.counter}</Text>
                                        <Icon
                                            style={{marginLeft: 10}}
                                            name='plus-circle'
                                            color='#067062'
                                            onPress={() => this.increaseCounter()}
                                            size={25}
                                        />
                                    </View>

                                    <View style={{color: '#067062', marginTop: 3}}>
                                        <Text style={{fontFamily: 'Vazir-Black', color: '#555'}}>عموی پدر مشترک
                                            (ابی)</Text>
                                    </View>
                                </ListItem>
                                <ListItem style={{flexDirection: 'row', justifyContent: 'space-between'}}>

                                    <View style={{flexDirection: 'row'}}>
                                        <Icon
                                            style={{marginRight: 10}}
                                            name='minus-circle'
                                            color='#067062'
                                            onPress={() => this.decreaseCounter()}
                                            size={25}
                                        />
                                        <Text style={{
                                            fontFamily: 'IRANSansMobile(FaNum)',
                                            color: '#067062',
                                        }}>{this.state.counter}</Text>
                                        <Icon
                                            style={{marginLeft: 10}}
                                            name='plus-circle'
                                            color='#067062'
                                            onPress={() => this.increaseCounter()}
                                            size={25}
                                        />
                                    </View>

                                    <View style={{color: '#067062', marginTop: 3}}>
                                        <Text style={{fontFamily: 'Vazir-Black', color: '#555'}}> عمه پدر مشترک
                                            (ابی) </Text>
                                    </View>
                                </ListItem>
                                <ListItem style={{flexDirection: 'row', justifyContent: 'space-between'}}>

                                    <View style={{flexDirection: 'row'}}>
                                        <Icon
                                            style={{marginRight: 10}}
                                            name='minus-circle'
                                            color='#067062'
                                            onPress={() => this.decreaseCounter()}
                                            size={25}
                                        />
                                        <Text style={{
                                            fontFamily: 'IRANSansMobile(FaNum)',
                                            color: '#067062',
                                        }}>{this.state.counter}</Text>
                                        <Icon
                                            style={{marginLeft: 10}}
                                            name='plus-circle'
                                            color='#067062'
                                            onPress={() => this.increaseCounter()}
                                            size={25}
                                        />
                                    </View>

                                    <View style={{color: '#067062', marginTop: 3}}>
                                        <Text style={{fontFamily: 'Vazir-Black', color: '#555'}}>دایی مادر
                                            مشترک(امی)</Text>
                                    </View>
                                </ListItem>
                                <ListItem style={{flexDirection: 'row', justifyContent: 'space-between'}}>

                                    <View style={{flexDirection: 'row'}}>
                                        <Icon
                                            style={{marginRight: 10}}
                                            name='minus-circle'
                                            color='#067062'
                                            onPress={() => this.decreaseCounter()}
                                            size={25}
                                        />
                                        <Text style={{
                                            fontFamily: 'IRANSansMobile(FaNum)',
                                            color: '#067062',
                                        }}>{this.state.counter}</Text>
                                        <Icon
                                            style={{marginLeft: 10}}
                                            name='plus-circle'
                                            color='#067062'
                                            onPress={() => this.increaseCounter()}
                                            size={25}
                                        />
                                    </View>

                                    <View style={{color: '#067062', marginTop: 3}}>
                                        <Text style={{fontFamily: 'Vazir-Black', color: '#555'}}>خاله مادر
                                            مشترک(امی)</Text>
                                    </View>
                                </ListItem>
                                <ListItem style={{flexDirection: 'row', justifyContent: 'space-between'}}>

                                    <View style={{flexDirection: 'row'}}>
                                        <Icon
                                            style={{marginRight: 10}}
                                            name='minus-circle'
                                            color='#067062'
                                            onPress={() => this.decreaseCounter()}
                                            size={25}
                                        />
                                        <Text style={{
                                            fontFamily: 'IRANSansMobile(FaNum)',
                                            color: '#067062',
                                        }}>{this.state.counter}</Text>
                                        <Icon
                                            style={{marginLeft: 10}}
                                            name='plus-circle'
                                            color='#067062'
                                            onPress={() => this.increaseCounter()}
                                            size={25}
                                        />
                                    </View>

                                    <View style={{color: '#067062', marginTop: 3}}>
                                        <Text style={{fontFamily: 'Vazir-Black', color: '#555'}}>عموی مادر
                                            مشترک(امی)</Text>
                                    </View>
                                </ListItem>
                                <ListItem style={{flexDirection: 'row', justifyContent: 'space-between'}}>

                                    <View style={{flexDirection: 'row'}}>
                                        <Icon
                                            style={{marginRight: 10}}
                                            name='minus-circle'
                                            color='#067062'
                                            onPress={() => this.decreaseCounter()}
                                            size={25}
                                        />
                                        <Text style={{
                                            fontFamily: 'IRANSansMobile(FaNum)',
                                            color: '#067062',
                                        }}>{this.state.counter}</Text>
                                        <Icon
                                            style={{marginLeft: 10}}
                                            name='plus-circle'
                                            color='#067062'
                                            onPress={() => this.increaseCounter()}
                                            size={25}
                                        />
                                    </View>

                                    <View style={{color: '#067062', marginTop: 3}}>
                                        <Text style={{fontFamily: 'Vazir-Black', color: '#555'}}>عمه مادر
                                            مشترک(امی)</Text>
                                    </View>
                                </ListItem>
                            </CollapseBody>
                        </Collapse>

                    </Card>
                    <Card style={{
                        flex: 1,
                        backgroundColor: '#fff',
                        height: 60,
                        width: '90%',
                        alignSelf: 'center',
                        justifyContent: 'space-between',
                        marginTop: 20,
                        borderRadius: 10,
                        shadowOpacity: 0.9,
                        shadowRadius: 7.49,
                        elevation: 12,
                        marginBottom: 50,
                    }}>
                        <View style={{flexDirection: 'row', marginTop: 15}}>
                            <View style={stylesInheritance.inputContainer}>
                                <TextInput style={stylesInheritance.inputs}

                                           keyboardType='number-pad'
                                           underlineColorAndroid='transparent'
                                           onChangeText={(email) => this.setState({email})}/>
                            </View>
                            <Text style={{fontSize: 13, color: '#555', fontFamily: 'IRANSansMobile(FaNum)_Bold'}}>قیمت
                                ارثیه به ریال :</Text>
                        </View>
                    </Card>

                </ScrollView>
                <Button buttonStyle={{
                    marginHorizontal: 20, marginVertical: 20, backgroundColor: '#067062', borderRadius: 10, height: 45,
                    shadowColor: '#067062',
                    shadowOffset: {
                        width: 0,
                        height: 6,
                    },
                    shadowOpacity: 0.37,
                    shadowRadius: 7.49,
                    elevation: 12,

                }}
                        onPress={() => this.props.navigation.navigate('sel')}
                        titleStyle={{color: '#fff', fontFamily: 'IRANSansMobile_Bold'}}

                        title="محاسبه"
                />
            </View>
        );
    }
}
