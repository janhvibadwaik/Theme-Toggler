const inputElement= document.getElementById("input-name");
        const userNameElement=document.getElementById("text-user-name");
        const btnSubmit=document.getElementById("btn-submit");
        const iconLight=document.getElementById("icon-light");
        const iconDark=document.getElementById("icon-dark");
        const themeToggle=document.getElementById("theme-toggle");


        function saveUserDetails(){
        const userName= inputElement.value;

            if(userName){
                localStorage.setItem("userName", userName);
                userNameElement.innerText=userName;
                inputElement.value="";
                hideInputForm();
            }
            else{
                alert("Please enter your name");
            }
        }


        function showDisplayNameIfAlreadyStored(){
            
            const storeduserName=localStorage.getItem("userName");

            if(storeduserName){
                userNameElement.innerText=storeduserName;
                hideInputForm();
            }
        }

        function hideInputForm(){
            inputElement.style.display="none";
            btnSubmit.style.display="none";
        }

        function logout(){
            localStorage.clear();
            window.location.reload();
        }
        
        showDisplayNameIfAlreadyStored();

        function toggleTheme(){
            const localStorageTheme= localStorage.getItem("theme");
            if(localStorageTheme==="dark"){
                toggleLight();
                localStorage.setItem("theme","light");
            }
            else{
                toggleDark();
                localStorage.setItem("theme","dark");
            }
        }
        function toggleDark(){
            document.body.style.backgroundColor="#000000";
            document.body.style.color="#ffffff";
            iconLight.style.visibility="hidden";
            iconDark.style.visibility="visible";
            themeToggle.classList.add("theme-toggle-dark");
            themeToggle.classList.remove("theme-toggle-light");
        }

        function toggleLight(){
            document.body.style.backgroundColor="#ffffff";
            document.body.style.color="#000000";
            iconDark.style.visibility="hidden";
            iconLight.style.visibility="visible";
            themeToggle.classList.add("theme-toggle-light");
            themeToggle.classList.remove("theme-toggle-dark");
        }

        function renderTheme(){
            const localStorageTheme= localStorage.getItem("theme");
            if(localStorageTheme==="dark"){
                toggleDark();
            }
            else{
                toggleLight();
            }
        }
        renderTheme();