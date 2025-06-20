function calculateAge() {
    const dob = document.getElementById('dob').value;
    if (!dob) {
      alert("Please select your date of birth.");
      return;
    }
  
    const dobDate = new Date(dob);
    const now = new Date();
  
    let years = now.getFullYear() - dobDate.getFullYear();
    let months = now.getMonth() - dobDate.getMonth();
    let days = now.getDate() - dobDate.getDate();
  
    // Adjust for negative months or days in the calculation
    if (days < 0) {
      months--;
      days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    }
    if (months < 0) {
      years--;
      months += 12;
    }
  
    document.getElementById('result').innerText = `You are ${years} years, ${months} months, and ${days} days old.`;
  }
  