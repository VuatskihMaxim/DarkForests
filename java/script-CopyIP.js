const btnCopyIP = document.getElementById("copyBtnIP")
const elCopyIP = document.getElementById("copyIP")
const toastIPExample = document.getElementById("IPToast")
btnCopyIP.onclick = function() {
  navigator.clipboard.writeText(elCopyIP.textContent)
}
if (btnCopyIP) {
  btnCopyIP.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastIPExample)

    toast.show()
  })
}

