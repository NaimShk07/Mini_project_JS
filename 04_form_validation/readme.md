# Learnings

1. onsubmit="return run(this)
2. function run(str) { }
3. return false; //it will stop data from going to backend, if data doesn't fullfilled the criteria
4. var mail = /^[a-zA-Z0-9_]+@[a-zA-Z]+\.[a-zA-Z]{2,4}$/;
5. !mail.test(str.email.value)
6. var phone = /^[0-9]{10,11}$/;
7. !phone.test(str.num.value)

