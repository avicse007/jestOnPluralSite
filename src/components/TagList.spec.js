import React from "react";
import TagList from "./TagsList";
import rendrer from "react-test-renderer";

describe('The tagList', ()=>{
    it('render as expected',()=>{
        const tree = rendrer
        .create(<TagList tags ={['css','html','shift']}/>)
        .toJSON();
        console.log(tree);
        expect(tree).toMatchSnapshot();

    });
} );