 function teleBot() {
        var strText = document.getElementById("name").value;      
        var strText2 = document.getElementById("email").value;
        var strText3 = document.getElementById("Message").value;
        var result1 = '<br/>Name:  '+strText + '<br/>Place: ' + strText2+'<br/>Message: ' + strText3;
        document.getElementById("create-form").addEventListener("submit", (e) => {
        e.preventDefault();
                  if(strText==""||strText2==""||strText3=="")
                     {
                          console.log('error');
                     }
                 else       
                      {

                      
                    Email.send({
                Host:"smtp.gmail.com",
                Username:'thereciprocalolutions.projects@gmail.com',
                Password:'cgenxthsgpwplxoy',
                To: 'picxelinfotech@gmail.com',
                From: 'thereciprocalolutions.projects@gmail.com',
                Subject: 'New Enquiry From '+strText,
                Body:'The New Enquriy Details'+result1+'<br/>',
                }).then((message)=>alert("Your enquiry has been submitted.We will get back to you in 24 Hours."));
                }
        }); 
                      
                      
                      
                      }
