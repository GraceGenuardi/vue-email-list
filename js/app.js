//1-CONST BOTTONE E LISTA EMAIL

const generateBtn = document.getElementById('generateBtn');
const emailList = document.getElementById('emailList');

//2-AXIOS + lista email

generateBtn.addEventListener('click', () => {
	axios.all([
		axios.get('https://flynn.boolean.careers/exercises/api/random/mail'),
		axios.get('https://flynn.boolean.careers/exercises/api/random/mail'),
		axios.get('https://flynn.boolean.careers/exercises/api/random/mail'),
		axios.get('https://flynn.boolean.careers/exercises/api/random/mail'),
		axios.get('https://flynn.boolean.careers/exercises/api/random/mail'),
		axios.get('https://flynn.boolean.careers/exercises/api/random/mail'),
		axios.get('https://flynn.boolean.careers/exercises/api/random/mail'),
		axios.get('https://flynn.boolean.careers/exercises/api/random/mail'),
		axios.get('https://flynn.boolean.careers/exercises/api/random/mail'),
		axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        
	])
	.then(axios.spread((...responses) => {
		//3-Ciclo for per generare e stampare un elenco di email casuali
		for (let response of responses) {
			let email = response.data.response;
			let listItem = document.createElement('li');
			listItem.innerText = email;
			emailList.appendChild(listItem);
		}
	}))
	
});

