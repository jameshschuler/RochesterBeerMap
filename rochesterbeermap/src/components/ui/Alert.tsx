import React from "react";

interface AlertProps {
  message: string;
  type: string;
}

const Alert: React.FC<AlertProps> = ({ message, type }) => {
  let content: any;
  switch (type) {
    case "SUCCESS":
      content = (
        <div className="card-panel green lighten-4 green-text text-darken-4">
          <b>Success!</b> This alert box indicates a successful or positive
          action.
        </div>
      );
      break;
    case "INFO":
      content = (
        <div className="card-panel blue lighten-4 blue-text text-darken-4">
          <b>Info!</b> {message}
        </div>
      );
      break;
    case "WARN":
      content = (
        <div className="card-panel yellow lighten-4 yellow-text text-darken-4">
          <b>Warning!</b> This alert box indicates a warning that might need
          attention.
        </div>
      );
      break;
    case "DANGER":
      content = (
        <div className="card-panel red lighten-4 red-text text-darken-4">
          <b>Danger!</b> This alert box indicates a dangerous or potentially
          negative action.
        </div>
      );
      break;
    default:
      content = <div />;
      break;
  }

  return content;
};

export default Alert;

/**
 * TODO:
 * .close {
        position: absolute;
        top: 50%;
        right: 0.5rem;

        color: inherit;
        margin-top: -18px;
    }
 * $('.alert').append('<button class="waves-effect btn-flat close"><i class="material-icons">close</i></button>');

$('body').on('click', '.alert .close', function() {
    $(this).parent().fadeOut(300, function() {
        $(this).remove();
    });
});
 */
