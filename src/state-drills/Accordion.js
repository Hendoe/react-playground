import React from 'react';




  //this.sections.[2]
  //set hidden based on 


//classname dependednt on if clicked = true or false 
class Accordion extends React.Component{

    static defaultProps = { sections : []};

    state = {
        activeSectionIndex: null

    };

    handleButtonClick(index){
        this.setState({activeSectionIndex : index})
    }

    render() {

        const buttons = this.props.sections.map((section, index) => (
                <li>
                <button key={index} onClick={this.handleButtonClick}>
                    {section.title}
                </button>
                </li> 
        ));
        const currentSection = this.props.sections[0];
        return (
                <ul>
                   {buttons}
                   { }
                   {this.props.sections.length && (
                   <div className ='content'>
                       {currentSection.content}
                   </div>
                   )}
                </ul>
            
        )
    }


    

//prop named sections
//object containing title and content each





}













export default {
    Accordion
};