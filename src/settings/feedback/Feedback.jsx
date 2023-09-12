import { useState } from "react";
import "../settings.css";
import { useDispatch, useSelector } from "react-redux";
import { feedbackAsync } from "../../store/settingActions";
import { toast } from "react-toastify";
import { CircularProgress } from "@mui/material";

const Feedback = () => {
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);
  const [content, setContent] = useState({
    subject: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false); // Initialize isLoading state

  const feedback_submit = () => {
    if (!content.subject.trim() || !content.message.trim()) {
      toast.error("Subject and message are required.");
      return;
    }
    setIsLoading(true); // Set isLoading to true when submitting

    dispatch(
      feedbackAsync(
        auth.user.token,
        {
          subject: content.subject,
          message: content.message,
        },
        (msg) => {
          toast.success(msg.detail);
          setContent({
            subject: "",
            message: "",
          });
          setIsLoading(false); // Set isLoading back to false on success
        },
        (err) => {
          toast.error(err.detail);
          setIsLoading(false); // Set isLoading back to false on error
        }
      )
    );
  };

  const handleSubjectChange = (e) => {
    setContent({
      ...content,
      subject: e.target.value,
    });
  };

  const handleMessageChange = (e) => {
    setContent({
      ...content,
      message: e.target.value,
    });
  };

  return (
    <div>
      <div
        className="feedback_form"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div className="feedback_form_body">
          <h3 className="feed_form">Feedback</h3>
          <input
            type="text"
            className="feedinp"
            value={content.subject}
            onChange={handleSubjectChange}
            style={{
              backgroundColor: "white",
              border: "1px solid black",
              padding: "0.5rem 1rem",
              outline: "none",
            }}
          />
          <textarea
            name="text"
            className="feedtxt"
            id=""
            cols="30"
            rows="10"
            value={content.message}
            onChange={handleMessageChange}
            style={{
              backgroundColor: "white",
              border: "1px solid black",
              padding: "0.5rem 1rem",
              outline: "none",
              borderRadius: "10px",
            }}
          ></textarea>
          <button
            className="feed_btn"
            onClick={feedback_submit}
            disabled={isLoading} // Disable the button when loading
          >
            {isLoading ? <CircularProgress size={20} /> : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
