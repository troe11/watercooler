import React, { Component } from "react";
import Container from '../components/Container';
import Createstory from '../components/Createstory';
import Feed from '../components/Feed';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Jumbotron from '../components/Jumbotron';
import Searchinput from '../components/Searchinput';
//Obviously don't need all of these for just the landing page
//Header/Navbar, Jumbotron explaining what the page is
//Footer with creator info
//Where should we put the links to Sign-in/Log-in? Header/Navbar?

class Landing extends Component {


    render() {
        return (
            <Container>
                <Header/>
                <Jumbotron>
                    <h1>Your Best and Worst Job Stories</h1>
                    
                </Jumbotron>
                <Footer />
            </Container>
        )
    };
}