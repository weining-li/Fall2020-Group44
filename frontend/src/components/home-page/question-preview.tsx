import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./question-preview.scss";
import { store } from "../../store";
import MultipleChoice from "./question-types/multiple-choice";

const QuestionPreview = () => {
  const global = useContext(store) as any;
  const dispatch = global.dispatch;
  const state = global.state;

  const [showPreviewResponse, setShowPreviewResponse] = useState(false);
  const [showCorrectPreviewResponse, setShowCorrectPreviewResponse] = useState(
    false
  );

  const toggleShowResponse = () => {
    setShowPreviewResponse(!showPreviewResponse);
  };

  const toggleShowCorrectResponse = () => {
    setShowCorrectPreviewResponse(!showCorrectPreviewResponse);
  };

  const toggleEditQuestion = () => {
    dispatch({ type: "edit-preview-question" });
  };

  const editQuestion = (event: any) => {
    // const newQuestions = state.questions.slice();
    // newQuestions[state.previewFolder].questions[state.previewQuestion].title =
    // 	event.target.value;

    // dispatch({ type: 'edit-preview-question', payload: newQuestions });
    console.log("editQuestion");
  };

  const deleteQuestion = () => {
    // const newQuestions = state.questions.slice();
    // newQuestions[state.previewFolder].questions.splice(
    // 	state.previewQuestion,
    // 	1,
    // );
    // if (newQuestions[state.previewFolder].questions.length < 1) {
    // 	newQuestions.splice(state.previewFolder, 1);
    // }

    // dispatch({ type: 'delete-preview-question', payload: newQuestions });
    console.log("deleteQuestion");
  };

  const previewQuestion =
    state.questions[state.previewFolder].questions[state.previewQuestion];

  return previewQuestion ? (
    <div className="question-preview">
      <span className="question-title">{previewQuestion.question}?</span>
      <div className="response-buttons">
        <button
          className="show-correct-response"
          onClick={toggleShowCorrectResponse}
        >
          Show Correct Response <span>&#10003;</span>
        </button>
        <button className="see-responses" onClick={toggleShowResponse}>
          See Responses
        </button>
      </div>
      <div className="answer-choice-wrapper">
        <MultipleChoice
          answers={previewQuestion.choices}
          correct={previewQuestion.correct}
          responses={["20%", "30%", "50%"]}
          showPreviewResponse={showPreviewResponse}
          showCorrectPreviewResponse={showCorrectPreviewResponse}
        />
      </div>
      <div className="option-buttons">
        <button className="present-button">
          <Link to="/poll/present">&#9658; Present</Link>
        </button>
        <button className="edit-button" onClick={toggleEditQuestion}>
          <Link to="/create">Edit</Link>
        </button>
        <button className="delete-button" onClick={deleteQuestion}>
          Delete
        </button>
      </div>
    </div>
  ) : (
    <div></div>
  );
};

export default QuestionPreview;
