
var button = document.getElementById('button').disabled = "true";
var rbutton = document.getElementById('restartbutton');
rbutton.style.display = 'none';
var correct = 0;
var crt = document.getElementById('crt');
crt.innerHTML = correct;
var state = 0;


var ques = [
    {
        "question" :"Q- The ‘Half-Earth Project’, recently in the news, is related to",
        "options" : ["The sixth mass extinction " , "	Good governance " , "Free trade " , "	Nuclear non-proliferation "],
        "answer" : "The sixth mass extinction "
    },
    {
        "question" :"Q- The World Investment Report is annually published by ",
        "options" : ["World Bank " , "Organisation for Economic Cooperation and Development" , "WTO" , "UNCTAD"],
        "answer" : "UNCTAD"
    },
    {
        "question" :"Q-Oil paint is a type of slow-drying paint that consists of particles of pigment suspended in a drying oil. The commonly used oil in these oil paintings is",
        "options" : ["Kerosene " , "Linseed oil" , "Sunflower oil " , "	Mustard oil "],
        "answer" : "Linseed oil"
    },
    {
        "question" :"Q- Which of the following planets rotates clockwise?  ",
        "options" : ["Jupiter" ,"Neptune", "Venus" , "None"],
        "answer" : "Venus"
    },
    {
        "question" :"Q- Who has the most Olympic medals of all colours in history? ",
        "options" : ["Michael Phelps(USA)" , "Jenny Thompson(USA)" , "Larisa Latynina(USSR)" , "None of these"],
        "answer" : "Michael Phelps(USA)"
    },
    {
        "question" :"Q-Which beach in Asia is the first one to get Blue Flag certification? ",
        "options" : ["Kovalam beach " , "	Marari beach " , "Anjuna beach " , "Chandrabhaga beach "],
        "answer" : "Chandrabhaga beach "
    },
    {
        "question" :"Q-GST Council is a",
        "options" : ["Statutory body" , "Constitutional body" , "Executive Body " , "Extra –Constitutional body "],
        "answer" : "Constitutional body"
    },
    {
        "question" :"Q-Under GST, transporters should carry an e Way Bill when moving goods from one place to another if the goods worth is more than:",
        "options" : ["	INR 10,000 " , "	INR 25,000 " , "INR 50,000 " , "INR 1,00,000"],
        "answer" : "INR 50,000 "
    },
    {
        "question" :"Q-Nipah virus recently in news is transmitted through",
        "options" : ["Animal to human only." , "Human to human only." ,"Both Animal to human and human to human." , "Can’t be transmitted. "],
        "answer" : "Both Animal to human and human to human."
    },
    {
        "question" :"Who is the founder of Snapchat?",
        "options" : ["Dong Nguyen" , "Kevin Systrom" , "Evan Spiegel" , "None of these"],
        "answer" : "Evan Spiegel"
    }

    

];

function wrongAttempt()
{
    btn.setAttribute("class" , "btn btn-danger btn-lg");
            btn.innerHTML = "Wrong Attempt"
            selectOption1.classList.add("readonly");
            selectOption2.classList.add("readonly");
            selectOption3.classList.add("readonly");
            selectOption4.classList.add("readonly");

            rbutton.style.display = 'block';
}

        function btnTimer()
        {
            btn.setAttribute("class" , "btn btn-success btn-lg");
           btn.innerHTML = "Nice Attempt";
        }
        function btnTimer1()
        {
            btn.setAttribute("class" , "btn btn-primary btn-lg");
           btn.innerHTML = "Result";
        }

         function backtransparent1()
        {
            selectOption1.style.backgroundColor = "transparent";
        }

        function backgreen1()
        {
            selectOption1.style.backgroundColor = "green";
        }

       
        function backred1()
        {
            selectOption1.style.backgroundColor = "red";
        }
        function backtransparent2()
        {
            selectOption2.style.backgroundColor = "transparent";
        }
        function backgreen2()
        {
            selectOption2.style.backgroundColor = "green";
        }

      
        function backred2()
        {
            selectOption2.style.backgroundColor = "red";
        }
        function backgreen3()
        {
            selectOption3.style.backgroundColor = "green";
        }
        function backtransparent3()
        {
            selectOption3.style.backgroundColor = "transparent";
        }
      
        function backred3()
        {
            selectOption3.style.backgroundColor = "red";
        }
        function backgreen4()
        {
            selectOption4.style.backgroundColor = "green";
        }
        function backtransparent4()
        {
            selectOption4.style.backgroundColor = "transparent";
        }
      
        function backred4()
        {
            selectOption4.style.backgroundColor = "red";
        }
        

    var btn = document.getElementById('button');
      
    var sawal =  document.getElementById("sawal");
    sawal.innerHTML =  ques[0].question;

   var selectOption1 =  document.getElementById("option1");
   selectOption1.innerHTML = ques[0].options[0];
   var selectOption2 = document.getElementById("option2");
   selectOption2.innerHTML = ques[0].options[1];
   var selectOption3 = document.getElementById("option3");
   selectOption3.innerHTML = ques[0].options[2];
   var selectOption4 = document.getElementById("option4");
   selectOption4.innerHTML = ques[0].options[3]; 

  
    
    selectOption1.addEventListener("click" , function () 
  {
      selectOption1.style.backgroundColor = "green";
        if(selectOption1.textContent == ques[state].answer )
        {
           
           state = state + 1;
           correct = correct + 1;
           crt.innerHTML = correct;
           btnTimer();
           setTimeout(btnTimer1,200);
           backgreen1();
           setTimeout(backtransparent1,200);
           sawal.innerHTML = ques[state].question;
           selectOption1.innerHTML = ques[state].options[0];
            selectOption2.innerHTML = ques[state].options[1];
            selectOption3.innerHTML = ques[state].options[2];
            selectOption4.innerHTML = ques[state].options[3];
            
            endGame();
           
            
        }
        else
        {
            backred1();
          wrongAttempt();
            
        }
        
  });
    
    selectOption2.addEventListener("click" ,  function ()
  {
  
    if(selectOption2.textContent == ques[state].answer )
        {
           
            state = state + 1;
           correct = correct + 1;
           crt.innerHTML = correct;
           btnTimer();
           setTimeout(btnTimer1,200);
           backgreen2();
           setTimeout(backtransparent2,200);
           sawal.innerHTML = ques[state].question;
           selectOption1.innerHTML = ques[state].options[0];
            selectOption2.innerHTML = ques[state].options[1];
            selectOption3.innerHTML = ques[state].options[2];
            selectOption4.innerHTML = ques[state].options[3];
           
            endGame();
            
        }
        else
        {
            backred2();
         
           wrongAttempt();
        }
        
  });
   
    selectOption3.addEventListener("click" ,  function ()
  {
   
    if(selectOption3.textContent == ques[state].answer )
        {
           
            state = state + 1;
           correct = correct + 1;
           crt.innerHTML = correct;
           btnTimer();
           setTimeout(btnTimer1,200);
           backgreen3();
           setTimeout(backtransparent3,200);
           sawal.innerHTML = ques[state].question;
           selectOption1.innerHTML = ques[state].options[0];
            selectOption2.innerHTML = ques[state].options[1];
            selectOption3.innerHTML = ques[state].options[2];
            selectOption4.innerHTML = ques[state].options[3];
            
            endGame();
            
        }
        else
        {
            backred3();
          
            wrongAttempt();
            
        }
        
  });
   
    selectOption4.addEventListener("click" , function ()
  {
   
    if(selectOption4.textContent == ques[state].answer )
        {
           
            state = state + 1;
           correct = correct + 1;
           crt.innerHTML = correct;
           btnTimer();
           setTimeout(btnTimer1,200);
           backgreen4();
           setTimeout(backtransparent4,200);
           sawal.innerHTML = ques[state].question;
           selectOption1.innerHTML = ques[state].options[0];
            selectOption2.innerHTML = ques[state].options[1];
            selectOption3.innerHTML = ques[state].options[2];
            selectOption4.innerHTML = ques[state].options[3];
            
            endGame();
            
        }
        else
        {
            backred4();
          
         wrongAttempt();
            
        }
      
  }); 

function endGame()
{
 if(state == 9)
  {
      location.href = "end.html";
  }

}


