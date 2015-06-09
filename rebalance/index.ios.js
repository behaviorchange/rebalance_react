/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView
} = React;


var WELLNESS_SOURCES = [
    { name: 'exercise' },
    { name: 'diet/nutrition' },
    { name: 'time in nature' },
    { name: 'relationships' },
    { name: 'recreation/play' },
    { name: 'relaxation + stress management' },
    { name: 'religious/spiritual involvement' },
    { name: 'contribution + service' }
];

var rebalance = React.createClass({
    render: function() {
        return (
            <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderWellnessSource}
            style={styles.listView}
            />
        );
    },

    getInitialState: function() {
        return {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
            }),
            wellnessSources: null,            
        }
    },

    componentDidMount: function() {
        this.getWellness();
    },

    getWellness: function() {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(WELLNESS_SOURCES)
        });
    },

    renderWellnessSource: function(wellnessSource) {
        return (
            <View style={styles.container}>
            <Text style={styles.wellnessName}>{wellnessSource.name}</Text>
            </View>
        );
    }

});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        flexDirection: 'row',
    }
});

AppRegistry.registerComponent('rebalance', () => rebalance);
