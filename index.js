const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('#modal-close-btn');
const modalForm = document.querySelector('#modal-form');
const modalText = document.querySelector('#modal-text');
const modalInner = document.querySelector('#modal-inner');
const modalBtns = document.querySelector('.modal-choice-btns');
const declineBtn = document.querySelector('.decline');

setTimeout(function() {
   modal.style.display = 'block';
}, 3000);

closeBtn.addEventListener("click", function() {
   modal.style.display = 'none';
})


declineBtn.addEventListener('mouseenter', function(){
   modalBtns.classList.toggle('reverse');
})

modalForm.addEventListener('submit', function(e){
   e.preventDefault();
   const modalFormData = new FormData(modalForm);
   console.log(modalFormData);
   const userName = modalFormData.get('userName');
   modalText.innerHTML = `<div class="modal-inner-loading">
                              <img src="images/loading.svg" class="loading">
                              <p id="uploadText">
                                 Uploading your data to the dark web...
                              </p>
                           </div>`;
   setTimeout(function() {
      document.querySelector('#uploadText').innerText = `Making the sale...`;
   }, 2500);
   setTimeout(function(){
      modalInner.innerHTML = `<h2>Thanks <span class='modal-display-name'>${userName}</span>, you sucker! </h2>
                              <p>We just sold the rights to your eternal soul.</p>
                              <div class="idiot-gif">
                                 <img src="images/pirate.gif">
                              </div>
                              `
      closeBtn.disabled = false;
   }, 5000);
})

