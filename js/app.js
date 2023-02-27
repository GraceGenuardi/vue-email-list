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
	
});

