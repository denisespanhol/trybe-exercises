const states = ['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO'];

const takeInitialsStates = document.querySelector('#sigles-states');
for (index = 0; index < states.length; index += 1) {
  takeInitialsStates.appendChild(document.createElement('option')).innerText = states[index];
}

const takeDate = document.querySelector('#date');
const takeSendButton = document.querySelector('#send-button');
