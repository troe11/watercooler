import React, { Component } from "react";
import Container from '../components/Container';
// import Footer from '../components/Footer';
import Header from '../components/Header';
import Jumbotron from '../components/Jumbotron';
import { JobSelect } from '../components/JobSelect';

class Create extends Component {


    render(){
        return (
            <Container>
                <Header />
                <Jumbotron>
                    <h1>Enter your story below</h1>
                    <h2>Choose a Job Category</h2>
                    <JobSelect />
                </Jumbotron>

            </Container>
        )
    }
}

export default Create;