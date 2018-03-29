import * as React from "react";
import TestInterface from './testInterface'

// It does not work with the old import
//import React, { Component } from 'react';

export default class TestComponent extends React.Component<TestInterface, {}> {
    constructor (props: TestInterface){
        super(props);
    }

    render() {
        return (
            <div>
                <h1>React Component with Typescript</h1>
                <div>
                    <h2>Passing props using TestInterface </h2>
                    <h3>Name: {this.props.name}</h3>
                    <h3>Phone Number: {this.props.phoneNumber}</h3>
                    <h3>Date of Birthday: {this.props.dateOfBirthday.toDateString()}</h3>
                </div>
            </div>
        );
    }
}