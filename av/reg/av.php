
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="./css/av.css" />
    <script src="https://www.google.com/recaptcha/enterprise.js" async defer></script>
  </head>
  <body>
    <div class="screen">
      <div class="overlap-wrapper">
        <form action="http://localhost/курсач/login.php" method="post" class="overlap">
          <div class="content-wrapper"></div> 
          <div class="div"></div>
          <input class="rectangle" id="login" name="login" type="text" placeholder="Логин" required>
          <input class="rectangle-2" id="password" name="password" type="password" placeholder="Пароль" required>
          <a href="./reg.php"><div class="group">
           <div class="overlap-group style_button"><div class="text-wrapper-3">Регистрация</div></div>
          </div></a>
          <div class="overlap-group-wrapper">
          <div id="cap" class="g-recaptcha" data-sitekey="6Ldknf8pAAAAAPgfbje1a2lI2bfNeL0cX6dL1XQN" data-action="LOGIN"></div>
            <button type="submit" class="div-wrapper style_button"><div class="text-wrapper-4">Вход</div></button>
          </div>
          <div class="group-2">
            <div class="text-wrapper-5">YouPlay</div>
            <a href="/start.html"><img class="element" src="/img/----------1.svg" /></a>
          </div>
        </form>
      </div>
    </div>
  </body>

</html>

