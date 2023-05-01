const select = document.getElementById('subject');      
cardData.forEach(card => {
    const option = document.createElement('option');
    option.textContent = card.name;
    select.appendChild(option);
  });

