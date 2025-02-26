
//nav bar code

document.querySelectorAll(".nav-item").forEach(item => {
    item.addEventListener("mousedown", () => {
      gsap.to(item, { scale: 0.95, duration: 0.1 });
    });
    item.addEventListener("mouseup", () => {
      gsap.to(item, { scale: 1, duration: 0.1 });
    });
  });
  



  //start of letter

  var quotesArray = [
		'Thank you for your service to our country as president. I appreciate the hard work and dedication it takes to lead the nation. I hope you continue to inspire young people to take an interest in leadership and government.',
'Being president is a big responsibility, and I imagine it must be very challenging. I hope you always make decisions that help the American people. Thank you for your time and effort in leading the country.',
'Leadership requires courage, and I admire the dedication it takes to serve in such an important role. No matter what, the job of president shapes the future of our country. I hope you always keep the best interests of the people in mind.',
'I have been learning about the role of the president in school, and it seems like a very difficult job. It must take a lot of effort to balance the needs of so many people. I hope you continue to work toward making the country better for everyone.',
'As a student, I find it interesting to learn about how the government works. The decisions a president makes can affect many people, and I hope you always consider what is best for the country. Thank you for taking on this responsibility.',
'I hope you are doing well and staying strong in your leadership role. Being president must be a tough job with many challenges to face every day. Thank you for your commitment to leading our country.',
'It is interesting to learn about the responsibilities of a president and how decisions are made. I know that leading a country is not easy, and it takes a lot of hard work. I hope you continue to do your best for the American people.'
	]
	var randomNumber = Math.floor(Math.random() * quotesArray.length);
	document.getElementById('press-quote').textContent = quotesArray [randomNumber].split(' — ')[0]  + quotesArray[randomNumber].split('—')[1];


  //start of name
  let userName = prompt("Hello, What is your name?")

let responseImg = document.getElementById('response-img')
let responseText = document.getElementById('response-text')
let greeting = document.getElementById('greeting')


userName ? document.getElementById('greeting').innerText=`${userName}!` 
: document.getElementById('greeting').innerText='Anonymous!'
