import React, {useState} from 'react';
import {ScrollView, ActivityIndicator, RefreshControl } from 'react-native';
import propTypes from 'prop-types';

const ScrollContainer = ({loading, children, contentContainerStyle, refreshFn}) => {
    const [refreshing, setRefreshing] = useState(false);
    const onRefresh = async() => {
        setRefreshing(true);
        await refreshFn();
        setRefreshing(false);
    }
    return (
    <ScrollView 
        refreshControl={<RefreshControl onRefresh={onRefresh} refreshing={refreshing} tintColor={"white"}/>}
        style={{backgroundColor: "black"}}
        contentContainerStyle={{ 
            flex: loading? 1:0,
            justifyContent: loading ? "center": "flex-start", 
            ...contentContainerStyle}}
        >
        {loading ? <ActivityIndicator color="white" size="small"/>: children }
    </ScrollView>
    )
    
}

ScrollContainer.propTypes={
    loading: propTypes.bool.isRequired,
    children: propTypes.node.isRequired,
    contentContainerStyle: propTypes.object,
    refreshFn: propTypes.func
}

export default ScrollContainer;