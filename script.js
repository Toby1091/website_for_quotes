<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Quote of the Day</title>
  <style>
    body {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
      text-align: center;
    }
    #quote {
      max-width: 800px;
      margin: auto;
    }
    #quote p {
      font-size: 2em;
      line-height: 1.2em;
      margin: 0;
      padding: 20px;
    }
  </style>
</head>
<body>
  <div id="quote">
    <p id="quote-text"></p>
    <p id="quote-author"></p>
  </div>

  <script src="index.js"></script>
</body>
</html>
