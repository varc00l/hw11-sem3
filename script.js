let bankAccount = {
    ownerName: 'John Doe',
    accountNumber: '123456789',
    balance: 0,
    
    deposit(amount) {
      this.balance += amount;
      alert(`Залишок на рахунку: ${this.balance}`);
      document.getElementById("balance").innerText = `Balance: ${this.balance}`;
    },
    
    withdraw(amount) {
      if (this.balance >= amount) {
        this.balance -= amount;
        alert(`Залишок на рахунку: ${this.balance}`);
      } else {
        alert("Недостатньо коштів на рахунку");
      }
      document.getElementById("balance").innerText = `Balance: ${this.balance}`;
    }
};

let weather = {
    temperature: 0,
    humidity: 50,
    windSpeed: 10,
    
    checkTemperature() {
      this.temperature = parseFloat(document.getElementById("temperatureInput").value);
      if (this.temperature < 0) {
        document.getElementById("weatherResult").innerText = "Температура нижче 0 градусів Цельсія";
      } else {
        document.getElementById("weatherResult").innerText = "Температура вище або рівна 0 градусів Цельсія";
      }
    }
};

let user = {
    name: 'John Doe',
    email: 'test@example.com',
    password: 'password123',
    
    login() {
      let inputEmail = document.getElementById("emailInput").value;
      let inputPassword = document.getElementById("passwordInput").value;
      
      if (inputEmail === this.email && inputPassword === this.password) {
        document.getElementById("loginResult").innerText = "Login successful!";
      } else {
        document.getElementById("loginResult").innerText = "Invalid email or password!";
      }
    }
};
  
let movie = {
    title: 'Inception',
    director: 'Christopher Nolan',
    year: 2010,
    rating: 8.8,
    
    checkRating() {
      if (this.rating > 8) {
        document.getElementById("movieTitle").style.color = 'green';
        alert('Цей фільм має високий рейтинг');
      } else {
        alert('Рейтинг фільму нижче або рівний 8');
      }
    }
};
  

  
  