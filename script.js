document.addEventListener("DOMContentLoaded", function(event) { 
  const sign = document.getElementById('sign');
  const address = document.getElementsByName('address')[0];
  const result = document.getElementById('sign_result');

  sign.addEventListener('click', async () => {
    await window.ethereum.enable();
    const payload = {
      method : 'eth_sign',
      params : [address.value, '0x' + '0'.repeat(64)]
    };

    try {
      const result = await window.ethereum.request(payload)
      console.log(result);
      sign_result.value = result;
    } catch (e) {
      sign_result.value = e.message;
    }
  })
});