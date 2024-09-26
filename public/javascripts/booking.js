document.addEventListener('DOMContentLoaded', function() {
    const checkinInput = document.getElementById('checkin');
    const checkoutInput = document.getElementById('checkout');
  
    checkinInput.addEventListener('change', function() {
      const checkinDate = new Date(this.value);
      checkoutInput.min = checkinDate.toISOString().split('T')[0]; // Set checkout min to check-in date
    });
  });
  