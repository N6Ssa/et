(()=>{
const dialog=document.getElementById('application-dialog');
const form=document.getElementById('application-form');
const status=document.getElementById('application-status');
document.getElementById('apply-open').addEventListener('click',()=>dialog.showModal());
document.getElementById('dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target!==dialog)return;const box=dialog.getBoundingClientRect();if(event.clientX<box.left||event.clientX>box.right||event.clientY<box.top||event.clientY>box.bottom)dialog.close();});
form.addEventListener('submit',event=>{event.preventDefault();if(!form.reportValidity())return;status.textContent='Демонстрация завершена. В рабочей версии здесь появится подтверждение заявки. Сейчас данные никуда не отправлены.';});
})();
