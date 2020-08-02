import React from 'react';
import Title from './Title';
import {ScrollView} from 'react-native';
import propTypes from 'prop-types';

const HorizontalSlide = ({title, children}) => (
    <>
    <Title title={title}/>
    <ScrollView style= {{backgroundColor: "black", marginTop: 20, marginBottom: 30}} 
                contentContainerStyle={{paddingLeft: 20}}
                horizontal showsVerticalScrollIndicator={false}>
    {children}
    </ScrollView>
    </>
)

HorizontalSlide.propTypes = {
    title: propTypes.string.isRequired,
    children: propTypes.node.isRequired,
}

export default HorizontalSlide;