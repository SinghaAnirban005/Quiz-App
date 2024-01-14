const questions = [
  {
    question : "Which of the following animals are true coelomates with bilateral symmetry ?",
    answer : [
      {text: "Annelids", correct: true},
      {text: "Adult_Echinoderms", correct: false},
      {text: "Aschelminthes", correct: false},
      {text: "PLatyhrlminthes", correct: false},
    ]
   
  },
  {
    question: "Which of the following animal does not undergo metamorphosis ?",
    answer: [
      {text: "Earthworms", correct: true},
      {text: "Tunicate", correct: false},
      {text: "Starfish", correct: false},
      {text: "Moth", correct: false},
    ]
  },
  {
    question: "Which of the following features is not present in Phylum-Arthropoda ?",
    answer: [
      {text: "Jointed_Appendages", correct: false},
      {text: "Chitinous Exoskeleton", correct: false},
      {text: "Metameric segentation", correct: false},
      {text: "Paropodia", correct: true},
    ]
  },
  {
    question: "Select the Taxon mentioned that represents both marine and fresh water species ?",
    answer: [
      {text: "Echinoderms", correct: false},
      {text: "Ctenophora", correct: false},
      {text: "Cephalochordata", correct: false},
      {text: "Cnidaria", correct: true},
    ]
  },
  {
    question: "In Bougainvillea, thorns are the modifications of ?",
    answer: [
      {text: "stipules" ,correct: false},
      {text: " leaf" ,correct: false},
      {text: "stem" ,correct: true},
      {text: "adventitious root" ,correct: false},
    ]
  },
  {
    question: "The wheat grain has an embryo with one large, shield-shaped cotyledon known as ?",
    answer: [
      {text: "Coleorhiza" ,correct: false},
      {text: "Coleoptile" ,correct: false},
      {text: "Epiblast" ,correct: false},
      {text: "Scutellum" ,correct: true},
    ]
  },
  {
    question: "This is a correct statement ?",
    answer: [
      {text: "A sterile pistil is called a staminode" ,correct: false},
      {text: "A proteinaceous aleurone layer is present in maize grain" ,correct: true},
      {text: "Mango is a parthenocarpic fruit" ,correct: false},
      {text: "The seed in grasses is not endospermic" ,correct: false},
    ]
  }

]

const question = document.querySelector(".question");
const ans_btn = document.querySelector(".btn");
const next_btn = document.querySelector(".next");

let index = 0;
let score = 0;

function startQuiz () {
    index = 0;
    score = 0;

    next_btn.innerHTML = "NEXT";
    showQuestions();
}

function showQuestions(){
  resetstate();
  let currentQuestion = questions[index];
  let questionNo = index + 1;

  question.innerHTML = questionNo + ") " + currentQuestion.question;

  currentQuestion.answer.forEach(answers => {
        const button = document.createElement("button");
        button.innerHTML = answers.text;
        button.classList.add("btn");
        options.appendChild(button); 

        if(answers.correct){
          button.dataset.correct = answers.correct;
          
        }
        button.addEventListener("click", selectanswers);
        
  } );
  

}


function selectanswers(e){
  const selectedbtn = e.target;
  const iscorrect = selectedbtn.dataset.correct === "true";
  if(iscorrect){
    selectedbtn.classList.add("green");
    score++;
  }
  else{
    selectedbtn.classList.add("red");
  }
  Array.from(options.children).forEach(button => {
    if(button.dataset.corect === "true"){
      button.classList.add("correct");
      
    }
    button.disabled = true;
  });
  next_btn.style.display = "block";
}

function showscore(){
  resetstate();
  question.innerHTML = `You scored ${score} out of ${questions.length} `;
  next_btn.innerHTML = "PLAY AGAIN 😀";
  next_btn.style.display =  "block";
  
}

function handlenext(){
    index++;
    if(index < questions.length){
      showQuestions();
    }
    else{
      showscore();
    }
}

next_btn.addEventListener("click", () => {
  if(index < questions.length){
    handlenext();
  }
  else{
    startQuiz();
  }
})

function resetstate(){
  next_btn.style.display = "none";
  while(options.firstChild){
    options.removeChild(options.firstChild);
  }
}

startQuiz();

