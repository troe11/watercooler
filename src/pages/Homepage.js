import React, { Component } from "react";
import {Container, Feed, Header, Jumbotron, Footer} from '../components';

class Homepage extends Component {

    render(){
        return (
            <Container fluid>
                <Header />
                <Jumbotron>
                </Jumbotron>
                <Feed />
                <Footer />
            </Container>
        )
    }
}

export default Homepage;