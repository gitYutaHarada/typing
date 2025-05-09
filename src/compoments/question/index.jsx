export const Question = () => {
  return (
    <div>
      <div class="question">
        <span id="entry" className={classes.marker}></span>
        <span id="remained">JavaScript</span>
      </div>
      <input type="text" className="text" id="inputText"></input>
    </div>
  );
};
