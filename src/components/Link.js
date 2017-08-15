import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import { View, Button,Text } from 'react-native';

const Link = ({ active, children, onClick }) => {

    if (active) {
        return <Text>{children}</Text>
    }

    return (

        <Button href="#"
           onPress={e => {
               e.preventDefault()
               onClick()
           }}
                title={children}
        />
    )
}

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Link;
