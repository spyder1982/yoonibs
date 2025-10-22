// Minimal wallet connection demo using ethers.js if available.
// Demo only — for production use audited libraries and handle security carefully.
const connectBtn = document.getElementById('connectBtn');
if(connectBtn){
  connectBtn.addEventListener('click', async () => {
    if(window.ethereum){
      try{
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        connectBtn.textContent = address.slice(0,6) + '...' + address.slice(-4);
        connectBtn.disabled = true;
      }catch(e){
        console.error(e);
        alert('Connection rejected or failed.');
      }
    } else {
      alert('No injected wallet detected. Install MetaMask or use a Web3-enabled browser.');
    }
  });
}

// Note: Include ethers.js via CDN when deploying:
// <script src="https://cdn.jsdelivr.net/npm/ethers/dist/ethers.min.js"></script>
