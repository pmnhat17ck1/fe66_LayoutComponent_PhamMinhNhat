import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer className="bg-dark text-white mt-4" style={{height:80,display:'flex',justifyContent:'center',alignItems:'center'}}>
                Copyright © Your Website 2021
            </footer>
        )
    }
}
