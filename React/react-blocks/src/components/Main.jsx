import React, { Component } from 'react'
import Advertisement from './Advertisment'
import SubContents from './SubContents'


class Main extends Component {
    render() {
        return (
            <fieldset className='main'>
                <legend>Main</legend>
                <div className='flex'>
                    <SubContents />
                    <SubContents />
                    <SubContents />
                </div>
                <div>
                    <Advertisement />
                </div>
            </fieldset>
            
        )
    }
}

export default Main