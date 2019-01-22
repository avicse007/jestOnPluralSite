import {mapStateToProps,QuestionDetailDisplay} from '../QuestionDetail.jsx';
import Renderer from "react-test-renderer";
import React from "react";


describe('The question details ',()=>{
    describe('The conatiner Element',()=>{
        describe("mapStateToProp",()=>{
            it("should map the state to prop correctly",()=>{
                const sampleQuestion = {
                    question_id: 42,
                    body: "Space is big"
                };
                const appState = {
                    questions:[sampleQuestion]
                };
                const ownProps = {
                        question_id:42
                };
                const componentState = mapStateToProps(appState,ownProps);
                console.log(componentState);
                expect(componentState).toEqual(sampleQuestion);
            });
        });
    });
    describe("The display Element ",()=>{
        it('should not regress',()=>{
            const tree = Renderer.create(
            <QuestionDetailDisplay
                title="Naming of life"
                body ="42"
                answer_count = {0}
                tags={["Hello"]}
            />);
            expect(tree.toJSON()).toMatchSnapshot();
        });

    });
   

});