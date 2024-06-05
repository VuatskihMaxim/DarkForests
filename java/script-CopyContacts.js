const btnCopyDS = document.getElementById("copyBtnDS")
const elCopyDS = document.getElementById("copyDS")
const toastDSExample = document.getElementById('DSToast')
const btnCopyEmail = document.getElementById("copyBtnEmail")
const elCopyEmail = document.getElementById("copyEmail")
const toastEmailExample = document.getElementById('EmailToast')
btnCopyDS.onclick = function() {
  navigator.clipboard.writeText(elCopyDS.textContent)
}
if (btnCopyDS) {
  btnCopyDS.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastDSExample)

    toast.show()
  })
}
btnCopyEmail.onclick = function() {
  navigator.clipboard.writeText(elCopyEmail.textContent)
}
if (btnCopyEmail) {
  btnCopyEmail.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastEmailExample)

    toast.show()
  })
}