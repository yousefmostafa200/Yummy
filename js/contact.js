export function contact() {
  const dataContainer = $('#mealsData');
  dataContainer.html(`
        <div class="contact min-vh-100 d-flex justify-content-center align-items-center">
            <div class="container w-75 text-center">
                <div class="row g-4">
                    <div class="col-md-6">
                        <input id="nameInput" type="text" class="form-control bg-dark text-white " placeholder="Name">
                        <div id="nameAlert" class="alert alert-danger w-100 mt-2 d-none">
                            Special characters and numbers not allowed
                        </div>
                    </div>
                    <div class="col-md-6">
                        <input id="emailInput" type="email" class="form-control bg-dark text-white" placeholder="Email">
                        <div id="emailAlert" class="alert alert-danger w-100 mt-2 d-none">
                            Email not valid *example@yyy.zzz
                        </div>
                    </div>
                    <div class="col-md-6">
                        <input id="phoneInput" type="text" class="form-control bg-dark text-white" placeholder=" Phone">
                        <div id="phoneAlert" class="alert alert-danger w-100 mt-2 d-none">
                            Enter valid Phone Number
                        </div>
                    </div>
                    <div class="col-md-6">
                        <input id="ageInput" type="number" class="form-control bg-dark text-white" placeholder="Age">
                        <div id="ageAlert" class="alert alert-danger w-100 mt-2 d-none">
                            Enter valid age
                        </div>
                    </div>
                    <div class="col-md-6">
                        <input id="passwordInput" type="password" class="form-control bg-dark text-white" placeholder="Password">
                        <div id="passwordAlert" class="alert alert-danger w-100 mt-2 d-none">
                            Enter valid password *Minimum eight characters, at least one letter and one number:*
                        </div>
                    </div>
                    <div class="col-md-6">
                        <input id="repasswordInput" type="password" class="form-control bg-dark text-white" placeholder="Re-Password">
                        <div id="repasswordAlert" class="alert alert-danger w-100 mt-2 d-none">
                            Enter valid repassword 
                        </div>
                    </div>
                </div>
                <button id="submitBtn" disabled class="btn btn-outline-danger px-2 mt-4">Submit</button>
            </div>
        </div>
    `);

  let nameInputTouched = false;
  let emailInputTouched = false;
  let phoneInputTouched = false;
  let ageInputTouched = false;
  let passwordInputTouched = false;
  let repasswordInputTouched = false;

  const inputsValidation = () => {
    if (nameInputTouched) {
      nameValidation()
        ? $('#nameAlert').addClass('d-none')
        : $('#nameAlert').removeClass('d-none');
    }
    if (emailInputTouched) {
      emailValidation()
        ? $('#emailAlert').addClass('d-none')
        : $('#emailAlert').removeClass('d-none');
    }
    if (phoneInputTouched) {
      phoneValidation()
        ? $('#phoneAlert').addClass('d-none')
        : $('#phoneAlert').removeClass('d-none');
    }
    if (ageInputTouched) {
      ageValidation()
        ? $('#ageAlert').addClass('d-none')
        : $('#ageAlert').removeClass('d-none');
    }
    if (passwordInputTouched) {
      passwordValidation()
        ? $('#passwordAlert').addClass('d-none')
        : $('#passwordAlert').removeClass('d-none');
    }
    if (repasswordInputTouched) {
      repasswordValidation()
        ? $('#repasswordAlert').addClass('d-none')
        : $('#repasswordAlert').removeClass('d-none');
    }

    nameValidation() &&
    emailValidation() &&
    phoneValidation() &&
    ageValidation() &&
    passwordValidation() &&
    repasswordValidation()
      ? $('#submitBtn').removeAttr('disabled')
      : $('#submitBtn').attr('disabled', true);
  };

  const nameValidation = () => /^[a-zA-Z ]+$/.test($('#nameInput').val());

  const emailValidation = () =>
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      $('#emailInput').val()
    );

  const phoneValidation = () =>
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(
      $('#phoneInput').val()
    );

  const ageValidation = () =>
    /^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/.test($('#ageInput').val());

  const passwordValidation = () =>
    /^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/.test($('#passwordInput').val());

  const repasswordValidation = () =>
    $('#repasswordInput').val() === $('#passwordInput').val();

  $('#nameInput').on('focus', () => {
    nameInputTouched = true;
  });
  $('#emailInput').on('focus', () => {
    emailInputTouched = true;
  });
  $('#phoneInput').on('focus', () => {
    phoneInputTouched = true;
  });
  $('#ageInput').on('focus', () => {
    ageInputTouched = true;
  });
  $('#passwordInput').on('focus', () => {
    passwordInputTouched = true;
  });
  $('#repasswordInput').on('focus', () => {
    repasswordInputTouched = true;
  });

  $(
    '#nameInput, #emailInput, #phoneInput, #ageInput, #passwordInput, #repasswordInput'
  ).on('keyup', inputsValidation);
}
