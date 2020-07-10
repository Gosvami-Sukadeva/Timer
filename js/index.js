class Timer {
  constructor() {
    this.hoursInput = null;
    this.minutesInput = null;
    this.secondsInput = null;
    this.editBtn = null;
    this.runBtn = null;
    this.rerunBtn = null;
    this.timerInputs = null;
    this.audio = null;
    this.alarm = null;

    this.isEdit = true;

    this.UiSelectors = {
      hours: "hours",
      minutes: "minutes",
      seconds: "seconds",
      edit: "[data-edit]",
      run: "[data-run]",
      rerun: "[data-rerun]",
      timeInput: "[data-timer-input]",
      audio: "[data-audio]",
      alarm: "[data-alarm]",
    };
  }
  initializeTimer() {
    this.hoursInput = document.getElementById(this.UiSelectors.hours);
    this.minutesInput = document.getElementById(this.UiSelectors.minutes);
    this.secondsInput = document.getElementById(this.UiSelectors.seconds);

    this.editBtn = document.querySelector(this.UiSelectors.edit);
    this.runBtn = document.querySelector(this.UiSelectors.run);
    this.rerunBtn = document.querySelector(this.UiSelectors.rerun);
    this.timerInputs = document.querySelectorAll(this.UiSelectors.timeInput);
    this.audio = document.querySelector(this.UiSelectors.audio);
    this.alarm = document.querySelector(this.UiSelectors.alarm);
  }

  addEventListeners() {
    this.editBtn.addEventListener("click", () => this.editTime());
  }

  editTime() {
    this.isEdit = !this.isEdit;

    if (this.isEdit) {
      this.editBtn
        .querySelector("use")
        .setAttribute("xlink:href", "./assets/icons/sprite.svg#done-24px");
      return;
    }
    this.editBtn
      .querySelector("use")
      .setAttribute("xlink:href", "./assets/icons/sprite.svg#create-24px");
  }
}
