$(function () {
    $('.connection').click(function () {
        $('.connectinterface').remove();
        $('.vide').append(`<div class="connectinterface">
    <span class="croix" onclick="fermer()">X</span><br>
    <form id="contact-form" method="post" action="" class="contact-form form">
                  <div class="controls">
                    <div class="row">
                    <div class="col-sm-2"></div>
                      <div class="col-sm-8">
                        <div class="form-group">
                          <label for="name">Votre Pseudo *</label>
                          <input type="text" name="pseudo" id="pseudo" placeholder="Entrez votre Pseudo" required="required" class="form-control">
                        </div>
                      </div>
                      <div class="col-sm-2"></div>
                      </div>
                      <div class="row">
                      <div class="col-sm-2"></div>
                      <div class="col-sm-8">
                        <div class="form-group">
                          <label for="surname">Votre Mot de Passe *</label>
                          <input type="text" name="mdp" id="mdp" placeholder="Entrez votre Mot de passe" required="required" class="form-control">
                        </div>
                      </div>
                      <div class="col-sm-2"></div>
                    </div>
                    <div class="row">
                    <div class="col-sm-2"></div>
                     <div class="col-sm-8 text-center">
                      <input type="submit" value="Envoyez message" class="btn btn-primary btn-block">
                    </div>
                    <div class="col-sm-2"></div>
                    </div>
                  </div>
                </form>
              </div></div>`)
        $('.connectinterface').hide().fadeIn(400)
    });
});



function fermer() {
    $('.connectinterface').fadeOut(400);
}




