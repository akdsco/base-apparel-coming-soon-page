"use strict";var form=document.getElementById("emailForm"),emailInput=document.getElementById("emailInput"),emailSubmitBtn=document.getElementById("emailSubmit"),invalidIcon=document.getElementById("invalid-icon"),invalidInfo=document.getElementById("invalid-info"),flag=!0;function validateEmail(i){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(i).toLowerCase())}emailSubmitBtn.onclick=function(i){i.preventDefault(),validateEmail(emailInput.value)?(invalidIcon.classList.remove("main--form-invalid-icon__displayed"),invalidInfo.classList.remove("main--form-invalid-info__displayed"),emailInput.classList.remove("main--form-input__invalid"),flag=!0,form.submit()):flag&&(invalidIcon.classList.add("main--form-invalid-icon__displayed"),invalidInfo.classList.add("main--form-invalid-info__displayed"),emailInput.classList.add("main--form-input__invalid"),flag=!1)},emailInput.onblur=function(){validateEmail(emailInput.value)||""===emailInput.value?(invalidIcon.classList.remove("main--form-invalid-icon__displayed"),invalidInfo.classList.remove("main--form-invalid-info__displayed"),emailInput.classList.remove("main--form-input__invalid"),flag=!0):flag&&(invalidIcon.classList.add("main--form-invalid-icon__displayed"),invalidInfo.classList.add("main--form-invalid-info__displayed"),emailInput.classList.add("main--form-input__invalid"),flag=!1)};