const ticketForm = document.querySelector('form');
ticketForm.addEventListener('submit', computeTicket);
ticketForm.addEventListener('input', hideOutput);

function computeTicket(event) {
    event.preventDefault();
    const kmInput = document.getElementById('km');
    const ageInput = document.getElementById('eta');

    const kmValue = parseInt(kmInput.value);
    const ageValue = parseInt(ageInput.value);
    const priceOutput = getPrice(kmValue, ageValue);
    console.log(priceOutput);

    document.getElementById('kmOutput').innerHTML = kmValue;
    document.getElementById('offerOutput').innerHTML = priceOutput.offer;
    document.getElementById('priceOutput').innerHTML = priceOutput.price;
}
function getPrice(km, eta) {
    let price = km * 0.21;
    let offer = 'Standard';
    if (eta < 18) {
      price = price - price * 0.2;
      offer = 'Sconto minorenni';
    }
    if (eta >= 65) {
      price = price - price * 0.4;
      offer = 'Sconto over 65';
    }
    return {
      price: price,
      offer: offer,
    };
  }