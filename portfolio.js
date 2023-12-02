function solve() {
  const profBackgroundBtn = document.getElementById("prof_backgroundBtn");
  const skillsBtn = document.getElementById("skillsBtn");
  const passionBtn = document.getElementById("passionBtn");
  const goalsBtn = document.getElementById("goalsBtn");
  const valuesBtn = document.getElementById("valuesBtn");

  profBackgroundBtn.addEventListener("click", showMoreHandler);
  skillsBtn.addEventListener("click", showMoreHandlerSkills);
  passionBtn.addEventListener("click", showMoreHandlerPassion);
  goalsBtn.addEventListener("click", showMoreHandlerGoals);
  valuesBtn.addEventListener("click", showMoreHandlerValues);
  //showCertBtn.addEventListener("click", showCertificates);

  //profBackgroundBtn.addEventListener("click", showLessHandler);

  function showMoreHandler() {
    const firstMoreElement = document.getElementById("firstMore");
    if (profBackgroundBtn.textContent === "Show less") {
      profBackgroundBtn.textContent = "Show more";
      firstMoreElement.style.display = "none";
    } else {
      firstMoreElement.style.display = "inline-block";
      profBackgroundBtn.textContent = "Show less";
    }
  }

  function showMoreHandlerSkills() {
    const secondMoreElement = document.getElementById("secondMore");
    if (skillsBtn.textContent === "Show less") {
      skillsBtn.textContent = "Show more";
      secondMoreElement.style.display = "none";
    } else {
      secondMoreElement.style.display = "inline-block";
      skillsBtn.textContent = "Show less";
    }
  }

  function showMoreHandlerPassion() {
    const thirdMoreElement = document.getElementById("thirdMore");
    if (passionBtn.textContent === "Show less") {
      passionBtn.textContent = "Show more";
      thirdMoreElement.style.display = "none";
    } else {
      thirdMoreElement.style.display = "inline-block";
      passionBtn.textContent = "Show less";
    }
  }

  function showMoreHandlerGoals() {
    const fourthMoreElement = document.getElementById("fourthMore");
    if (goalsBtn.textContent === "Show less") {
      goalsBtn.textContent = "Show more";
      fourthMoreElement.style.display = "none";
    } else {
      fourthMoreElement.style.display = "inline-block";
      goalsBtn.textContent = "Show less";
    }
  }

  function showMoreHandlerValues() {
    const fifthMoreElement = document.getElementById("fifthMore");
    if (valuesBtn.textContent === "Show less") {
      valuesBtn.textContent = "Show more";
      fifthMoreElement.style.display = "none";
    } else {
      fifthMoreElement.style.display = "inline-block";
      valuesBtn.textContent = "Show less";
    }
  }
}

solve();
